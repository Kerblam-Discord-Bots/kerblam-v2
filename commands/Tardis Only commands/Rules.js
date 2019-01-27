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
            description: "Posts the rules for Coco's Discord."
        })
    }
    async run(message) {
        let bicon = ("https://cdn.discordapp.com/attachments/529525290528145409/539197734058459147/image0.jpg");
        let botembed = new Discord.RichEmbed()
            .setDescription("The Rules Of The Tardis and info")
            .setColor("#000FF")
            .setThumbnail(bicon)
            .addField("Info", "The Tardis has a mind of its own please do NOT call it a Server")
            .addBlankField()
            .addField("Tardis Rules", "1. Do not agrue with the Tardis staff or Doctor   2. No cursing in the tardis incuding Voice chat's  3. Listen to and work with staffs, not against them.  4. No text spamming and cussing in the text channels  5. No mic spamming and cussing in the voice channels.  6. Trolling and bullying is not allowed in any form in The Tardis.  7. No alternate identities or accounts   8. No asking Doctor to be Kerblam owner")
            .addBlankField()
            .addField("AutoBan", "1. Not listening to staff after being warned Alot   2. Pornographic, disturbing content, or racism.  3. Links to Porn or Racism Sites disturbing stuff   4. Impersonate another human or Bot.   5. Snipping In the Discord   6. No Drama From Other Servers, after being told to stop and not doing so.")
            .addBlankField()
            .addField("Playing Status and Profile Photo And Usernames", "Shouldn't have Cursing or nothing to bad or a Tardis Staff will contact you to change it")
        message.channel.send(botembed);
        message.delete().catch();
    }
}
