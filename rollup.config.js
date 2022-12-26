import lwc from '@lwc/rollup-plugin';
import copy from 'rollup-plugin-copy';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import run from '@rollup/plugin-run';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dev = process.env.NODE_ENV !== 'production';
const appDir = dev?'build':'dist'; 

const lwcInputDir = path.resolve(__dirname, 'src/client/lwc/');
const lwcInput = path.join(lwcInputDir, 'main.js');
const lwcOutputDir = path.resolve(__dirname, appDir);
const lwcOutput = {
	file: path.join(lwcOutputDir, 'app.js'),
	format: 'esm'
};

const serverInputDir = path.resolve(__dirname, 'src/server/');
const serverInput = path.join(serverInputDir, 'index.js');
const serverOutputDir = path.resolve(__dirname);

const serverOutput = {
	file: path.join(serverOutputDir, 'index.js'),
	format: 'esm'
};

const lwcConfig = {
	input: lwcInput,
	output: lwcOutput,
	plugins: [
		resolve(),
		replace({
			'process.env.NODE_ENV': JSON.stringify('development'),
			preventAssignment: true
		}),
		lwc(),
		copy({
			targets: [
				{src: 'src/client/index.html', dest: lwcOutputDir}
			]
		})
	]
};

const serverConfig = {
    external: ['express', 'path', 'url'],
	input: serverInput,
	output: serverOutput,
	plugins: [dev && run()]
};

export default [lwcConfig, serverConfig];
