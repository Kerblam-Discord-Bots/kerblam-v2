const Discord = require('discord.js');
module.exports.run = (bot, guild) => {
       function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime();
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? " day" : " days") + " ago";
        };

  let embed = new Discord.RichEmbed()
    .setColor(`#FF000`)
    .setDescription(`${guild.name}**[\`[${guild.id}]\`](${guild.iconURL ? guild.iconURL : "http://www.kalahandi.info/wp-content/uploads/2016/05/sorry-image-not-available.png"})**\nServer Created: **${guild.createdAt.toString().substr(0, 15)},\n${checkDays(guild.createdAt)}**\nWe now have **${bot.guilds.size}** Servers`)
    .setAuthor(`Server Joined`, guild.iconURL ? guild.iconURL : "http://www.kalahandi.info/wp-content/uploads/2016/05/sorry-image-not-available.png")
    .setTimestamp()
    bot.channels.get("516065058539700265").send(embed)
}
