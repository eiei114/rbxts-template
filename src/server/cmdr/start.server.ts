import { Cmdr } from "@rbxts/cmdr";

const parent = script.Parent as Folder;
Cmdr.RegisterDefaultCommands();
Cmdr.RegisterCommandsIn(parent.FindFirstChild("commands") as Folder);
Cmdr.RegisterHooksIn(parent.FindFirstChild("hooks") as Folder);
