const { Command } = require('discord.js-commando'),
    Discord = require('discord.js');
module.exports = class NCommand extends Command {
    constructor(client) {
        super(client, {
            name: "kerblamit",
            memberName: "kerblamit",
            aliases: [],
            examples: [`${client.commandPrefix}kerblamit @user/userid`],
            description: "Deliver something to a user",
            group: "fun",
            args: [
                {
                    key: "user",
                    prompt: "What do you want Kerblam to give you?",
                    type: "user"
                },
                {
                    key: "object",
                    prompt: "What do you want Kerblam to give you",
                    type: "string",
                    default: "random"
                }
            ]
        })
    }
    async run(message, { user, object }) {
        try{
        if(object.toLowerCase() === "random"){
           let replies = [`Banana`, `Car`, `Truck`, `Daleks`, `A Building`,
            `SpongeBob`, 'Patrick', 'Nothing', 'Admins', 'Moderators', 'Staff Members',
            'Black Hole', 'Scams', `Love`, `Hate`, `iPhone`, `Brick`, `Bad Bots`, `Chair`,
            `Lemons`, `Cake`, `Sonic Gauntlet`, `Gummy Bears`, `Bus`, `Train`, `Yourself`, `Doc's Glasses`, `UR MOM`,
            `BlobHeart`, `The Master`, `KSI`, `The Doctor`, `Sonic Screwdriver`, `Cats`, `Dogs`, `Cybermen`, `Memes`, `Youtube Streamer`, `Twitch Streamer`,
            `Clout`, `Tardis`, `DeeterPlays`, `Kerblam!`, `Doctor's Sonic Nose`,`Roblox`
        ]
        let result = Math.floor((Math.random() * replies.length));
        let embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription(`Delivered **${replies[result]}** to **${user}**`)
        message.channel.send(embed);
        }else{
            let embed = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setDescription(`Delivered **${object}** to **${user}**`)
            message.channel.send(embed);
        }
        } catch (e) {
          console.log(e.stack)
        }
    }
}
