import type { CommandDefinition } from "@rbxts/cmdr";

export = identity<CommandDefinition>({
	Name: "teleport-init",
	Aliases: ["teleport-init"],
	Description: "Teleport all players to the initial position",
	Args: [],
});
