const Discord = require('discord.js');
const moment = require('moment')

module.exports = {
    name: 'user',
    description: 'Tells information about the user',
    execute(message, args){
        if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send('I do not have permissions to speak in that channel!').catch(err => {return;})

        let iuser = member = message.guild.members.cache.get(args[0]) || message.mentions.members.first() || message.member

        let joineddiscord = moment(iuser.user.createdTimestamp).format('MMMM Do, YYYY')
        let joinedguild = moment(iuser.joinedTimestamp).format('MMMM Do, YYYY')

        let Einfo = new Discord.MessageEmbed()
        .setAuthor(`${iuser.user.username}#${iuser.user.discriminator}`, iuser.user.displayAvatarURL({dynamic:true}))
        .setThumbnail(iuser.user.displayAvatarURL({format:'png'}))
        .addField('ID',iuser.user.id)
        .addField('Joined Discord',joineddiscord, true)
        .addField('Joined Server',joinedguild, true)
        .setColor('BLUE')

        message.channel.send(Einfo)
    }
}