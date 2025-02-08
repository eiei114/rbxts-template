import type { CommandDefinition } from "@rbxts/cmdr";

export = identity<CommandDefinition>({
	Aliases: ["teleport-init"],
	Args: [],
	Description: "Teleport all players to the initial position",
	Name: "teleport-init"
});
