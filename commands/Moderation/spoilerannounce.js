const { Command } = require('discord.js-commando');
const Discord = require('discord.js');

module.exports = class SayCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'spoilerannounce',
            group: 'moderation',
            memberName: 'spoilerannounce',
            description: 'Sends a message to the channel',
            aliases: ["embedspoiler"],
            examples: [`${client.commandPrefix}announce #channel Hi there!`],
            guildOnly: true,
            userPermissions: ["MANAGE_MESSAGES"],
            args: [
                {
                    key: "channel",
                    prompt: "What channel do you want me to post the announcement to?",
                    type: "channel"
                },
                {
                    key: 'content',
                    prompt: 'What would you like the content of the message to be?',
                    type: '||string||'
                }
            ]
        });
    }

    async  run(msg, {channel, content }) {
        let embed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .setDescription(content)
        channel.send(embed)
        msg.delete().catch()
    }
};
