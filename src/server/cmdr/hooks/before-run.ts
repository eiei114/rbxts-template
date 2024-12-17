import type { Registry } from "@rbxts/cmdr";
import { RunService as Runtime } from "@rbxts/services";

const DEVS = new Set([game.CreatorId]);

const enum Message {
	NoPermission = `You do not have permission to execute this command!`,
	NoPermissionDevelopment = `You do not have permission to execute this command!`,
}

export = function (registry: Registry) {
	registry.RegisterHook("BeforeRun", (ctx) => {
		switch (ctx.Group) {
			case "Dev": {
				if (DEVS.has(ctx.Executor.UserId) || Runtime.IsStudio()) {
					return undefined; // 権限がある場合は何も返さない
				}

				return Message.NoPermissionDevelopment; // 権限がない場合はエラーメッセージを返す
			}
			default: {
				return undefined; // デフォルトでは何も返さない
			}
		}
	});
};
