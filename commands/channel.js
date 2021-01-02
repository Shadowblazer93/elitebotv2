const Discord = require('discord.js');

module.exports = {
    name: 'channel',
    description: 'lists all channel commands',
    execute(message, args){
        if(message.channel.type == 'dm') return message.channel.send('❌ I can\'t execute that command in DMs!')
        if (!message.guild.me.hasPermission("SEND_MESSAGES")) return  message.author.send('Please give me permissions to send messages.')

            const Echannel = new Discord.MessageEmbed()
            .setTitle('Channel commands')
            .setDescription('```;create\n;delete\n;clone\n;topic```')
            .setColor("RED")

            message.channel.send(Echannel).catch(err => {
                message.channel.send('❌I\'m having a headache right now. Try again later.')
            })
    }
}