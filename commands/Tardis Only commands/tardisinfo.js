const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "tardisinfo",
            memberName: "tardisinfo",
            group: "tardis",
            aliases: [],
            description: "Posts the Information about The Tardis",
            examples: [`${client.commandPrefix}info`],
            guildOnly: true,
            userPermissions: ["ADMINISTRATOR"]
        })
    }
    async run(message) {
        message.delete().catch()
        let embed = new RichEmbed()
            .setColor(`BLUE`)
            .setTitle(`Infomation`)
            .addField(`Why The Tardis is called "The Tardis"`, `This Server is called The Tardis because The Owner is a Time Animal. (NOT From DoctorWho)`, true)
            .addField(`Who is The Owner of The Tardis`, `The Doctor aka Coco is The Owner of the Tardis`, true)
            .addField(`Staff Requirements`, `You just have to be active and helpful for the Tardis. mainly its up to the Doctor`, true)
            .addField(`What are we?`, `The TARDIS is a moderated community 100% family friendly`, true)
        message.channel.send(embed)
    }
}