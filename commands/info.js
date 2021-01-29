const Discord = require('discord.js')

module.exports = {
    name: 'info',
    description: 'Gives information about the bot',
    execute(message, args){

        const Einfo = new Discord.MessageEmbed()
            .setThumbnail('https://cdn.discordapp.com/avatars/728176491514298478/61125c07e7c80e872362a350e249bbed.png?size=256')
            .addField('Help Website', '[Top.gg](https://top.gg/bot/728176491514298478)')
            .addField('Support server','[Support Server](https://discord.gg/smBNsAX)')
            .addField('Version', 'Update 21-1.5')
            .setColor("YELLOW")

        if(message.channel.type == 'dm') return message.channel.send(Einfo);

        if (!message.guild.me.hasPermission("SEND_MESSAGES")) return  message.author.send('Please give me permissions to send messages.') 
            message.channel.send(Einfo)
    }
}