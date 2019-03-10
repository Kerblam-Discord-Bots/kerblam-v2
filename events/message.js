const Discord = require('discord.js');
module.exports.run = async (bot, message) => {
    if (message.channel.name === "server-suggestions" || message.channel.name === "📝server-suggestions📝" || message.channel.name === "suggestions" || message.channel.name === "suggestion" || message.channel.name === "server-suggestion" || message.channel.name === "📝suggestions" || message.channel.name === "📝suggestions📝" || message.channel.name === "suggestions📝") {
        if (message.author.id === "288450828837322764" || message.author.id === "248947473161256972" || message.guild.id === "499409162661396481" || message.author.id === message.guild.ownerID) return;
            message.react("✅")
            message.react("❌")
    if (message.channel.name === "weekly-riddle-answer") {
        let riddlerrole = message.guild.roles.find(r => r.name === "Riddle Submitted")
        message.member.addRole(riddlerrole.id)
        message.delete().catch()
        let riddleanswers = message.guild.channels.find(c => c.name === "kerlogs")
        let riddleembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setAuthor(`${message.author.tag}`, message.author.displayAvatarURL)
            .setTimestamp()
            .setFooter(`Riddle submitted at`)
            .setTitle(`Riddle submitted`)
            .setDescription(`${message.content}`)
        riddleanswers.send(riddleembed)
        let dmembed = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setDescription(`Your riddle answer has been submitted\nand Have been given the **Riddle Submitted** Role,\nWhich means you can't post another answer until next week`)
            .setTimestamp()
            .setFooter(`Answer Submitted At`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
        const dmembed2 = new Discord.RichEmbed()
            .setColor(`RANDOM`)
            .setTitle(`${message.author.tag} I tried to dm, but their Dms are off`)
            .setDescription(`Your riddle answer has been submitted\nand Have been given the **Riddle Submitted** Role,\nWhich means you can't post another answer until next week`)
            .setFooter(`This message will delete in 10 seconds`)
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
        try {
            await message.author.send(dmembed)
        } catch (err) {
            message.channel.send(dmembed2).then(message => {
                message.delete(10000)
            })
        }
    }
}
