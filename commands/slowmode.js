const Discord = require('discord.js');
const mathjs = require('mathjs');
const ms = require('ms')

module.exports = {
    name: 'slowmode',
    description: 'set the slowmode of a channel quickly',
    execute(message, args){
        if(message.channel.type == 'dm') return message.channel.send('❌ I can\'t execute that command in DMs!')

        if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send('Please give me permissions to send messages.')
        if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('Please give me permission to manage channels!')
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('ERROR : You do not have the Manage_Channels Permission!')

        const Eslowmode = new Discord.MessageEmbed()
        .setTitle('Slowmode')
        .setDescription('**Usage** : ``;slowmode [time] (channel)``\n**Permissions** : Manage_Channelss')
        .setColor("RED")

        var slowmodetime = message.content.split(' ').slice(1).join(' ')
        if(!slowmodetime) return message.channel.send(Eslowmode)

        let slowtime = ms(slowmodetime)
        let timefinal = (slowtime/1000)

        let schannel = message.channel
        
            if(!slowmodetime) return message.channel.send(Eslowmode)
            if(slowmodetime == 'off') return schannel.setRateLimitPerUser(0).then (message.channel.send(`Removed slowmode from ${message.channel}`))
            if(slowmodetime == 'max') return schannel.channel.setRateLimitPerUser(21600).then (message.channel.send('Successfully changed the slowmode time to ``6 hours``'))
            if(timefinal < 0) return message.reply('❌ Please enter a valid number!')
            if(timefinal > 21600) return message.reply('Please choose a number below 21600 (6 hours)')
            if(isNaN(timefinal)) return message.channel.send('❌ Please enter a valid number!')

            schannel.setRateLimitPerUser(timefinal).catch(err => {
                return message.channel.send('❌ Please enter a valid number!')
            })

            message.channel.send('Changed the slowmode time to : ``' + slowmodetime + '``').catch(err => {
                message.channel.send('Im having a headache. Please try again later.')
            })
    }
}