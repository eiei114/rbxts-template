import style, { GLOB_TS } from "@isentinel/eslint-config";

export default style({
	rules: {},
	typescript: {
		parserOptions: {
			project: "tsconfig.build.json",
		},
		tsconfigPath: "tsconfig.build.json",
	},
});
