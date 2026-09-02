/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Disposable } from '../../../base/common/lifecycle.js';
import { IExtHostContext, extHostNamedCustomer } from '../../services/extensions/common/extHostCustomers.js';
import { ChatStatusItemDto, MainContext, MainThreadChatStatusShape } from '../common/extHost.protocol.js';

@extHostNamedCustomer(MainContext.MainThreadChatStatus)
export class MainThreadChatStatus extends Disposable implements MainThreadChatStatusShape {

	constructor(
		_extHostContext: IExtHostContext,
	) {
		super();
	}

	$setEntry(id: string, entry: ChatStatusItemDto): void {
		// no op
	}

	$disposeEntry(id: string): void {
		// no op
	}
}
