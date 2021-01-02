const Discord = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Elite bots help page',
    execute(message, args, bot){

        const Ecmds = new Discord.MessageEmbed()
            .setTitle('Commands for Elite Bot')
            .setDescription('Elite bot uses ``;`` prefix before all her commands.\n**Command Arguments**\n``[]`` - required argument\n``()`` - optional argument\n*Adding these symbols is not required when executing commands.*')
            .addField('View A Command\'s Syntax','To see how to view a command,\nType the prefix and the command\'s name\nFor example: ``;help ;invite``')
            .addField('Elite bot Support Server','Need help? [Click to Join the Support Server](https://discord.gg/smBNsAX)')
            .addField(':pizza:  General Commands','```;help\n;dm\n;invite\n;user\n ```', true)
            .addField(':woman_detective:  Moderator Commands', '```;kick\n;ban\n;nick\n;role\n;clear\n;channel\n;slowmode\n```', true)
            .addField(':busts_in_silhouette:  Social commands','```;embed\n;poll\n;vote\n;announce\n ```', true)
            .addField(':pager:  Informational commands','```;weather\n;math```', true)
            .addField(':womans_hat:  Fun commands','```;8ball\n;rate```', true)
            .addField(':newspaper:  Debug Commands', '```;ping\n;info```', true)
            .setFooter(`Elite Bot created by Shadowblazer93`, "https://cdn.discordapp.com/avatars/411548232133640203/a_c955646bfb90ce606b888800d98f236b.webp")
            .setColor(0xff66ff)

        if(message.channel.type == 'dm') return message.channel.send(Ecmds);


        if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send('Please give me permissions to send messages.') 

            
            message.channel.send(Ecmds).catch(err => {
                message.author.send(Ecmds).catch(err => {return;})
            })

    }

}

let lmao = `help dm invite ,kick ban channel clear role removerole, weather math ,embed poll vote announce giveaway, 8ball rate, ping info user, links` 