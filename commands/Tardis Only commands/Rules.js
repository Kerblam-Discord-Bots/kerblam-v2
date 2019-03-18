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
        let botembed = new Discord.RichEmbed()
           .setDescription("The Rules Of The Tardis")
        .setColor("#000FF")
        .addField("General Rules", "1. Do not argue with the Tardis Staff or The Doctor\n2. No cursing in the Tardis incuding Voice chat's\n3. Listen to and work with staffs, not against them.\n4. No text spamming and cussing in the text channels\n5. No mic spamming and cussing in the voice channels.\n6. Trolling and bullying is not allowed in any form.\n7. No self bots.\n8. Don't dm The Doctor he is a busy bear.\n9. Exposure of The Doctor is Prohibited We know he is human.\n10. Please keep bot comamnds in <#546859083437703173> ")
        .addBlankField()
        .addField("AutoBan", "1. Not listening to staff after being warned Alot\n2. Pornographic, disturbing content, or racism.\n3. Links to Porn or Racism Sites disturbing stuff\n4. Impersonate another person or Bot.\n5. Snipping In the Discord(Unwanted Advertising)\n6. No Drama From Other Servers, after being told to stop and not doing so.\n7. Gay Slurs\n8. Racist and Disrespectful memes\n9. Politics (Trump, Obama , Hillary Clinton)")
        .addBlankField()
        .addField("FOR Emergencies ONLY", "In Case of an Emergency if someone is Cussing or sending bad photos links etc. Please tag <@&490168027049099285>")
    message.channel.send(botembed);
    message.delete().catch();
 }
}
