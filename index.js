// test
console.log("beep beep!");

const { Client, Intents } = require("discord.js");
require("dotenv").config();

// Get the gifs from Tenor
// const fetch = () => import("node-fetch");

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once("ready", readyDiscord);

function readyDiscord() {
  console.log("it's ready!");
}

// Login to Discord with your client's token
client.login(process.env.token);
// STILL on .env above

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName } = interaction;

	if (commandName === 'ping') {
		await interaction.reply('Pong!');
	} else if (commandName === 'server') {
		await interaction.reply('Server info.');
	} else if (commandName === 'user') {
		await interaction.reply('User info.');
	}
});

// const replies = ["test", "worked", "really?"];

// function gotMessage(msg) {
//   console.log(msg.content);
// if (msg.channel.id == "465355324392734720") {
// console.log(msg.content);
// if (msg.content === "marco") {
//   const index = Math.floor(Math.random() * replies.length);
//   msg.channel.send("POLO");
// }
// } else if (msg.content == "!gif") {
//   msg.channel.send("gif");

//   let url = `https://g.tenor.com/v1/search?q=excited&key=${process.env.TENORKEY}&limit=8`
//   let response = await fetch(url);
//   let json = await response.json();
// }
//}
// }
