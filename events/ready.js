module.exports.run = (client) => {
    console.log(`
    Bot Account: ${client.user.tag}
    Bot ID: ${client.user.id}
    Server Count: ${client.guilds.size}
    Emoji Count: ${client.emojis.size}
    Channel Count: ${client.channels.size}
    User Count: ${client.users.size}
    `);
    client.user.setPresence({
        status: "Online",
        game: {
         name: "to use Kerblam Commands use kb!help",
         type: "WATCHING"
       }
    })

}
let embed = new Discord.RichEmbed()
    .setColor(`#FF000`)
    .setTimestamp()
    .setDescription(`${client.user} has connected`)
    client.channels.get("521066410345103360").send(embed)
