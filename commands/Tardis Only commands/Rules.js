const { Command } = require('Discord.js-Commando'),
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
            .setDescription("The Rules Of The Tardis")
            .setColor("#000FF")
            .setThumbnail(bicon)
            .addField("Main Rules", "1. Do not agrue with the Staff or Doctor himself                                                                           2. No cursing in the Tardis incuding Voice chat's                                                   3. Listen to and work with staffs, not against them.                                                      4. No text spamming and cussing in the text channels                                                      5. No mic spamming and cussing in the voice channels.                             6. Trolling and bullying is not allowed in any form even if you're joking                                                                          7. No alternate identities or accounts                                                                  8. No self bots")
            .addBlankField()
            .addField("AutoBan", "1. Not listening to Tardis staff after being warned Alot                                                      2. Pornographic, disturbing content, or racism.                                        3. Links to Porn or Racism Sites disturbing stuff                                                                                4. Impersonate another person or Bot.                                                                  5. Snipping In the Discord                                                                                                                            6. No Drama From Other Servers, after being told to stop and not doing so.")
            .addField("FOR EMERGENCYS ONLY", "In Case of an Emergency if someone is Cussing or sending bad photos links etc. Please tag <@&490168027049099285>")
            .addField("if you're Friends with The Doctor in real life in his school , The Doctor/Coco will NOT allow you to say his Real name or allow you to break the Rules. We care for his safety")
        message.channel.send(botembed);
        message.delete().catch();
    }
}
