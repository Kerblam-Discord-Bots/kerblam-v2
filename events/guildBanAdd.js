const Discord = require('discord.js');
module.exports.run = (bot, guild, user) => {
    let kerlogs = guild.channels.find(c => c.name === "kerlogs");
    if (!kerlogs) return;
    let botembed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setAuthor('Member Banned', user.displayAvatarURL)
        .setFooter(`ID: ${user.id}`)
        .setTimestamp()
        .setDescription(`${user} ${user.tag}`)
        .setThumbnail(user.displayAvatarURL)
    kerlogs.send(botembed);
}
