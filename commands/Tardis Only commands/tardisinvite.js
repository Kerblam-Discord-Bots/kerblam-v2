const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "tardisinvite",
            memberName: "tardisinvite",
            group: "tardis",
            aliases: [],
            description: "Posts the Link to The Tardis (Coco's Server)",
            examples: [`${client.commandPrefix}links`],
            guildOnly: true,
            userPermissions: ["ADMINISTRATOR"]
        })
    }
    async run(message) {
        message.delete().catch()
        let embed = new RichEmbed()
            .addField(`Tardis Invite`, `[Click Here](https://discord.gg/NeM886f)`, true)
            .setDescription(`**This is The Owner's Server**`)
        message.channel.send(embed)
    }
}
