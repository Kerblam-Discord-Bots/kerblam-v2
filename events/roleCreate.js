const Discord = require('discord.js');
module.exports.run = (bot, role) => {
    let guild = role.guild;
    let kerlogs = guild.channels.find(c => c.name === "kerlogs");
    if (!kerlogs) return;
    let botembed = new Discord.RichEmbed()
        .setColor("#FF000")
        .setAuthor('Role Created', role.guild.iconURL)
        .setFooter(`${bot.user.tag}`, `${bot.user.displayAvatarURL}`)
        .setTimestamp()
        .setDescription(`_ _►Name <@&${role.id}> (**${role.name}**)\n ►ID **${role.id}** \n ►Hex Color **${role.hexColor}** \n ►Hoisted ${role.hoist}`)
    kerlogs.send(botembed);
}
