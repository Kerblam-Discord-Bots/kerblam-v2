const Discord = require('discord.js');
module.exports.run = async (client, emoji) => {
    let kerlogs = emoji.guild.channels.find(c => c.name === "kerlogs");
    if (!kerlogs) return;
    let embed = new Discord.RichEmbed()
        .setColor(`GREEN`)
        .setThumbnail(emoji.url)
        .setTitle(`New Emoji Created`)
        .setDescription(`Info`)
        .addField(`Name`, emoji.name, true)
        .addField(`ID`, emoji.id, true)
        .addField(`Emoji URL`, `[Click Here](${emoji.url})`, true)
        .addField(`Animated?`, emoji.animated, true)
        .setTimestamp(emoji.createdAt)
        .setFooter(`Emoji Created At`)
    kerlogs.send(embed)
}
