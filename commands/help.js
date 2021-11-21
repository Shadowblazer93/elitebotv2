const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Elite bots help page',
    execute(message, args, bot){

        const Ecmds = new Discord.MessageEmbed()
        .setTitle('Commands for Elite Bot')
        .setDescription('Elite bot uses ``;`` prefix before all her commands.\n**Command Arguments**\n``[]`` - required argument\n``()`` - optional argument\n*Adding these symbols is not required when executing commands.*')
        .addField('View A Command\'s Syntax','To see how to view a command,\nType the prefix and the command\'s name\nFor example: ``;mute , ;nick``')
        .addField('Elite bot Support Server','Need help? [Click to Join the Support Server](https://discord.gg/smBNsAX)')
        .addField(':pizza:  General Commands','```;help\n;dm\n;user\n;ping\n;info\n;invite\n ```', true)
        .addField(':busts_in_silhouette:  Social commands','```;embed\n;poll\n;vote\n \n \n \n ```', true)
        .addField(':womans_hat:  Fun commands','```;8ball\n;rate\n;weather\n;choose\n;youtube\n;coinflip\n;minesweeper```', true)
        .addField(':woman_detective:  Moderator Commands', '```;modlog\n;warn\n;kick\n;ban\n;nick\n;role\n;mute\n;unmute\n;report```', true)
        .addField(':newspaper:  Channel commands', '```;nuke\n;clone\n;topic\n;create\n;delete\n;lock\n;unlock\n;slowmode\n;clear```', true)
        .setFooter(`Elite Bot created by Shadowblazer93`, "https://cdn.discordapp.com/avatars/411548232133640203/9524daf0c76b4ffa8406e587e7607a96.png?size=256")
        .setColor(0xff66ff)
        if(message.channel.type == 'dm') return message.channel.send(Ecmds);


        if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send('Please give me permissions to send messages.')


            message.channel.send(Ecmds).catch(err => {
                message.author.send(Ecmds).catch(err => {return;})
            })

    }
}
