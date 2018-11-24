module.exports.run = (bot) => {
    bot.user.setPresence({
        status: "online",
        game: {
            name: "The Tardis!",
            type: "PLAYING"
        }
    })
}