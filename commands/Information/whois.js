const { Command } = require('discord.js-commando');
const Discord = require('discord.js');
const moment = require('moment-timezone')
const perms = require('../../util/perms.json');
const {arrayClean} = require('../../util/util.js');
module.exports = class WhoisCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'whois',
            memberName: 'whois',
            group: 'information',
            aliases: [],
            description: 'Gets information about a user.',
            format: 'MemberID|MemberName(partial or full)',
            examples: ['e!whois @user'],
            guildOnly: true,
            throttling: {
                usages: 2,
                duration: 3
            },
        args: [
            {
                key: 'member',
                prompt: 'What member do you want the info about?',
                type: 'member'
            }
        ]
    })}
    
    async run (msg, {member}) {
        const allowed = Object.entries(member.permissions.serialize()).filter(([perm, allowed]) => allowed).map(([perm]) => "`" + perms[perm] + "`").join(',   ');

        let embed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setThumbnail(member.user.displayAvatarURL)
            .setTimestamp()
            .addField(`Mention`, member.user, true)
            .addField(`Tag`, member.user.tag, true)
            .addField(`Name`, member.user.username, true)
            .addField(`Nickname`, member.nickname ? member.nickname : 'No Nickname', true)
            .addField(`User ID`, member.id, true)
            .addField(`Discriminator`, `#${member.user.discriminator}`, true)
            .addField(`Bot`, member.user.bot ? 'Yes' : 'No', true)
            if(this.client.isOwner(member.user.id)){embed.addField(`Bot Owner`, `${this.client.isOwner(member.user.id) ? "Yes, Hi Doctor" : "No"}`, true)}
            embed.addField("Status", member.presence.status.toUpperCase(), true)
            embed.addField(`Game`, member.presence.game ? member.presence.game.name : 'N/A', true)
            embed.addField(`Avatar URL`, `[Click Here](${member.user.displayAvatarURL})`)
            embed.addBlankField()
            embed.addField(`Account Created At`, `${moment(member.user.createdAt).format('dddd, MMMM Do YYYY')}\n${moment(member.user.createdAt).format('h:mm:ss a zz')}`, true)
            embed.addField(`Joined Server At`, `${moment(member.joinedAt).format('dddd, MMMM Do YYYY')}\n${moment(member.joinedAt).format('h:mm:ss a zz')}`, true)
            embed.addBlankField()
            embed.addField('Highest Role', member.roles.size > 1 ? member.highestRole : 'N/A', true)
            embed.addField('Highest Role Hoisted', member.highestRole.hoist ? "Yes" : "No", true)
            embed.addField(`**Permissions**`, allowed ? `•${allowed}` : '•None')
            // .addField(`Roles [${member.roles.size}]`, `${member.roles.sort((b, a) => { return a.position - b.position }).map(role => `${role}`).join(" | ")}`)
            embed.addField(`Role(s)`, member.roles.size > 1 ? arrayClean(null, member.roles.map((r) => {
                if (r.name !== '@everyone') {
                    return r;
                }

                return null;
            })).join(' | ') : 'None', false)
        msg.say(embed)
    }
}
