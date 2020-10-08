const Discord = require('discord.js')

module.exports = {
    name: 'invite',
    description: 'Gives the invite link.',
    execute(message, args){
            if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send('Please give me permissions to send messages.') 

            const Einvite = new Discord.MessageEmbed()
            .setTitle('Invite Elite Bot')
            .setDescription('https://discordapp.com/oauth2/authorize?client_id=728176491514298478&scope=bot&permissions=268954742')
            .setFooter(`Elite Bot created by Shadowblazer93`, "https://images-ext-1.discordapp.net/external/bRWN5fB6sJqwpN9xMQwVYk5mnpZVJHz_9A3X8taN80o/https/cdn.discordapp.com/avatars/411548232133640203/2046bbd6807aac07513ce80020116148.webp")
            .setColor("BLUE")
            message.channel.send(Einvite)
    }
}