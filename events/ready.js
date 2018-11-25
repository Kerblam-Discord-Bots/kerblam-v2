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
        status: "online",
        game: {
            name: "If you want it, just Kerblam it",
            type: "PLAYING"
        }
    })

}
