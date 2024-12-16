import type { CommandContext, Registry } from "@rbxts/cmdr";
import { RunService as Runtime } from "@rbxts/services";

const DEVS = new Set([game.CreatorId]);

const enum Message {
	NoPermission = `You do not have permission to execute this command!`,
	NoPermissionDevelopment = `You do not have permission to execute this command!`,
}

export = function (registry: Registry) {
	registry.RegisterHook("BeforeRun", (context: CommandContext) => {
		switch (context.Group) {
			case "Dev": {
				if (DEVS.has(context.Executor.UserId) || Runtime.IsStudio()) {
					return Message.NoPermissionDevelopment;
				}

				return Message.NoPermission;
			}
			default: {
				return Message.NoPermission;
			}
		}
	});
};
