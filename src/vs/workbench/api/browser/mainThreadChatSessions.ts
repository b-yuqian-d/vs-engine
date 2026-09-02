/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Disposable, } from '../../../base/common/lifecycle.js';
import { URI, UriComponents } from '../../../base/common/uri.js';
import { IChatContentInlineReference } from '../../contrib/chat/common/chatService/chatService.js';
import { IChatSessionItem, IChatSessionProviderOptionGroup, IChatSessionProviderOptionItem } from '../../contrib/chat/common/chatSessionsService.js';
import { extHostNamedCustomer, IExtHostContext } from '../../services/extensions/common/extHostCustomers.js';
import { Dto } from '../../services/extensions/common/proxyIdentifier.js';
import { IChatProgressDto, IChatSessionItemsChange, MainContext, MainThreadChatSessionsShape } from '../common/extHost.protocol.js';

@extHostNamedCustomer(MainContext.MainThreadChatSessions)
export class MainThreadChatSessions extends Disposable implements MainThreadChatSessionsShape {
	constructor(
		extHostContext: IExtHostContext,
	) {
		super();
	}

	$registerChatSessionItemController(handle: number, chatSessionType: string, supportsResolve: boolean): void {
		// no op
	}

	$updateChatSessionItemControllerCapabilities(handle: number, supportsResolve: boolean): void {
		// no op
	}

	async $updateChatSessionItems(controllerHandle: number, change: IChatSessionItemsChange): Promise<void> {
		// no op
	}

	async $addOrUpdateChatSessionItem(controllerHandle: number, item: Dto<IChatSessionItem>): Promise<void> {
		// no op
	}

	$onDidChangeChatSessionOptions(handle: number, sessionResourceComponents: UriComponents, updates: Record<string, string | IChatSessionProviderOptionItem>): void {
		// no op
	}

	async $onDidCommitChatSessionItem(handle: number, originalComponents: UriComponents, modifiedCompoennts: UriComponents): Promise<void> {
		// no op
	}

	$unregisterChatSessionItemController(handle: number): void {
		// no op
	}

	$registerChatSessionContentProvider(handle: number, chatSessionScheme: string): void {
		// no op
	}

	$unregisterChatSessionContentProvider(handle: number): void {
		// no op
	}

	async $handleProgressChunk(handle: number, sessionResource: UriComponents, requestId: string, chunks: (IChatProgressDto | [IChatProgressDto, number])[]): Promise<void> {
		// no op
	}

	$handleProgressComplete(handle: number, sessionResource: UriComponents, requestId: string) {
		// no op
	}

	$handleAnchorResolve(handle: number, sesssionResource: UriComponents, requestId: string, requestHandle: string, anchor: Dto<IChatContentInlineReference>): void {
		// no op
	}

	$onDidChangeChatSessionProviderOptions(handle: number): void {
		// no op
	}

	$updateChatSessionInputState(controllerHandle: number, sessionResource: UriComponents, optionGroups: readonly IChatSessionProviderOptionGroup[]): void {
		// no op
	}

	async notifyOptionsChange(handle: number, sessionResource: URI, updates: ReadonlyMap<string, string | IChatSessionProviderOptionItem | undefined>): Promise<void> {
		// no op
	}
}
