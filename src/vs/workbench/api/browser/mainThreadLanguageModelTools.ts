/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { CancellationToken } from '../../../base/common/cancellation.js';
import { Disposable } from '../../../base/common/lifecycle.js';
import { ExtensionIdentifier } from '../../../platform/extensions/common/extensions.js';
import { IToolInvocation, IToolProgressStep, IToolResult } from '../../contrib/chat/common/tools/languageModelToolsService.js';
import { extHostNamedCustomer, IExtHostContext } from '../../services/extensions/common/extHostCustomers.js';
import { Dto, SerializableObjectWithBuffers } from '../../services/extensions/common/proxyIdentifier.js';
import { IToolDataDto, IToolDefinitionDto, MainContext, MainThreadLanguageModelToolsShape } from '../common/extHost.protocol.js';

@extHostNamedCustomer(MainContext.MainThreadLanguageModelTools)
export class MainThreadLanguageModelTools extends Disposable implements MainThreadLanguageModelToolsShape {

	constructor(
		extHostContext: IExtHostContext,
	) {
		super();
	}

	async $getTools(): Promise<IToolDataDto[]> {
		// no op
		return [];
	}

	async $invokeTool(dto: Dto<IToolInvocation>, token?: CancellationToken): Promise<Dto<IToolResult> | SerializableObjectWithBuffers<Dto<IToolResult>>> {
		// Only return content and metadata to EH
		const out: Dto<IToolResult> = {
			content: [],
		};
		return out;
	}

	$acceptToolProgress(callId: string, progress: IToolProgressStep): void {
		// no op
	}

	$countTokensForInvocation(callId: string, input: string, token: CancellationToken): Promise<number> {
		// no op
		return Promise.resolve(0);
	}

	$registerTool(id: string, hasHandleToolStream: boolean): void {
		// no op
	}

	$registerToolWithDefinition(extensionId: ExtensionIdentifier, definition: IToolDefinitionDto, hasHandleToolStream: boolean): void {
		// no op
	}

	$unregisterTool(name: string): void {
		// no op
	}
}
