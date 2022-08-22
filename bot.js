const { Client, GatewayIntentBits } = require('discord.js');
const { TOKEN } = require("./config.json");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once("ready",() => {
	console.log("Ready!");
})

client.login(TOKEN);