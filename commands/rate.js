const Discord = require('discord.js');

module.exports = {
    name: 'rate',
    description: 'Rates the user out of 10',
    execute(message, args){
        if (!message.guild.me.hasPermission("SEND_MESSAGES")) return  message.author.send('Please give me permissions to send messages.') 
            const Erate = new Discord.MessageEmbed()
            .setTitle('Rate')
            .setDescription('**Usage** : ``;rate (user)``')
            .setColor("RED")

            let rateduser = message.mentions.members.first() || message.member || args[1]
            if(!rateduser) return rateduser = message.channel.send('Please provide a valid user from this server to rate');
            if(rateduser.id == 411548232133640203) return message.channel.send(':heartpulse:  I love my master far too much to put it in numbers.')
            if(rateduser.id == 728176491514298478) return message.channel.send('Me? I don\'t know what to rate myself.')

            let ratenumber = Math.floor(Math.random() * 11)
            message.channel.send(`I would rate ${rateduser} a \`\`` +  ratenumber + `/10\`\``).catch(err => {
                message.channel.send('That username is too cringe to rate.')
            })
    }
}