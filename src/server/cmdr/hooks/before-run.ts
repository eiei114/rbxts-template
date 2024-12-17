import type { Registry } from "@rbxts/cmdr";
import { RunService as Runtime } from "@rbxts/services";

const DEVS = new Set([game.CreatorId]);

const enum Message {
	NoPermission = `You do not have permission to execute this command!`,
	NoPermissionDevelopment = `You do not have permission to execute this command!`,
}

export = function (registry: Registry) {
	registry.RegisterHook("BeforeRun", (context) => {
		if (DEVS.has(context.Executor.UserId) || Runtime.IsStudio()) {
			return;
		}

		return Message.NoPermissionDevelopment;
	});
};
