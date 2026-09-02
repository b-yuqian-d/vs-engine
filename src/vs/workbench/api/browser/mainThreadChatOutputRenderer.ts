/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Disposable } from '../../../base/common/lifecycle.js';
import { UriComponents } from '../../../base/common/uri.js';
import { ExtensionIdentifier } from '../../../platform/extensions/common/extensions.js';
import { IExtHostContext } from '../../services/extensions/common/extHostCustomers.js';
import { MainThreadChatOutputRendererShape } from '../common/extHost.protocol.js';

export class MainThreadChatOutputRenderer extends Disposable implements MainThreadChatOutputRendererShape {

	constructor(
		extHostContext: IExtHostContext,
	) {
		super();
	}

	$registerChatOutputRenderer(viewType: string, extensionId: ExtensionIdentifier, extensionLocation: UriComponents): void {
		// no op
	}

	$unregisterChatOutputRenderer(viewType: string): void {
		// no op
	}
}
