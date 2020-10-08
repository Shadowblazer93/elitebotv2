const Discord = require('discord.js');
const { re } = require('mathjs');

module.exports = {
    name: 'warn',
    description: 'warns the member',
    execute(message, args){
        if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send('I do not have permissions to speak in that channel!').catch(err => {return;})
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send('ERROR : You do not have permission to kick members!')

        const Ewarn = new Discord.MessageEmbed()
        .setTitle('Warn')
        .setDescription('**Usage** : ``;warn [user] (reason)``\n**Permissions** : Kick_Members')
        .setColor('RED')

        let wuser = message.guild.members.cache.get(args[0]) || message.mentions.members.first()
        if(!wuser) return message.channel.send(Ewarn)

        let reason = args.slice(1).join(" ");
        if(!reason) reason = 'Undefined'

        const Eset = new Discord.MessageEmbed()
        .setAuthor(`${wuser.user.username}#${wuser.user.discriminator} has been warned`, wuser.user.displayAvatarURL({dynamic:true}))
        .addField('User',`${wuser}`, true)
        .addField('Moderator',`${message.author}`, true)
        .addField('Reason', reason)
        .setColor("BLUE")

        message.channel.send(Eset)
        wuser.send(Eset).catch(err => {return;})
    }
}