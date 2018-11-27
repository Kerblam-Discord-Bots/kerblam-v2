const {Command} = require('discord.js-commando'),
 Discord = require('discord.js')
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "regenerate", // the command name goes here
            memberName: "regenerarte", // this is the same as the name above ^ 
            aliases: ["regen"], // Add any aliases to this command, like [`name here`, `other name here`] etc
            examples: ["kb!regen"], // Give a example of how to do the command 
            description: "This explains about regeneration"
            group: "tardis"
        })
    }
    async run(message) {
      // Add the code here for the bot to run when the command is called. 
    } let replies = ["Regeneration for TimeAnimals is changing into new animals"]
         let result = Math.floor((Math.random() * replies.length));
         let question = content
         let regenembed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("#000FF")
