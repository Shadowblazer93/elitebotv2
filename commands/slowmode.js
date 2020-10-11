const Discord = require('discord.js');
const { re } = require('mathjs');

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
        .setDescription('**Usage** : ``;slowmode [time]``\n**Permissions** : Manage_Channelss')
        .setColor("RED")

        var slowtime = message.content.split(' ').slice(1).join(' ')
            if(!slowtime) return message.channel.send(Eslowmode)
            if(slowtime < 0) return message.reply('Please enter a valid number')

            if(slowtime > 21600) return message.reply('Please choose a number below 21600 (6 hours)')
            if(slowtime == 'off') return message.channel.setRateLimitPerUser(0).then (message.channel.send('Removed slowmode from this channel.'))
            if(slowtime == 'max') return message.channel.setRateLimitPerUser(21600).then (message.channel.send('Successfully changed the slowmode time to ``6 hours``'))

            if(isNaN(slowtime)) return message.channel.send('❌ Please enter a valid number!')

            message.channel.setRateLimitPerUser(slowtime)

            message.channel.send('Changed the slowmode time to : ``' + slowtime + ' seconds``').catch(err => {
                message.channel.send('Im having a headache. Please try again later.')
            })
    }
}