import style, { GLOB_MARKDOWN } from "@isentinel/eslint-config";

export default style(
	{
		react: true,
		rules: {
			"@typescript-eslint/explicit-module-boundary-types": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"eslint-comments/no-unlimited-disable": "off",
			"eslint-comments/require-description": "off",
			"no-console": "off",
			"no-unused-vars": "off",
			"ts/no-null-assertion": "off",
		},
		typescript: {
			parserOptions: {
				project: "tsconfig.build.json",
			},
			tsconfigPath: "tsconfig.build.json",
		},
	},
	{
		files: [GLOB_MARKDOWN],
		rules: {
			"eol-last": "off",
		},
	},
);
