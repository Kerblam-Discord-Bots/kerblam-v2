const {Command} = require('discord.js-commando'),
 Discord = require('discord.js')
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "test", // the command name goes here
            memberName: "test", // this is the same as the name above ^ 
            aliases: [""], // Add any aliases to this command, like [`name here`, `other name here`] etc
            examples: [""], // Give a example of how to do the command 
            description: "Test..",
            group: "tardis"
        })
    }
    async run(message) {
         let replies = [`Kerblam Command worked`]
         let result = Math.floor((Math.random() * replies.length));
         let regenembed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("#000FF")
            .setDescription(replies[result])
         message.channel.send(regenembed)
    }
} 
