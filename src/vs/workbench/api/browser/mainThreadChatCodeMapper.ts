/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import { Disposable } from '../../../base/common/lifecycle.js';
import { extHostNamedCustomer, IExtHostContext } from '../../services/extensions/common/extHostCustomers.js';
import { ICodeMapperProgressDto , MainContext, MainThreadCodeMapperShape } from '../common/extHost.protocol.js';

@extHostNamedCustomer(MainContext.MainThreadCodeMapper)
export class MainThreadChatCodemapper extends Disposable implements MainThreadCodeMapperShape {
	constructor(
		extHostContext: IExtHostContext,
	) {
		super();
	}

	$registerCodeMapperProvider(handle: number, displayName: string): void {
		// no op
	}

	$unregisterCodeMapperProvider(handle: number): void {
		// no op
	}

	$handleProgress(requestId: string, data: ICodeMapperProgressDto): Promise<void> {
		return Promise.resolve();
	}
}
