/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { CancellationToken } from '../../../base/common/cancellation.js';
import { Disposable } from '../../../base/common/lifecycle.js';
import { UriComponents } from '../../../base/common/uri.js';
import { ExtensionIdentifier } from '../../../platform/extensions/common/extensions.js';
import { IChatContentInlineReference } from '../../contrib/chat/common/chatService/chatService.js';
import { IExtHostContext, extHostNamedCustomer } from '../../services/extensions/common/extHostCustomers.js';
import { Dto } from '../../services/extensions/common/proxyIdentifier.js';
import { IChatSessionCustomizationProviderMetadataDto, IChatProgressDto, ICustomAgentDto, IDynamicChatAgentProps, IExtensionChatAgentMetadata, IHookDto, IInstructionDto, IPluginDto, ISkillDto, ISlashCommandDto, MainContext, MainThreadChatAgentsShape2 } from '../common/extHost.protocol.js';

@extHostNamedCustomer(MainContext.MainThreadChatAgents2)
export class MainThreadChatAgents2 extends Disposable implements MainThreadChatAgentsShape2 {
	constructor(
		extHostContext: IExtHostContext,
	) {
		super();
	}

	async $provideCustomAgents(token: CancellationToken): Promise<ICustomAgentDto[]> {
		// no op
		return [];
	}

	async $provideInstructions(token: CancellationToken): Promise<IInstructionDto[]> {
		// no op
		return [];
	}

	async $provideSkills(token: CancellationToken): Promise<ISkillDto[]> {
		// no op
		return [];
	}

	async $provideSlashCommands(token: CancellationToken): Promise<ISlashCommandDto[]> {
		// no op
		return [];
	}

	async $provideHooks(token: CancellationToken): Promise<IHookDto[]> {
		// no op
		return [];
	}

	async $providePlugins(_token: CancellationToken): Promise<IPluginDto[]> {
		// no op
		return [];
	}


	$unregisterAgent(handle: number): void {
		// no op
	}

	async $transferActiveChatSession(toWorkspace: UriComponents): Promise<void> {
		// no op
	}

	async $registerAgent(handle: number, extension: ExtensionIdentifier, id: string, metadata: IExtensionChatAgentMetadata, dynamicProps: IDynamicChatAgentProps | undefined): Promise<void> {
		// no op
	}

	async $updateAgent(handle: number, metadataUpdate: IExtensionChatAgentMetadata): Promise<void> {
		// no op
	}

	async $handleProgressChunk(requestId: string, chunks: (IChatProgressDto | [IChatProgressDto, number])[]): Promise<void> {
		// no op
	}

	$handleAnchorResolve(requestId: string, handle: string, resolveAnchor: Dto<IChatContentInlineReference> | undefined): void {
		// no op
	}

	$registerAgentCompletionsProvider(handle: number, id: string, triggerCharacters: string[]): void {
		// no op
	}

	$unregisterAgentCompletionsProvider(handle: number, id: string): void {
		// no op
	}

	$registerChatParticipantDetectionProvider(handle: number): void {
		// no op
	}

	$unregisterChatParticipantDetectionProvider(handle: number): void {
		// no op
	}

	async $registerPromptFileProvider(handle: number, type: string, extensionId: ExtensionIdentifier): Promise<void> {
		// no op
	}

	$unregisterPromptFileProvider(handle: number): void {
		// no op
	}

	$onDidChangePromptFiles(handle: number): void {
		// no op
	}

	async $registerChatSessionCustomizationProvider(handle: number, chatSessionType: string, metadata: IChatSessionCustomizationProviderMetadataDto, extensionId: ExtensionIdentifier): Promise<void> {
		// no op
	}

	$unregisterChatSessionCustomizationProvider(handle: number): void {
		// no op
	}

	$onDidChangeCustomizations(handle: number): void {
		// no op
	}
}
