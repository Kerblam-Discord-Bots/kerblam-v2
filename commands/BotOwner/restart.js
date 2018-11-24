const {Command} = require('discord.js-commando');
const Discord = require('discord.js');
const config = require('../../config.js');
module.exports = class RestartCommand extends Command {
    constructor(client) {
        super(client, {
            name: "restart",
            aliases: ["rt"],
            memberName: "restart",
            group: "botowner",
            ownerOnly: true,
            description: "Restarts the bot"
        })
    }
    async run(message){
        this.client.channels.get("468372950266150916").send(embed).then(message.react('👌')).then(this.client.destroy().then(this.client.login(config.token)).then( await message.say(`Successfully Restarted.`)))
    }
}