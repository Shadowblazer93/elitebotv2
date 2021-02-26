const Discord = require('discord.js')

module.exports = {
    name: 'vote2',
    description: 'Create a new vote',
    execute(message, args){
        if(message.channel.type == 'dm') return message.channel.send('❌ I can\'t execute that command in DMs!')
        if (!message.guild.me.hasPermission("SEND_MESSAGES")) return  message.author.send('Please give me permissions to send messages.')
        if (!message.guild.me.hasPermission("ADD_REACTIONS")) return message.channel.send('Please give me permissions to react to messages in this channel.');
        if (!message.member.hasPermission("MANAGE_MESSAGES"))return message.channel.send('ERROR : You need to have Manage Messages permission to create new polls!')

            const Evote = new Discord.MessageEmbed()
            .setTitle('Vote')
            .setDescription('**Usage** : ``;vote``\n**Permissions** : Manage_Messages')
            .setColor(0xff3c00)

            const Echoice1 = new Discord.MessageEmbed()
            .setDescription('Enter your first choice')
            .setColor("BLUE")

            message.channel.send(Echoice1)

            message.channel.awaitMessages(m => m.author.id == message.author.id,
                {max: 1, time: 10000}).then(collected => {if (collected.first().content.toLowerCase() == 'yes'){chtag.delete()
                message.channel.send('✅  Sucessfully deleted the channel.').catch(err => {return;})
                } else {message.channel.send('**Operation Cancelled** : Confirmation Declined')}
              }).catch(() => {message.reply('**Operation Cancelled** : Time ran out.');});
            

}}
