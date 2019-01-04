const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');  
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "supergirl",
            memberName: "supergirl", // this is the same as the name above ^ 
            aliases: [], // Add any aliases to this command, like [`name here`, `other name here`] etc
            examples: ["kb!supergirl"], // Give a example of how to do the command 
            description: "The Doctor's Kryptonian Love",
            group: "botowner", // Enter the group name for the command to go into all of the group names is found in bot.js at the bottom like fun
            ownerOnly: true
        })
    }
    async run(message) {
        let reqembed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("#000FF")
            .setDescription(`https://giphy.com/gifs/supergirl-xBzeaASC01dS0`)
        message.channel.send(reqembed)
    }
}
