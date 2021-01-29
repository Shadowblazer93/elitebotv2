const Discord = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'ban users from the guild',
    execute(message, args){
        if(message.channel.type == 'dm') return message.channel.send('❌ I can\'t execute that command in DMs!')


        if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send('I do not have permission to send messages in that channel!').catch(err => {return;})
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send('I do not have permission to ban members!')
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send('ERROR : You do not have permissions to ban members!')

        const Eban = new Discord.MessageEmbed()
        .setTitle('Ban')
        .setDescription('**Usage** : ``;ban [user] (reason)``\n**Permissions** : Ban_Members')
        .setColor("RED")

        let buser = message.guild.members.cache.get(args[0]) || message.mentions.members.first() || args[0]
        if(!buser) return message.channel.send(Eban)

        let breason = args.slice(1).join(" ")
        if(!breason) breason = 'Undefined'

        const Ebanned = new Discord.MessageEmbed()
        .setAuthor(`${buser.user.username}#${buser.user.discriminator} has been banned`, buser.user.displayAvatarURL({dynamic:true}))
        .addField('User',`${buser}`, true)
        .addField('Moderator',`${message.author}`, true)
        .addField('Reason', breason)
        .setColor("BLUE")

        buser.ban({reason: breason}).catch(err => {
            message.channel.send(`I can't ban someone with a role higher than me!`)
        })
    }
}