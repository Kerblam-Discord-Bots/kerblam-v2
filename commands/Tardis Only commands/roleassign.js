
const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
module.exports = class StaffCommand extends Command {
    constructor(client) {
        super(client, {
            name: "roleassign",
            memberName: "roleassign",
            aliases: [],
            group: "tardis",
            guildOnly: true,
            ownerOnly: true,
            examples: [`${client.commandPrefix}rules`],
            description: "Posts the role assignments for The Tardis."
        })
    }
    async run(message) {
        let botembed = new Discord.RichEmbed()
           .setDescription("Assignable Roles")
        .setColor("#000FF")
        .addField("General Rules", "Notification Ping:🔔\nRoleplay:🏠 \nDalek Role::Dalek:\nAlien:👽\nTimeLord:11thDoctor:")
        .addBlankField()
        .addField("Note", "You can take these off at any time")
    message.channel.send(botembed);
    message.delete().catch();
 }
}
