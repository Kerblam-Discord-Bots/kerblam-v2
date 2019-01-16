const {Command} = require('discord.js-commando'),
Discord = require('discord.js');
module.exports = class NCommand extends Command {
         constructor(client) {
           super(client, {
             name: 'rate',
             memberName: 'rate',
             aliases: [],
             examples: [`${client.commandPrefix}rate @user/id`],
             description: 'Rates you or the user you mention',
             group: 'fun',
             args: [
                {
                    key: 'user',
                    prompt: 'What user do you want to rate?',
                    type: 'user',
                    default: message => message.author
                }
              ]
})
}
        async run(message, {user}) {
        let random = Math.floor(Math.random() * 10);
        let e = new Discord.RichEmbed()
        .setAuthor(user.tag, user.displayAvatarURL)
        .setColor(`RANDOM`)
        .setTitle(`Rating`)
        .setTimestamp()
        if(user.id === "288491554841034752" || this.client.isOwner(user.id)){
        e.setDescription(`100/10`)
        }else{
            e.setDescription(`${random}/10`)
        }
        message.channel.send(e)
}
}
