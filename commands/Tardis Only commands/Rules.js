const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
module.exports = class StaffCommand extends Command {
    constructor(client) {
        super(client, {
            name: "rules",
            memberName: "rules",
            aliases: [],
            group: "tardis",
            guildOnly: true,
            ownerOnly: true,
            examples: [`${client.commandPrefix}rules`],
            description: "Posts the rules for The Tardis."
        })
    }
    async run(message) {
        let bicon = ("https://cdn.discordapp.com/attachments/444028025932349441/445611500246269972/alert.gif");
        let botembed = new Discord.RichEmbed()
           .setDescription("The Rules Of The Doctor")
        .setColor("#000FF")
        .setThumbnail(bicon)
        .addField("General Rules", "1. Do not agrue with the Tardis Staff or The Doctor/n2. No cursing in the Tardis incuding Voice chat's\n3. Listen to and work with staffs, not against them.\n4. No text spamming and cussing in the text channels\n5. No mic spamming and cussing in the voice channels.\n6. Trolling and bullying is not allowed in any form.\n7. No self bots")
        .addBlankField()
        .addField("AutoBan", "1. Not listening to staff after being warned Alot\n2. Pornographic, disturbing content, or racism.\n3. Links to Porn or Racism Sites disturbing stuff\n4. Impersonate another person or Bot.\n5. Snipping In the Discord\n6. No Drama From Other Servers, after being told to stop and not doing so.")
        .addBlankField()
        .addField("FOR EMERGENCYS ONLY", "In Case of an Emergency if someone is Cussing or sending bad photos links etc. Please tag <@&490168027049099285>")
        .setImage("https://cdn.discordapp.com/attachments/444028025932349441/445612424545042453/tenor_1.gif")
    message.channel.send(botembed);
    message.delete().catch();
