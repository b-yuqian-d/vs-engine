/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

// @ts-check

import path from 'path';
import { spawn } from 'child_process';
import { promises as fs } from 'fs';

const pnpm = process.platform === 'win32' ? 'pnpm.cmd' : 'pnpm';
const rootDir = path.resolve(__dirname, '..', '..');

function runProcess(command: string, args: ReadonlyArray<string> = []) {
	return new Promise<void>((resolve, reject) => {
		const child = spawn(command, args, { cwd: rootDir, stdio: 'inherit', env: process.env, shell: process.platform === 'win32' });
		child.on('exit', err => !err ? resolve() : process.exit(err ?? 1));
		child.on('error', reject);
	});
}

async function exists(subdir: string) {
	try {
		await fs.stat(path.join(rootDir, subdir));
		return true;
	} catch {
		return false;
	}
}

async function ensureNodeModules() {
	if (!(await exists('node_modules'))) {
		await runProcess(pnpm, ['install']);
	}
}

async function getElectron() {
	await runProcess(pnpm, ['run', 'electron']);
}

async function ensureCompiled() {
	if (!(await exists('out'))) {
		await runProcess(pnpm, ['run', 'compile']);
	}
}

async function ensureExtensions() {
	if (!(await exists('extensions'))) {
		await fs.mkdir('extensions');
	}
}

async function main() {
	await ensureNodeModules();
	await getElectron();
	await ensureCompiled();
	await ensureExtensions();
}

if (require.main === module) {
	main().catch(err => {
		console.error(err);
		process.exit(1);
	});
}
