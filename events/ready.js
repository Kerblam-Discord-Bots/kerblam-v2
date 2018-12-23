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
         name: "to use Kerblam Commands use kb!help", "Sub to ImReallyCoco"
         type: "PLAYING"
       }
    })

}
