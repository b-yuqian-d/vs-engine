/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Disposable } from '../../../base/common/lifecycle.js';
import { IExtHostContext, extHostNamedCustomer } from '../../services/extensions/common/extHostCustomers.js';
import { ChatInputNotificationDto, MainContext, MainThreadChatInputNotificationShape } from '../common/extHost.protocol.js';

@extHostNamedCustomer(MainContext.MainThreadChatInputNotification)
export class MainThreadChatInputNotification extends Disposable implements MainThreadChatInputNotificationShape {

	constructor(
		_extHostContext: IExtHostContext,
	) {
		super();
	}

	$setNotification(notification: ChatInputNotificationDto): void {
		// no op
	}

	$disposeNotification(id: string): void {
		// no op
	}
}
