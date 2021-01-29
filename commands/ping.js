const Discord = require('discord.js');
const Mathjs = require('mathjs');

module.exports = {
    name: 'ping',
    description: 'Gets the latency between you and the bot.',
    execute(message, args, bot){
        
        const Eping = new Discord.MessageEmbed()
            .setTitle(':ping_pong: Pong!')
            .setDescription("```Current ping : " + Math.round(bot.ws.ping) + ' ms```')
            .setFooter(`Elite Bot created by Shadowblazer93`, "https://cdn.discordapp.com/avatars/411548232133640203/a_7e31936761645c6ba7c3c42cd58dbe8a.png?size=256")
            .setColor("GREEN")

        if(message.channel.type == 'dm'){
            message.channel.send(Eping).catch(err => {return;})
        return;}

        if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send('Please give me permissions to send messages.');
            message.channel.send(Eping).catch(err => {return;})
    }
}