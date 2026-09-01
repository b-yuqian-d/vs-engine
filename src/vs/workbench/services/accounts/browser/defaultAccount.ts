/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { IDefaultAccount, IDefaultAccountAuthenticationProvider, IPolicyData } from '../../../../base/common/defaultAccount.js';
import { Event } from '../../../../base/common/event.js';
import { Disposable } from '../../../../base/common/lifecycle.js';
import { localize2 } from '../../../../nls.js';
import { Action2, registerAction2 } from '../../../../platform/actions/common/actions.js';
import { RawContextKey } from '../../../../platform/contextkey/common/contextkey.js';
import { IDefaultAccountService, IDefaultAccountProvider } from '../../../../platform/defaultAccount/common/defaultAccount.js';
import { ServicesAccessor } from '../../../../platform/instantiation/common/instantiation.js';

export const DEFAULT_ACCOUNT_SIGN_IN_COMMAND = 'workbench.actions.accounts.signIn';

export const enum DefaultAccountStatus {
	Uninitialized = 'uninitialized',
	Unavailable = 'unavailable',
	Available = 'available',
}

export const CONTEXT_DEFAULT_ACCOUNT_STATE = new RawContextKey<string>('defaultAccountStatus', DefaultAccountStatus.Uninitialized);

export class DefaultAccountService extends Disposable implements IDefaultAccountService {
	declare readonly _serviceBrand: undefined;

	readonly onDidChangeDefaultAccount: Event<IDefaultAccount | null> = Event.None;
	readonly onDidChangePolicyData: Event<IPolicyData | null> = Event.None;
	readonly policyData: IPolicyData | null = null;
	readonly currentDefaultAccount: IDefaultAccount | null = null;
	readonly copilotTokenInfo = null;
	readonly onDidChangeCopilotTokenInfo: Event<null> = Event.None;
	readonly managedSettingsFetchStatus: null = null;
	readonly managedSettingsFetchedAt: null = null;
	readonly managedSettingsRawResponse: unknown = null;
	readonly managedSettingsCompatibilityError = null;
	readonly onDidChangeManagedSettingsCompatibilityError = Event.None;

	async getDefaultAccount(): Promise<IDefaultAccount | null> {
		return null;
	}

	getDefaultAccountAuthenticationProvider(): IDefaultAccountAuthenticationProvider {
		return { id: 'default', name: 'Default', enterprise: false };
	}

	setDefaultAccountProvider(provider: IDefaultAccountProvider): void {
		// no op
	}

	async refresh(): Promise<IDefaultAccount | null> {
		return null;
	}

	async signIn(): Promise<IDefaultAccount | null> {
		return null;
	}

	async signOut(): Promise<void> {
		// no op
	}

	resolveGitHubUrl(path: string): string {
		return `https://github.com/${path}`;
	}
}

registerAction2(class extends Action2 {
	constructor() {
		super({
			id: DEFAULT_ACCOUNT_SIGN_IN_COMMAND,
			title: localize2('signIn', 'Sign In'),
		});
	}
	async run(accessor: ServicesAccessor): Promise<void> {
		const defaultAccountService = accessor.get(IDefaultAccountService);
		await defaultAccountService.signIn();
	}
});
