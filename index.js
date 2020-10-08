const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const mathjs = require('mathjs');
const token = 'NzI4MTc2NDkxNTE0Mjk4NDc4.Xv2sbA.lyJD2STfWhEZ-A4n7GxQmp-40f8';
const PREFIX = 'm;';
var version = 'Alpha 1.0.1';

bot.commands = new Discord.Collection();
const commandfiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandfiles){
    const command = require(`./commands/${file}`);

    bot.commands.set(command.name, command)
}

bot.on('ready', () =>{
    console.log('Elite bot is online!');
    setInterval(() => {
    bot.user.setActivity(';help | ' + bot.guilds.cache.size + ' servers', { type: 'PLAYING'}).catch(console.error);
}, 20000);
})

bot.on('message',async message =>{
    if(!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(/ +/)
    const command = args.shift().toLocaleLowerCase();

    if(command === 'help'){
        bot.commands.get('help').execute(message, args);
    }
    else if(command === 'ping'){
        bot.commands.get('ping').execute(message, args)
    }
    else if(command === 'invite'){
        bot.commands.get('invite').execute(message, args)
    }
    else if(command === 'links'){
        bot.commands.get('links').execute(message, args)
    }
    else if(command === 'info'){
        bot.commands.get('info').execute(message, args)
    }
    else if(command === 'vote'){
        bot.commands.get('vote').execute(message, args)
    }
    else if(command === 'poll'){
        bot.commands.get('poll').execute(message, args)
    }
    else if(command === 'embed'){
        bot.commands.get('embed').execute(message, args)
    }
    else if(command === 'math'){
        bot.commands.get('math').execute(message,args)
    }
    else if(command === 'nick'){
        bot.commands.get('nick').execute(message, args)
    }
    else if(command === '8ball'){
        bot.commands.get('8ball').execute(message, args)
    }
    else if(command === 'rate'){
        bot.commands.get('rate').execute(message, args)
    }
    else if(command === 'minesweeper'){
        bot.commands.get('minesweeper').execute(message, args)
    }
    else if(command === 'role'){
        bot.commands.get('role').execute(message, args)
    }
    else if(command === 'clear'){
        bot.commands.get('clear').execute(message, args)
    }
    else if(command === 'warn'){
        bot.commands.get('warn').execute(message, args)
    }
    else if(command === 'user'){
        bot.commands.get('user').execute(message, args)
    }
    else if(command === 'kick'){
        bot.commands.get('kick').execute(message, args)
    }
})

bot.login(token);