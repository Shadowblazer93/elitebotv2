const Discord = require('discord.js');
const Mathjs = require('mathjs');

module.exports = {
    name: 'math',
    description: 'make elite bot do your homework for you.',
    execute(message, args){
        if (!message.guild.me.hasPermission("SEND_MESSAGES")) return  message.author.send('Please give me permissions to send messages.')
            const Emath = new Discord.MessageEmbed()
            .setTitle('Math')
            .setDescription('**Usage** : ``;math [problem]``\n**Operations**\n``+`` : Addition\n``-`` : Sutraction\n``x`` : Multiplication\n``/`` : Division\n``^`` : Exponential Multiplication\n**Extra**\n``sqrt()`` : Square Root\n``cbrt()`` : Cube Root\n**Trigonometric Functions**\n``sin() cos() tan() cot() sec() csc()``\n**Note** : Numbers go in the bracket.')
            .setColor("RED")

            var {evaluate, arg} = require("mathjs");


            let question = message.content.substring(5)
            if(!question) return message.channel.send(Emath)

            let qmultiply = question.replace('x','*')

            try {
                evaluate(question)
            }
            catch(err) {
                return message.channel.send('❌ Invalid question')
            };

            let answer = evaluate(question)

            const Eanswer = new Discord.MessageEmbed()
            .setTitle(question)
            .setDescription('```' + answer + '```')
            .setFooter(`Elite Bot created by Shadowblazer93`, "https://images-ext-1.discordapp.net/external/bRWN5fB6sJqwpN9xMQwVYk5mnpZVJHz_9A3X8taN80o/https/cdn.discordapp.com/avatars/411548232133640203/2046bbd6807aac07513ce80020116148.webp")
            .setColor('YELLOW')
            
            message.channel.send(Eanswer).catch(err => {
                    message.channel.send(Emath)
                })
    }

}