const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
module.exports = class SNCommand extends Command {
    constructor(client) {
        super(client, {
            name: "setname",
            memberName: "setname",
            group: "botowner",
            ownerOnly: true,
            examples: [`${client.commandPrefix}setname <Name Here>`],
            aliases: ['sn', 'setn'],
            description: "Sets the Name for the Bot Account",
            args: [
                {
                    key: "botname",
                    prompt: "What do you want the bot name to be?",
                    type: "string"
                }
            ]
        })
    }
    async run(msg, { botname }) {
        try {
            this.client.user.setName(botname)
        } catch (e) {
            let embed = new Discord.RichEmbed()
                .setColor(`#FF000`)
                .setTimestamp()
                .setTitle(`ERROR`)
                .setDescription(e.stack)
            msg.say(embed)
        }

    }
}