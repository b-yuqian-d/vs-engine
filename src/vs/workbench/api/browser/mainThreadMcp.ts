/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Disposable } from '../../../base/common/lifecycle.js';
import { URI, UriComponents } from '../../../base/common/uri.js';
import { LogLevel } from '../../../platform/log/common/log.js';
import { McpCollectionDefinition, McpConnectionState, McpServerDefinition } from '../../contrib/mcp/common/mcpTypes.js';
import { IExtHostContext, extHostNamedCustomer } from '../../services/extensions/common/extHostCustomers.js';
import { IMcpAuthenticationDetails, IMcpAuthenticationOptions, IAuthMetadataSource, MainContext, MainThreadMcpShape } from '../common/extHost.protocol.js';

@extHostNamedCustomer(MainContext.MainThreadMcp)
export class MainThreadMcp extends Disposable implements MainThreadMcpShape {

	constructor(
		extHostContext: IExtHostContext,
	) {
		super();
	}

	$upsertMcpCollection(collection: McpCollectionDefinition.FromExtHost, serversDto: McpServerDefinition.Serialized[]): void {
		// no op
	}

	$deleteMcpCollection(collectionId: string): void {
		// no op
	}

	$onDidChangeState(id: number, update: McpConnectionState): void {
		// no op
	}

	$onDidPublishLog(id: number, level: LogLevel, log: string): void {
		// no op
	}

	$onDidReceiveMessage(id: number, message: string): void {
		// no op
	}

	async $getTokenForProviderId(id: number, providerId: string, scopes: string[], options: IMcpAuthenticationOptions = {}): Promise<string | undefined> {
		// no op
		return undefined;
	}

	async $getTokenFromServerMetadata(id: number, authDetails: IMcpAuthenticationDetails, authOptions: IMcpAuthenticationOptions = {}): Promise<string | undefined> {
		// no op
		return undefined;
	}

	$logMcpAuthSetup(data: IAuthMetadataSource): void {
		// no op
	}

	async $startMcpGateway(chatSessionResource?: UriComponents): Promise<{ servers: { label: string; address: URI }[]; gatewayId: string } | undefined> {
		// no op
		return undefined;
	}

	$disposeMcpGateway(gatewayId: string): void {
		// no op
	}
}

/**
 * The context needed to re-acquire a token for a tracked MCP server, captured when the
 * session was first established. The tracker holds this opaquely and replays it verbatim on
 * re-validation so the silent token request targets the same authority / resource / audience
 * that the original sign-in used. Dropping the authorization server here would let the provider
 * fall back to a default authority (e.g. the Microsoft provider's `organizations` tenant) and
 * request a token against the wrong tenant.
 */
export interface IMcpServerAuthContext {
	readonly authorizationServer?: URI;
	readonly clientId?: string;
	readonly resource?: string;
	readonly audience?: string;
}

/**
 * Tracks which MCP servers are using which authentication providers.
 * Organized by provider ID for efficient lookup when auth sessions change.
 */
export class McpServerAuthTracker {
	// Provider ID -> Array of tracked servers (serverId, scopes, and the auth context to replay)
	private readonly _tracking = new Map<string, Array<{ serverId: number; scopes: string[]; context: IMcpServerAuthContext }>>();

	/**
	 * Track authentication for a server with a specific provider.
	 * Replaces any existing tracking for this server/provider combination.
	 */
	track(providerId: string, serverId: number, scopes: string[], context: IMcpServerAuthContext): void {
		const servers = this._tracking.get(providerId) || [];
		const filtered = servers.filter(s => s.serverId !== serverId);
		filtered.push({ serverId, scopes, context });
		this._tracking.set(providerId, filtered);
	}

	/**
	 * Remove all authentication tracking for a server across all providers.
	 */
	untrack(serverId: number): void {
		for (const [providerId, servers] of this._tracking.entries()) {
			const filtered = servers.filter(s => s.serverId !== serverId);
			if (filtered.length === 0) {
				this._tracking.delete(providerId);
			} else {
				this._tracking.set(providerId, filtered);
			}
		}
	}

	/**
	 * Get all servers using a specific authentication provider.
	 */
	get(providerId: string): ReadonlyArray<{ serverId: number; scopes: string[]; context: IMcpServerAuthContext }> | undefined {
		return this._tracking.get(providerId);
	}

	/**
	 * Clear all tracking data.
	 */
	clear(): void {
		this._tracking.clear();
	}
}
