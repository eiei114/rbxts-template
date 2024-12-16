import type { CommandContext } from "@rbxts/cmdr";
import { Players, Workspace } from "@rbxts/services";

export = function (context: CommandContext): void {
	try {
		const spawnLocation = Workspace.FindFirstChild("SpawnLocation") as Part;
		//全プレイヤーを初期位置に移動
		Players.GetPlayers().forEach((player) => {
			const character = player.Character as Model;
			const humanoidRootPart = character.FindFirstChild("HumanoidRootPart") as Part;
			humanoidRootPart.CFrame = spawnLocation.CFrame;
		});
	} catch (err) {
		context.Reply(`Error: ${err}`, Color3.fromRGB(255, 0, 0));
	}
};
