const Discord = require('discord.js');
const { or } = require('mathjs');

module.exports = {
    name: 'role',
    description: 'Add roles to users',
    execute(message, args){
        if(!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send('I do not have permissions to speak in that channel!').catch(err => {return;})
        if(!message.guild.me.hasPermission("MANAGE_ROLES")) return  message.channel.send('I do not have permissions to manage roles!')
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send('ERROR : Must have Manage Roles permission to add roles')

        const Erole = new Discord.MessageEmbed()
                .setTitle('Role')
                .setDescription('**Usage** : ``;role [@user] [@role/role name/role ID]``\n**Permissions** : Manage_Roles')
                .setColor("RED")


                let ruser = message.guild.member(message.mentions.users.first()) || message.member || args[0]
                if(!ruser) return message.channel.send(Erole)

                let rrole = message.mentions.roles.first() || args[1]
                if(!rrole) return message.channel.send(Erole)

                if(ruser.roles.cache.has(rrole.id)) {
                    return message.channel.send(`❌ ${ruser} already has that role!`)}

                 let roleName = message.guild.roles.cache.find(r => r.name === rrole)


                 message.member.roles.add(roleName).then(() => {
                     message.channel.send(`Successfully added the role to ${ruser}`)
                 }).catch(err => {
                     ruser.roles.add(rrole.id).catch(err => {
                         return message.channel.send('Please enter a valid role!')
                     })
                 })
    }
}