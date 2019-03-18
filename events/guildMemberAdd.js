const Discord = require('discord.js');
module.exports.run = (client, member) => {
    let kerlogs = member.guild.channels.find(c => c.name === "kerlogs");
    if (!kerlogs) return;
    let botembed = new Discord.RichEmbed()
        .setColor("#1CFF00")
        .setAuthor('Member Joined', member.user.displayAvatarURL)
        .setFooter(`ID: ${member.id}`)
        .setTimestamp()
        .setDescription(`${member} ${member.user.tag}`)
        .setThumbnail(member.user.displayAvatarURL)
let welcometothetardis = member.guild.channels.find(c => c.name === "welcometothetardis");
if(welcometothetardis) return channel.send(`"${member.user.username}" has joined the TARDIS`)
    kerlogs.send(botembed);
}
