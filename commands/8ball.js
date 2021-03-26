const Discord = require('discord.js');
const { re } = require('mathjs');
const Mathjs = require('mathjs');

module.exports = {
    name: '8ball',
    description: 'Gives a random output for question asked.',
    execute(message, args){

        const E8ball = new Discord.MessageEmbed()
        .setTitle('8Ball')
        .setDescription('**Usage** : ``;8ball [question]``')
        .setColor("RED")

            if(message.channel.type == 'dm'){

                let ballnumber = Math.floor(Math.random() * 17)
                if(!args[0]) return message.channel.send(E8ball)
                if (ballnumber === 0 ) return message.channel.send('Yes, Definitely')
                if (ballnumber === 1 ) return message.channel.send('Of course not')
                if (ballnumber === 2 ) return message.channel.send('Yes')
                if (ballnumber === 3 ) return message.channel.send('No')
                if (ballnumber === 4 ) return message.channel.send('pls no')
                if (ballnumber === 5 ) return message.channel.send('I don\'t know')
                if (ballnumber === 6 ) return message.channel.send('Definitely not')
                if (ballnumber === 7 ) return message.channel.send('Stop asking me that please!')
                if (ballnumber === 8 ) return message.channel.send('Does it look like I want to answer that?')
                if (ballnumber === 9 ) return message.channel.send('I\'m not allowed to give my opinion on that')
                if (ballnumber === 10) return message.channel.send('Damn... I kinda don\'t care')
                if (ballnumber === 11) return message.channel.send('I agree')
                if (ballnumber === 12) return message.channel.send('I agree to disagree')
                if (ballnumber === 13) return message.channel.send('Absolutely not')
                if (ballnumber === 14) return message.channel.send('Hard to say')
                if (ballnumber === 15) return message.channel.send('I like ice crea- Sorry what were you saying?')
                if (ballnumber === 16) return message.channel.send('Absolutely!')
            };

            if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send('Please give me permissions to send messages.') 

            if(!args[0]) return message.channel.send(E8ball)

            let ballnumber = Math.floor(Math.random() * 17)

            if(!args[0]) return message.channel.send(E8ball)
                if (ballnumber === 0 ) return message.channel.send('Yes, Definitely')
                if (ballnumber === 1 ) return message.channel.send('Of course not')
                if (ballnumber === 2 ) return message.channel.send('Yes')
                if (ballnumber === 3 ) return message.channel.send('No')
                if (ballnumber === 4 ) return message.channel.send('pls no')
                if (ballnumber === 5 ) return message.channel.send('I don\'t know')
                if (ballnumber === 6 ) return message.channel.send('Definitely not')
                if (ballnumber === 7 ) return message.channel.send('Stop asking me that please!')
                if (ballnumber === 8 ) return message.channel.send('Does it look like I want to answer that?')
                if (ballnumber === 9 ) return message.channel.send('I\'m not allowed to give my opinion on that')
                if (ballnumber === 10) return message.channel.send('Damn... I kinda don\'t care')
                if (ballnumber === 11) return message.channel.send('I agree')
                if (ballnumber === 12) return message.channel.send('I agree to disagree')
                if (ballnumber === 13) return message.channel.send('Absolutely not')
                if (ballnumber === 14) return message.channel.send('Hard to say')
                if (ballnumber === 15) return message.channel.send('I like ice crea- Sorry what were you saying?')
                if (ballnumber === 16) return message.channel.send('Absolutely!')
    }
}
