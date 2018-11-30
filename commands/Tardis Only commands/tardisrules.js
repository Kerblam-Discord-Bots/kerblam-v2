
const { Command } = require('discord.js-commando'), // This requires the discord.js-command npm package
    Discord = require('discord.js'); // This requires the discord.js npm package, This is mostly used for stuff like RichEmbed etc. 
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "tardis", // the command name goes here
            memberName: "tardisrules", // this is the same as the name above ^ 
            aliases: ["tardis"], // Add any aliases to this command, like [`name here`, `other name here`] etc
            examples: ["kb!tardisrules"], // Give a example of how to do the command 
            description: "The Tardis Rules",
            group: "tardis" // Enter the group name for the command to go into all of the group names is found in bot.js at the bottom like fun
        })
    }
           async run(message) {
        let bicon = ("https://cdn.discordapp.com/attachments/444028025932349441/445611500246269972/alert.gif");
        let botembed = new Discord.RichEmbed()
            .setDescription("The Rules Of The Tardis")
            .setColor("#000FF")
            .setThumbnail(bicon)
            .addField("General Rules", "1. Do not agrue with the Staff                                                                            2. No cursing in the discord incuding Voice chat's                                                   3. Listen to and work with staffs, not against them.                                                      4. No text spamming and cussing in the text channels                                                      5. No mic spamming and cussing in the voice channels.                             6. Trolling and bullying is not allowed in any form.                                                                          7. No alternate identities or accounts                                                                  8. No self bots")
            .addBlankField()
            .addField("AutoBan", "1. Not listening to staff after being warned Alot                                                      2. Pornographic, disturbing content, or racism.                                        3. Links to Porn or Racism Sites disturbing stuff                                                                                4. Impersonate another person or Bot.                                                                  5. Snipping In the Discord                                                                                                                            6. No Drama From Other Servers, after being told to stop and not doing so.")
            .addBlankField()
            .addField("Playing Status and Profile Photo And Usernames", "Shouldn't have Cursing or nothing to bad or The Tardis will contact you to change it")
            .addBlankField()
            .addBlankField()
            .addField("FOR EMERGENCYS ONLY", "In Case of an Emergency if someone is Cussing or sending bad photos links etc. Please dm Doctor or The Higher Ranks")
            .setFooter("Tardis", message.guild.iconURL);
        message.channel.send(botembed);
        message.delete().catch();
    }
