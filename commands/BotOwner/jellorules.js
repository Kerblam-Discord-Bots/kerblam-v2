const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
module.exports = class StaffCommand extends Command {
    constructor(client) {
        super(client, {
            name: "jrules",
            memberName: "jrules",
            aliases: [],
            group: "botowner",
            guildOnly: true,
            ownerOnly: true,
            examples: [`${client.commandPrefix}rules`],
            description: "Posts the rules for Jello."
        })
    }
    async run(message) {
        let botembed = new Discord.RichEmbed()
           .setDescription("The Rules of Jello's Server")
        .setColor("#000FF")
        .addField("General Rules", "1. Do not argue with the  Staff or Jello\n2. No cursing in the server incuding Voice chat's\n3. Listen to and work with staffs, not against them.\n4. No text spamming and cussing in the text channels\n5. No mic spamming and cussing in the voice channels.\n6. Trolling and bullying is not allowed in any form.\n7. No self bots")
        .addBlankField()
        .addField("AutoBan", "1. Not listening to staff after being warned Alot\n2. Pornographic, disturbing content, or racism.\n3. Links to Porn or Racism Sites disturbing stuff\n4. Impersonate another person or Bot.\n5. Snipping In the Discord(Unwanted Advertising)\n6. No Drama From Other Servers, after being told to stop and not doing so.\n7. Gay Slurs\n8. Racist and Disrespectful memes")
        .addBlankField()
        .addField("FOR Emergencies ONLY", "In Case of an Emergency if someone is Cussing or sending bad photos links etc. Please tag Jello or anyone else")
    message.channel.send(botembed)
    message.delete().catch();
 }
}
