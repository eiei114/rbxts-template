/* eslint-disable ts/no-magic-numbers -- Ignore magic numbers for RuleConfigSeverity. */
import { RuleConfigSeverity, type UserConfig } from "@commitlint/types";

const Configuration: UserConfig = {
	// コミットメッセージのフォーマットをconventional-changelog-conventionalcommitsに従う
	// (https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-conventional/README.md#rules)
	extends: ["@commitlint/config-conventional"],
	rules: {
		// ヘッダーの最大長を72文字に制限
		"header-max-length": [RuleConfigSeverity.Error, "always", 72],
		// スコープの列挙を許可
		"scope-enum": [
			RuleConfigSeverity.Error,
			"always",
			["core", "deps", "dev", "lint", "ui", "audio", "assets", "mtx"],
		],
	},
};

export default Configuration;
