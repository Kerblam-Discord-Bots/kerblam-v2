const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const moment = require('moment-timezone')
module.exports = class WhoisCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'userinfo',
            memberName: 'userinfo',
            group: 'information',
            aliases: [],
            description: 'Gets information about a user.',
            format: 'UserID|UserName(partial or full)',
            examples: ['e!userinfo @user'],
            args: [
                {
                    key: 'user',
                    prompt: 'What user do you want the info about?',
                    type: 'user'
                }
            ]
        })
    }

    async run(msg, { user }) {
        let embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setThumbnail(user.displayAvatarURL)
            .setTimestamp()
            .addField(`Mention`, user, true)
            .addField(`Tag`, user.tag, true)
            .addField(`Name`, user.username, true)
            .addField(`User ID`, user.id, true)
            .addField(`Discriminator`, `#${user.discriminator}`, true)
            .addField(`Avatar`, `[Click Here](${user.displayAvatarURL})`, true)
            .addField(`Bot`, user.bot ? 'Yes' : 'No', true)
            if(this.client.isOwner(user.id)){embed.addField(`Bot Owner`, `${this.client.isOwner(user.id) ? "Yes" : "No"}`, true)}
            embed.addField(`Account Created At`, `${moment(user.createdAt).format('dddd, MMMM Do YYYY')}\n${moment(user.createdAt).format('h:mm:ss a zz')}`, true)
        msg.say(embed)
    }
}
