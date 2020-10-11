const Discord = require('discord.js');

module.exports = {
    name: 'dm',
    description:'DMs you the help command',
    execute(message, args){
    if(message.channel.type == 'dm') return message.channel.send(`Try doing ;help instead!`)
    if (!message.guild.me.hasPermission("SEND_MESSAGES")) return  message.author.send('Please give me permissions to send messages.')

        const Ecmds = new Discord.MessageEmbed()
        .setTitle('Commands for Elite Bot')
        .setDescription('Elite bot uses ``;`` prefix before all her commands.\n**Command Arguments**\n``[]`` - required argument\n``()`` - optional argument\n*Adding these symbols is not required when executing commands.*')
        .addField('View A Command\'s Syntax','To see how to view a command,\nType the prefix and the command\'s name\nFor example: ``;help ;invite``')
        .addField(':pizza:  General Commands','```;help\n;dm\n;invite\n;user\n ```', true)
        .addField(':woman_detective:  Moderator Commands', '```;kick\n;ban\n;channel\n;clear\n;role```', true)
        .addField(':busts_in_silhouette:  Social commands','```;embed\n;poll\n;vote\n;announce\n ```', true)
        .addField(':pager:  Informational commands','```;weather\n;math```', true)
        .addField(':womans_hat:  Fun commands','```;8ball\n;rate```', true)
        .addField(':newspaper:  Debug Commands', '```;ping\n;info```', true)
        .setFooter(`Elite Bot created by Shadowblazer93`, "https://images-ext-1.discordapp.net/external/bRWN5fB6sJqwpN9xMQwVYk5mnpZVJHz_9A3X8taN80o/https/cdn.discordapp.com/avatars/411548232133640203/2046bbd6807aac07513ce80020116148.webp")
        .setColor(0xff66ff)


            message.author.send(Ecmds).catch(err => {
                return message.reply('Please turn on your direct messages!');
            })

            message.reply(`Please check your DMs.`)
    }
}