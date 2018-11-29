const { Command } = require('discord.js-commando'), // This requires the discord.js-command npm package
    Discord = require('discord.js'); // This requires the discord.js npm package, This is mostly used for stuff like RichEmbed etc. 
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "tardisrules", // the command name goes here
            memberName: "tardisrules", // this is the same as the name above ^ 
            aliases: ["tardisrules"], // Add any aliases to this command, like [`name here`, `other name here`] etc
            examples: ["kb!tr"], // Give a example of how to do the command 
            description: "Shows rules of the Tardis",
            group: "tardis" // Enter the group name for the command to go into all of the group names is found in bot.js at the bottom like fun
        })
    }
        async run(message) {
        let reqembed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("#000FF")
            .setDescription(`Hello Everyone Welcome to the TARDIS here are a few rules you need to follow and some faq
#1 Respect The Tardis and EVERYONE you talk to
#2 Don’t cuss
#3 Do not ask for Sonic Screwdriver role (Moderator)
#4 if you’re my irl friend you’ll have to follow the rules it doesnt mean you can break them
#6 The Tardis is for having fun and making friends DO not start drama or talk about Drama
#7 Do not test the Tardis word filter, it will get you banned off the tardis
#8 you can call me “Coco” if you want i don’t care
#9 Do not DM anyone rude stuff from anyone from The Tardis
#10 Tardis Staff Decisions are final do not argue
#11 Please DONT Share personal info,`)
        message.channel.send(reqembed)
    }
}
