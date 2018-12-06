const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "throw",
            memberName: "throw",
            aliases: [],
            examples: ["e!throw @user/userid"],
            description: "Throw something at the user",
            group: "fun",
            args: [
                {
                    key: "user",
                    prompt: "What user do you want to throw something at?",
                    type: "user"
                }
            ]
        })
    }
    async run(message, {user}) {
        const throwuser = user
        let replies = [`Banana`, `Car`, `Truck`, `Daleks`, `A Building`,
            `SpongeBob`, 'Patrick', 'Nothing', 'Admins', 'Moderators', 'Staff Members',
            'Black Hole', 'Scams', `Love`, `Hate`, `iPhone`, `Brick`, `Bad Bots`, `Chair`,
            `Lemons`, `Cake`, `Sonic Gauntlet`, `Gummy Bears`, `Bus`, `Train`, `Yourself`, `Doc's Glasses`, `UR MOM`,
            `BlobHeart`, `The Master`, `KSI`, `The Doctor`, `Sonic Screwdriver`, `Cats`, `Dogs`, `Cybermen`, `Memes`, `Youtube Streamer`, `Twitch Streamer`,
            `Clout`, `Tardis`, `GDad`, `Nev`
        ]
        let result = Math.floor((Math.random() * replies.length));
        let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription(`Threw **${replies[result]}** at **${throwuser}**`)
        message.channel.send(embed);
    }
}
