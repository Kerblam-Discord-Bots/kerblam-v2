const { Command } = require('discord.js-commando'), // This requires the discord.js-command npm package
    Discord = require('discord.js'); // This requires the discord.js npm package, This is mostly used for stuff like RichEmbed etc. 
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "food", // the command name goes here
            memberName: "food", // this is the same as the name above ^ 
            aliases: [], // Add any aliases to this command, like [`name here`, `other name here`] etc
            examples: ["kb!food"], // Give a example of how to do the command 
            description: "Doctor's food list",
            group: "tardis" // Enter the group name for the command to go into all of the group names is found in bot.js at the bottom like fun
        })
    }
    async run(message) {
        let reqembed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("#000FF")
            .setDescription(`Just Junk food xD`)
        message.channel.send(reqembed)
    }
}
