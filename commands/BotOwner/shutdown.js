const {Command} = require('discord.js-commando');
module.exports = class ShutdownCommand extends Command {
    constructor(client){
        super(client, {
            name: "shutdown",
            memberName: 'shutdown',
            group: 'botowner',
            ownerOnly: true,
            description: "Shuts down the bot",
            aliases: ["st", "die"],
            examples: [`${client.commandPrefix}shutdown`]
        })
    }
    async run(message) {
       message.say('Shutting Down :wave:')
        await message.react("👌");
        process.exit(1)
    }
}