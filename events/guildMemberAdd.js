const Discord = require('discord.js');
module.exports.run = (client, member) => {
    let logs= member.guild.channels.find(c => c.name === "kerlogs");
    let botembed = new Discord.RichEmbed()
        .setColor("#1CFF00")
        .setAuthor('Member Joined', member.user.displayAvatarURL)
        .setFooter(`ID: ${member.id}`)
        .setTimestamp()
        .setDescription(`${member} ${member.user.tag}`)
        .setThumbnail(member.user.displayAvatarURL)
    if(logs) { logs.send(botembed);}
let channel = member.guild.channels.find(c => c.name === "welcometothetardis");
if(channel) return channel.send(`{user} has joined the tardis, Please read the <#546768935551500319>`)
}
