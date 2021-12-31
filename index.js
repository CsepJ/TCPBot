const { Client, Intents, MessageEmbed } = require("discord.js");
const messageCreate = require("./Event/messageCreate");
const config = require("./util/config");
const bot = new Client({
    intents: [
        Intents.FLAGS.DIRECT_MESSAGES,
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MEMBERS
    ],
    presence: {
        activities: [{
            name: `Enter ${prefix}cmd to watch the bot's commands`,
            type: "PLAYING"
        }]
    }
});
bot.on("interactionCreate", async (interaction) => {

});
bot.on("messageCreate", async (message) => {

});
bot.login(config.token);