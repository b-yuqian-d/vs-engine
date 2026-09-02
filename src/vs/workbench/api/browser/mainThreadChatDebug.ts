/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Disposable } from '../../../base/common/lifecycle.js';
import { extHostNamedCustomer, IExtHostContext } from '../../services/extensions/common/extHostCustomers.js';
import { IChatDebugEventDto, MainContext, MainThreadChatDebugShape } from '../common/extHost.protocol.js';

@extHostNamedCustomer(MainContext.MainThreadChatDebug)
export class MainThreadChatDebug extends Disposable implements MainThreadChatDebugShape {

	constructor(
		extHostContext: IExtHostContext,
	) {
		super();
	}

	$subscribeToCoreDebugEvents(): void {
		// no op
	}

	$unsubscribeFromCoreDebugEvents(): void {
		// no op
	}

	$registerChatDebugLogProvider(handle: number): void {
		// no op
	}

	$unregisterChatDebugLogProvider(handle: number): void {
		// no op
	}

	$acceptChatDebugEvent(handle: number, dto: IChatDebugEventDto): void {
		// no op
	}
}
