
const { Command } = require('discord.js-commando'), // This requires the discord.js-command npm package
    Discord = require('discord.js'); // This requires the discord.js npm package, This is mostly used for stuff like RichEmbed etc. 
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "requirement", // the command name goes here
            memberName: "requirement", // this is the same as the name above ^ 
            aliases: ["req"], // Add any aliases to this command, like [`name here`, `other name here`] etc
            examples: ["kb!req"], // Give a example of how to do the command 
            description: "This is requirements when you add Kerblam",
            group: "information" // Enter the group name for the command to go into all of the group names is found in bot.js at the bottom like fun
        })
    }
    async run(message) {
        let reqembed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("#000FF")
            .setDescription(`All what kerblam requires for after you add it here are some ground rules
    1. Kerblam will not be used to harras 
    2. Do not have Kerblam spam dms for cussing
    3. Kerblam is not used for abuse,
    if these are broken and if the owners of kerblam find out. they will have it leave`)
        message.channel.send(reqembed)
    }
}
