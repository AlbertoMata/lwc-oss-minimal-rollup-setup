import lwc from '@lwc/rollup-plugin';
import replace from '@rollup/plugin-replace';
import run from '@rollup/plugin-run';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dev = process.env.NODE_ENV !== 'production';

const lwcInputDir = path.resolve(__dirname, 'src/client/lwc/');
const lwcInput = path.join(lwcInputDir, 'main.js');
const lwcOutputDir = path.resolve(__dirname, 'src/client/dist/');
const lwcOutput = {
	file: path.join(lwcOutputDir, 'index.js'),
	format: 'esm'
};

const serverInputDir = path.resolve(__dirname, 'src/server/');
const serverInput = path.join(serverInputDir, 'index.js');
const serverOutputDir = path.resolve(__dirname, 'src/server/dist/');

const serverOutput = {
	file: path.join(serverOutputDir, 'index.js'),
	format: 'esm'
};

const lwcConfig = {
	input: lwcInput,
	output: lwcOutput,
	plugins: [
		replace({
			'process.env.NODE_ENV': JSON.stringify('development'),
			preventAssignment: true
		}),
		lwc()
	]
};

const serverConfig = {
    external: ['express', 'path', 'url'],
	input: serverInput,
	output: serverOutput,
	plugins: [dev && run()]
};

export default [lwcConfig, serverConfig];
