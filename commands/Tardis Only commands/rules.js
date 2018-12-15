const { Command } = require('discord.js-commando'), // This requires the discord.js-command npm package
    Discord = require('discord.js'); // This requires the discord.js npm package, This is mostly used for stuff like RichEmbed etc. 
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "tardis", // the command name goes here
            memberName: "rules", // this is the same as the name above ^ 
            aliases: ["rules"], // Add any aliases to this command, like [`name here`, `other name here`] etc
            examples: ["kb!rules"], // Give a example of how to do the command 
            description: "[TARDIS SERVER ONLY]",
            group: "tardis" // Enter the group name for the command to go into all of the group names is found in bot.js at the bottom like fun
        })
    }
    async run(message) {
        let reqembed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("#000FF")
            .setDescription(`1. Dont cuss 2. Respect everyone in the Tardis, 
            3. if your Doctor/Coco's irl friend don't reveal anything about him, 4. No self advertising 5. Dont ask for staff, 6. No Raiding 7. No Sharing Personal info, 
            8. No inapropiate Pictures 9. Don't ask to be Doctor's friends list anywhere, 10. Don't be a troll`)
        message.channel.send(reqembed)
    }
}
