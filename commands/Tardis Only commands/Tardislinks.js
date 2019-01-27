const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "links",
            memberName: "links",
            group: "tardis",
            aliases: [],
            description: "Posts the Information for the Information channel",
            examples: [`${client.commandPrefix}links`],
            guildOnly: true,
            userPermissions: ["ADMINISTRATOR"]
        })
    }
    async run(message) {
        message.delete().catch()
        let embed = new RichEmbed()
            .setColor(`BLUE`)
            .setAuthor(`${this.client.users.get('288491554841034752').tag}`, this.client.users.get('288491554841034752').displayAvatarURL)
            .setThumbnail(this.client.users.get('288491554841034752').displayAvatarURL)
            .setTitle(`Links and Infomation`)
            .addField(`Twitter`, `[Click Here](https://twitter.com/ImReallyCoco)`, true)
            .addField(`Instagram`, `[Click Here](https://www.instagram.com/imactuallycoco/)`, true)
            .addField(`Discord`, `**${this.client.users.get('288491554841034752').tag}**`, true)
            .addField(`Discord Server`, `[Click Here](https://discord.gg/xSJ55Et)`, true)
        message.channel.send(embed)
    }
}
