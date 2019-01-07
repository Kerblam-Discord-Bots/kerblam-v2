const { Command } = require('discord.js-commando'), // This requires the discord.js-command npm package
    Discord = require('discord.js'); // This requires the discord.js npm package, This is mostly used for stuff like RichEmbed etc. 
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "test", // the command name goes here
            memberName: "test", // this is the same as the name above ^ 
            aliases: [], // Add any aliases to this command, like [`name here`, `other name here`] etc
            examples: ["kb!food"], // Give a example of how to do the command 
            description: "test",
            group: "tardis" //
            ownerOnly: true 
         }}
    }
     async run (message){
        let string = '';
        this.client.guilds.forEach(guild => { string += `${guild.name}` + '\n'; })
        let botembed = new Discord.RichEmbed()
            .setDescription("Bot Information")
            .setColor(`RANDOM`)
            .setThumbnail(this.client.user.displayAvatarURL)
            .addField("Testing"`[Click Here](https://twitter.com/kerblamdiscord)`, true)
            .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL);
        message.say(botembed)
    }
}
