/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Disposable } from '../../../base/common/lifecycle.js';
import { extHostNamedCustomer, IExtHostContext } from '../../services/extensions/common/extHostCustomers.js';
import { IChatContextItemDto, ITabSelectorDto, MainContext, MainThreadChatContextShape } from '../common/extHost.protocol.js';

@extHostNamedCustomer(MainContext.MainThreadChatContext)
export class MainThreadChatContext extends Disposable implements MainThreadChatContextShape {
	constructor(
		extHostContext: IExtHostContext,
	) {
		super();
	}

	$registerChatWorkspaceContextProvider(handle: number, id: string): void {
		// no op
	}

	$registerChatExplicitContextProvider(handle: number, id: string): void {
		// no op
	}

	$registerChatResourceContextProvider(handle: number, id: string, selector: ITabSelectorDto): void {
		// no op
	}

	$unregisterChatContextProvider(handle: number): void {
		// no op
	}

	$updateWorkspaceContextItems(handle: number, items: IChatContextItemDto[]): void {
		// no op
	}

	$executeChatContextItemCommand(itemHandle: number): Promise<void> {
		// no op
		return Promise.resolve();
	}
}
