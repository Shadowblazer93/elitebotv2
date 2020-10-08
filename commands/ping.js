const Discord = require('discord.js');
const Mathjs = require('mathjs');
const Client = new Discord.Client();

module.exports = {
    name: 'ping',
    description: 'Gets the latency between you and the bot.',
    execute(message, args){

        if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send('Please give me permissions to send messages.');

            const Eping = new Discord.MessageEmbed()
            .setTitle(':ping_pong: Pong!')
            .setDescription("```Current ping : " + Math.round(Client.ws.ping) + ' ms```')
            .setFooter(`Elite Bot created by Shadowblazer93`, "https://images-ext-1.discordapp.net/external/bRWN5fB6sJqwpN9xMQwVYk5mnpZVJHz_9A3X8taN80o/https/cdn.discordapp.com/avatars/411548232133640203/2046bbd6807aac07513ce80020116148.webp")
            .setColor("GREEN")

            message.channel.send(Eping).catch(err => {
                return;
            })
    }
}