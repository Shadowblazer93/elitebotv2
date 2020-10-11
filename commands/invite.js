const Discord = require('discord.js')

module.exports = {
    name: 'invite',
    description: 'Gives the invite link.',
    execute(message, args){

        const Einvite = new Discord.MessageEmbed()
        .setThumbnail('https://cdn.discordapp.com/avatars/728176491514298478/61125c07e7c80e872362a350e249bbed.png?size=512')
        .addField('Invite','[Invite Elite bot](https://discordapp.com/oauth2/authorize?client_id=728176491514298478&scope=bot&permissions=268954742)')
        .addField('Support Server','[Join Support Server](https://discord.gg/TTCPhmP)')
        .setFooter(`Elite Bot created by Shadowblazer93`, "https://images-ext-1.discordapp.net/external/bRWN5fB6sJqwpN9xMQwVYk5mnpZVJHz_9A3X8taN80o/https/cdn.discordapp.com/avatars/411548232133640203/2046bbd6807aac07513ce80020116148.webp")
        .setColor("BLUE")

        if(message.channel.type == 'dm') return message.channel.send(Einvite)

            if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send('Please give me permissions to send messages.') 
            message.channel.send(Einvite)
    }
}