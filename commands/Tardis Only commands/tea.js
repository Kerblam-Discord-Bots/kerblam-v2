const {Command} = require('discord.js-commando'),
 Discord = require('discord.js')
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "tea", // the command name goes here
            memberName: "regenerarte", // this is the same as the name above ^ 
            aliases: ["tea"], // Add any aliases to this command, like [`name here`, `other name here`] etc
            examples: ["kb!tea"], // Give a example of how to do the command 
            description: "Tea",
            group: "imagecommands"
        })
    }
    async run(message) {
     let { body } = await superagent
            .get(`https://random.dog/woof.json`);
        let embed = new Discord.RichEmbed()
            .setColor("#FF000")
            .setDescription("<a:Dots:426956230582599690> Loading the Command, Please Wait.,,,,")

        message.channel.send(embed).then(message => {
            embed.setColor("#000FF")
            embed.setDescription("don't spill the tea")
            embed.setImage(body.url)
            message.edit(embed)
        })
    }
}
