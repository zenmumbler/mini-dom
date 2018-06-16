const typescript = require("typescript");
const tsc = require("rollup-plugin-typescript2");

export default [{
	input: "src/index.ts",
	output: 		{
		file: "dist/index.esm.js",
		format: "es",
		sourcemap: false
	},
	plugins: [
		tsc({
			typescript
		}),
	],
}];
