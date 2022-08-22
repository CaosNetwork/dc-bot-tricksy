const { Client, GatewayIntentBits } = require('discord.js');
const { TOKEN } = process.env.TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once("ready",() => {
	console.log("Ready!");
})

console.log("Token='" + TOKEN + "'");
client.login(TOKEN);