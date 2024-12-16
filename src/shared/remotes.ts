/* eslint-disable */
import { Client, Server, createRemotes, loggerMiddleware, remote } from "@rbxts/remo";

export const remotes = createRemotes(
	{
		onServerSignal: remote<Server>(),
		onClientSignal: remote<Client>(),

		onServerRequest: remote<Server>().returns<{ message: string }>(),
		onClientRequest: remote<Client>().returns<{ message: string }>(),
	},
	loggerMiddleware,
);
