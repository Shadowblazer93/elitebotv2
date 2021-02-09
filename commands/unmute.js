const Discord = require('discord.js');

module.exports = {
    name: 'unmute',
    description: 'unmutes the user specified',
    execute(message, args){
        if(message.channel.type == 'dm') return message.channel.send('❌ I can\'t execute that command in DMs!')
        if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send('I do not have permissions to speak in that channel!').catch(err => {return;})
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('I do not have permission to kick members!')
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('ERROR : You do not have permission to manage channels!')

        const Eunmute = new Discord.MessageEmbed()
        .setTitle('Unmute')
        .setDescription('**Usage** : `;unmute [user]`\n**Permissions** : `Manage_Channels`\nTo setup the muted role type `;mutesetup`')
        .setColor("RED")

        const Emutesetup = new Discord.MessageEmbed()
        .setTitle('Set up the muted role.')
        .setDescription(`The muted role is not set up in this server.\nType \`;mutesetup\` to gain access to the ;mute command.`)
        .setColor("RED")

        let nuser = message.guild.members.cache.get(args[0]) || message.mentions.members.first()
        if(!nuser) return message.channel.send(Eunmute)

        const Enutesuccess = new Discord.MessageEmbed()
        .setDescription(`Successfully unmuted ${nuser}`)
        .setColor("GREEN")

        const Enutesetup = new Discord.MessageEmbed()
        .setTitle('Set up the muted role.')
        .setDescription(`The muted role is not set up in this server.\nType \`;mutesetup\` to gain access to the ;mute command.`)
        .setColor("RED")

        const Enutealreadyhas = new Discord.MessageEmbed()
        .setDescription(`${nuser} is not muted!`)
        .setColor("RED")

        let fetchedrole = message.guild.roles.cache.find(r=> r.name === 'Muted-EB')
        if(fetchedrole){
          if(nuser.roles.cache.has(fetchedrole.id)){
            nuser.roles.remove(fetchedrole).then(() => {message.channel.send(Enutesuccess)})
          } else {
            message.channel.send(Enutealreadyhas)
          }
          return;
        }

        if(!fetchedrole){message.channel.send(Emutesetup)
        return;}
}}
