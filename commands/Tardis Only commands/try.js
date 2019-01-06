const { Command } = require('discord.js-commando'), // This requires the discord.js-command npm package
    Discord = require('discord.js'); // This requires the discord.js npm package, This is mostly used for stuff like RichEmbed etc. 
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "try", // the command name goes here
            memberName: "try", // this is the same as the name above ^ 
            aliases: [], // Add any aliases to this command, like [`name here`, `other name here`] etc
            examples: ["kb!try"], // Give a example of how to do the command 
            description: "try this command kids",
            group: "tardis" // Enter the group name for the command to go into all of the group names is found in bot.js at the bottom like fun
            ownerOnly: true,
        })
    }
    async run(message) {
        let reqembed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("#000FF")
            .setDescription(`you can try `kb!try`😁`)
        message.channel.send(reqembed)
    }
}
