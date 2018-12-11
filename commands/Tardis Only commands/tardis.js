const { Command } = require('discord.js-commando'), // This requires the discord.js-command npm package
    Discord = require('discord.js'); // This requires the discord.js npm package, This is mostly used for stuff like RichEmbed etc. 
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "tardis", // the command name goes here
            memberName: "tardis", // this is the same as the name above ^ 
            aliases: ["tardis"], // Add any aliases to this command, like [`name here`, `other name here`] etc
            examples: ["kb!tardis"], // Give a example of how to do the command 
            description: "The Tardis loves The Doctor only the Doctor",
            group: "tardis" // Enter the group name for the command to go into all of the group names is found in bot.js at the bottom like fun
        })
    }
    async run(message) {
        let reqembed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("#000FF")
            .setDescription(`Time And Relative Demimension In Space. thats what TARDIS means.`)
        message.channel.send(reqembed)
    }
}
