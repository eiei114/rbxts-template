import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importsPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";

export default [
	{
		files: ["**/*.ts", "**/*.tsx"],
		plugins: {
			"@typescript-eslint": tsPlugin,
			import: importsPlugin,
			prettier: prettierPlugin
		},
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				project: "tsconfig.build.json",
				sourceType: "module"
			}
		},
		rules: {
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-non-null-assertion": "off",
			"no-console": "warn",
			"no-unused-vars": "warn",
			"no-undef": "warn",
			"import/no-unresolved": "off",
			"import/named": "warn",
			"prettier/prettier": "error"
		}
	}
];
