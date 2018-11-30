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
        let reqembed = new Discord.RichEmbed
            .setFooter(client.user.tag, client.user.displayAvatarURL)
            .setDescription(`Hello Everyone Welcome to the TARDIS here are a few rules you need to follow.
#1 Respect The Tardis and EVERYONE you talk to
#2 Don’t cuss
#3 Do not ask for moderator
#4 if you’re Doctor's irl friend you’ll have to follow the rules it doesnt mean you can break them. if you break them Punishments will happen
#6 The Tardis is for having fun and making friends DO not start drama or talk about Drama
#7 Do not test the Tardis word filter, it will get you banned off the tardis
#8 You can call The Doctor "Coco" since you know him by that
#9 Do not DM anyone rude stuff from anyone from The Tardis
#10 Tardis Staff or Doctor's Decisions are final do not argue
#11 Please DONT Share personal info
#12 Please don’t be a child predator
#13 Raiding The Tardis will mean, ban 
#14 do not use bot commands in normal chat 
#15 Links are prohibited
#16 Doctor can break the Tardis Rules, except for rules of time
#17 Do not ping Doctor. he can see the Tardis chat 24/7
#18 Inappropriate Images of "Anime" or anything else is prohibited
#19 Do NOT dm Doctor for unimportant reasons. you can only dm him reports of what people did wrong in the TARDIS or unexpected behavior from Moderators.,`)
        message.channel.send(reqembed)
    }
}
