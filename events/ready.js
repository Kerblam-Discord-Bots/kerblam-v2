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
         name: "For The Doctor To Return",
            type: "Watching", "Playing",  
       }
    })

}
