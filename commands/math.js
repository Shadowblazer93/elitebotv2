const Discord = require('discord.js');
const Mathjs = require('mathjs');
const config = require('../config.json')
const PREFIX = config.prefix
module.exports = {
    name: 'math',
    description: 'make elite bot do your homework for you.',
    execute(message, args){

        const Emath = new Discord.MessageEmbed()
            .setTitle('Math')
            .setDescription('**Usage** : ``;math [problem]``\n**Operations**\n``+`` : Addition\n``-`` : Sutraction\n``x`` : Multiplication\n``/`` : Division\n``^`` : Exponential Multiplication\n**Extra**\n``sqrt()`` : Square Root\n``cbrt()`` : Cube Root\n**Trigonometric Functions**\n``sin() cos() tan() cot() sec() csc()``\n**Note** : Numbers go in the bracket.')
            .setColor("RED")

            var {evaluate} = require("mathjs");


            let question = args.slice(0).join(" ")
            if(!question) return message.channel.send(Emath)

            let qmultiply = question.replace('x','*')

            

        if(message.channel.type == 'dm'){

            try{
                evaluate(qmultiply)
            }
            catch(err) {
                return message.channel.send('❌ Invalid question!')
            }

            let danswer = evaluate(qmultiply)

            const Edanswer = new Discord.MessageEmbed()
            .addField('Input','```' + qmultiply + '```')
            .addField('Output','```' + danswer + '```')
            .setFooter(`Elite Bot created by Shadowblazer93`, "https://images-ext-1.discordapp.net/external/bRWN5fB6sJqwpN9xMQwVYk5mnpZVJHz_9A3X8taN80o/https/cdn.discordapp.com/avatars/411548232133640203/2046bbd6807aac07513ce80020116148.webp")
            .setColor('YELLOW')
            
            message.channel.send(Edanswer).catch(err => {
                    message.channel.send(Emath)
                })
            return};
        




        if (!message.guild.me.hasPermission("SEND_MESSAGES")) return  message.author.send('Please give me permissions to send messages.')

            try {
                evaluate(qmultiply)
            }
            catch(err) {
                return message.channel.send('❌ Invalid question')
            };

            let answer = evaluate(qmultiply)

            const Eanswer = new Discord.MessageEmbed()
            .addField('Input','```'+qmultiply+'```')
            .addField('Output','```'+answer+'```')
            .setFooter(`Elite Bot created by Shadowblazer93`, "https://images-ext-1.discordapp.net/external/bRWN5fB6sJqwpN9xMQwVYk5mnpZVJHz_9A3X8taN80o/https/cdn.discordapp.com/avatars/411548232133640203/2046bbd6807aac07513ce80020116148.webp")
            .setColor('YELLOW')
            
            message.channel.send(Eanswer).catch(err => {
                    message.channel.send(Emath)
                })
    }

}