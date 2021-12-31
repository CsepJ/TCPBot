let { prefix } = require("./config.js");
let commands = [
    {
        name: "cmd", value: "Bot shows command list."
    },
    {
        name: "search (search keyword)", value: "Bot shows the result about search keyword"
    }
]
commands.forEach(e => e.name = prefix + e.name);
module.exports = commands;