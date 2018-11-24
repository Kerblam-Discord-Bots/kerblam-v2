const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
module.exports = class SACommand extends Command {
    constructor(client) {
        super(client, {
            name: "setavatar",
            memberName: "setavatar",
            group: "botowner",
            description: "Sets the avatar of the Bots Account",
            aliases: ["sa", "setav"],
            ownerOnly: true,
            args: [
                {
                    key: "url",
                    prompt: "What do you want to be the new avatar profile photo?",
                    type: "string",
                    default: message => message.attachments.first().url
                }
            ]
        })
    }
    async run(message, { url }) {
        try{
        this.client.user.setAvatar(url).then(message.react("👌"))
        }catch(e){
            message.channel.send(`ERROR:\n${e}`)
        }
    }
}