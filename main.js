const Discord = require("discord.js");
const {token, prefix} = require("./config.json");

const {events} = require("./events.json");

// Call the bot.
const bot = new Discord.Client();

// Wait for the bot to come on.
bot.once('ready', () => {
    console.log("Hi! These are the current events happening in Week X!");
    console.log(events[0].name);
    console.log(events[1].name);
});

// Once the bot is online, do something.

bot.login(token);