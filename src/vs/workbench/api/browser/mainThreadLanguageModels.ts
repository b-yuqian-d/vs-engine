/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { CancellationToken } from '../../../base/common/cancellation.js';
import { SerializedError } from '../../../base/common/errors.js';
import { UriComponents } from '../../../base/common/uri.js';
import { ExtensionIdentifier } from '../../../platform/extensions/common/extensions.js';
import { IChatMessage, IChatResponsePart, ILanguageModelChatSelector } from '../../contrib/chat/common/languageModels.js';
import { IExtHostContext, extHostNamedCustomer } from '../../services/extensions/common/extHostCustomers.js';
import { SerializableObjectWithBuffers } from '../../services/extensions/common/proxyIdentifier.js';
import { MainContext, MainThreadLanguageModelsShape } from '../common/extHost.protocol.js';

@extHostNamedCustomer(MainContext.MainThreadLanguageModels)
export class MainThreadLanguageModels implements MainThreadLanguageModelsShape {

	constructor(
		extHostContext: IExtHostContext,
	) {
	}

	dispose(): void {
		// no op
	}

	$registerLanguageModelProvider(vendor: string): void {
		// no op
	}

	$onLMProviderChange(vendor: string): void {
		// no op
	}

	async $reportResponsePart(requestId: number, chunk: SerializableObjectWithBuffers<IChatResponsePart | IChatResponsePart[]>): Promise<void> {
		// no op
	}

	async $reportResponseDone(requestId: number, err: SerializedError | undefined): Promise<void> {
		// no op
	}

	$unregisterProvider(vendor: string): void {
		// no op
	}

	$cancelLanguageModelChatRequest(requestId: number): void {
		// no op
	}

	$selectChatModels(selector: ILanguageModelChatSelector): Promise<string[]> {
		// no op
		return Promise.resolve([]);
	}

	async $tryStartChatRequest(extension: ExtensionIdentifier, modelIdentifier: string, requestId: number, messages: SerializableObjectWithBuffers<IChatMessage[]>, options: {}, token: CancellationToken): Promise<void> {
		// no op
	}


	$countTokens(modelId: string, value: string | IChatMessage, token: CancellationToken): Promise<number> {
		// no op
		return Promise.resolve(0);
	}

	$fileIsIgnored(uri: UriComponents, token: CancellationToken): Promise<boolean> {
		// no op
		return Promise.resolve(false);
	}

	$registerFileIgnoreProvider(handle: number): void {
		// no op
	}

	$unregisterFileIgnoreProvider(handle: number): void {
		// no op
	}
}
