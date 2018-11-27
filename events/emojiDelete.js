const Discord = require('discord.js');
module.exports.run = (bot, emoji) => {
    let kerlogs = emoji.guild.channels.find(c => c.name === "kerlogs");
    if (!kerlogs) return;
    let embed = new Discord.RichEmbed()
        .setColor(`RED`)
        .setThumbnail(emoji.url)
        .setTitle(`Emoji Deleted`)
        .setDescription(`Info`)
        .addField(`Name`, emoji.name, true)
        .addField(`ID`, emoji.id, true)
        .addField(`Emoji URL`, `[Click Here](${emoji.url})`, true)
        .addField(`Animated?`, emoji.animated, true)
        .setTimestamp(emoji.createdAt)
        .setFooter(`Emoji Deleted At`)
    kerlogs.send(embed)
}
