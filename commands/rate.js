const Discord = require('discord.js');

module.exports = {
    name: 'rate',
    description: 'Rates the user out of 10',
    execute(message, args){
        const Erate = new Discord.MessageEmbed()
            .setTitle('Rate')
            .setDescription('**Usage** : ``;rate [topic]``')
            .setColor("RED")

        
        if(message.channel.type == 'dm'){
            let dmrate = args.slice(0).join(" ")
            if(!dmrate) return message.channel.send(Erate)

            let dmrateno = Math.floor(Math.random() * 11)

            message.channel.send(`I would rate \`\`${dmrate}\`\` a \`\`` + dmrateno + `/10\`\``).catch(err => {return;})
        return}




        if (!message.guild.me.hasPermission("SEND_MESSAGES")) return  message.author.send('Please give me permissions to send messages.') 
            
            let rateduser = message.guild.members.cache.get(args[0]) || message.mentions.members.first() || message.member
            if(!rateduser) return rateduser = message.channel.send('Please provide a valid user from this server to rate');
            if(rateduser.id == 411548232133640203) return message.channel.send('I would rate my master ``10/10`` :heartpulse:')
            if(rateduser.id == 728176491514298478) return message.channel.send('Me? I don\'t know what to rate myself.')

            let ratenumber = Math.floor(Math.random() * 11)
            message.channel.send(`I would rate ${rateduser} a \`\`` +  ratenumber + `/10\`\``).catch(err => {
                message.channel.send('That username is too cringe to rate.')
            })
    }
}