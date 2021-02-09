const Discord = require('discord.js');

module.exports = {
    name: 'mute',
    description: 'mutes the user specified',
    execute(message, args){
        if(message.channel.type == 'dm') return message.channel.send('❌ I can\'t execute that command in DMs!')

        if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send('I do not have permissions to speak in that channel!').catch(err => {return;})
        if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send('I do not have permission to manage channels!')
        if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I do not have permission to manage roles!')
        if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send('ERROR : You do not have permission to manage channels!')

        const Emute = new Discord.MessageEmbed()
        .setTitle('Mute')
        .setDescription('**Usage** : `;mute [user]`\n**Permissions** : `MANAGE_CHANNELS`\nTo setup the muted role type `;mutesetup`')
        .setColor("RED")

        let muser = message.guild.members.cache.get(args[0]) || message.mentions.members.first()
        if(!muser) return message.channel.send(Emute)

        const Emutesuccess = new Discord.MessageEmbed()
        .setDescription(`Successfully muted ${muser}`)
        .setColor("GREEN")

        const Emutesetup = new Discord.MessageEmbed()
        .setTitle('Set up the muted role.')
        .setDescription(`The muted role is not set up in this server.\nType \`;mutesetup\` to gain access to the ;mute command.`)
        .setColor("RED")

        const Emutealreadyhas = new Discord.MessageEmbed()
        .setDescription(`${muser} is already muted!`)
        .setColor("RED")


        let fetchedrole = message.guild.roles.cache.find(r=> r.name === 'Muted-EB')
        if(fetchedrole){

          if(muser.roles.cache.has(fetchedrole.id)) return message.channel.send(Emutealreadyhas)

          if(muser){muser.roles.add(fetchedrole.id).then(() => {
            message.channel.send(Emutesuccess)
          }).catch(err => {message.channel.send('The muted role is higher in heirarchy to my role!\nGo to the roles tab and set my role to the top.')})
          return;
        }}


        if(!fetchedrole){
        message.channel.send(Emutesetup)
      }


}}
