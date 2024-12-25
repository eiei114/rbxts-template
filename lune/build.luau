local remodel = require("./remodel")

-- One use for Remodel is to move the terrain of one place into another place.
local assetsGame = remodel.readPlaceFile("game.rbxl")
local codeGame = remodel.readPlaceFile("place.rbxlx")

-- This isn't possible inside Roblox, but works just fine in Remodel!
assetsGame.Workspace.Terrain:Destroy()
codeGame.Workspace.Terrain.Parent = assetsGame.Workspace

remodel.writePlaceFile("code-place-updated.rbxlx", codeGame)
