const Discord = require('discord.js');
const emojiFromText = require("emoji-from-text");

module.exports = {
    name: 'emoji',
    description:'Generates emojis based on text',
    execute(message, args, bot){
        if (!message.guild.me.hasPermission("SEND_MESSAGES")) return  message.author.send('Please give me permissions to send messages.');

        const Eemoji = new Discord.MessageEmbed()
        .setTitle('Generate Emojis')
            .setDescription('This command allows you to generate emojis based on text inputted\n**Usage** : ``;emoji [text]``')
            .setColor("RED")

        let emojiinput = args.slice(0).join(" ")
        if(!emojiinput) return message.channel.send(Eemoji)

        let generatedemoji = emojiFromText(emojiinput, true)
        if(typeof generatedemoji == 'undefined') return message.channel.send ('No such emoji was found')

        message.channel.send(emojiFromText(emojiinput, true).match.toString())
    }}