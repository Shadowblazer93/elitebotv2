const Discord = require('discord.js');

module.exports = {
    name: 'kick',
    description: 'kicks the user specified',
    execute(message, args){
        if(message.channel.type == 'dm') return message.channel.send('❌ I can\'t execute that command in DMs!')

        if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send('I do not have permissions to speak in that channel!').catch(err => {return;})
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('I do not have permission to kick members!')
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('ERROR : You do not have permission to kick members!')

        const Ekick = new Discord.MessageEmbed()
        .setTitle('Kick')
        .setDescription('**Usage** : ``;kick [user] (reason)``\n**Permissions** : Kick_Members')
        .setColor("RED")

        let kuser = message.guild.members.cache.get(args[0]) || message.mentions.members.first()
        if(!kuser) return message.channel.send(Ekick)

        let kreason = args.slice(1).join(" ")
        if(!kreason) kreason = 'Undefined'

        let modchannel = message.guild.channels.cache.find(r => r.name === 'modlog')

        const Eked = new Discord.MessageEmbed()
        .setAuthor(`${kuser.user.username}#${kuser.user.discriminator} has been kicked`, kuser.user.displayAvatarURL({dynamic:true}))
        .addField('User',kuser, true)
        .addField('Moderator',message.author, true)
        .addField('Reason',kreason)
        .setColor(0xff66ff)
        .setTimestamp()

        if(kuser) {
            kuser.kick(kreason).then(() => {
               message.channel.send(Eked)
               if(modchannel) modchannel.send(Eked)
            }).catch(err => {
            message.reply(' Either I do not have permissions or that person is a moderator/admin . Place my role at the top in your Server\'s role settings.') })
        } else {
            message.reply('Please choose a valid member from this server!')
        }
    }
}
