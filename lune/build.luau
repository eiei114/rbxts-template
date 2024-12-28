local remodel = require("./remodel")

local assetsGame = remodel.readPlaceFile("game.rbxl")
local optimizationCodeGame = remodel.readPlaceFile("place.rbxlx")

assetsGame.Workspace.Terrain:Destroy()
assetsGame.Workspace.Camera:Destroy()

for _, descendant in assetsGame.Workspace:GetChildren() do
	descendant.Parent = optimizationCodeGame.Workspace
end

remodel.writePlaceFile("build.rbxlx", optimizationCodeGame)
