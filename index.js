const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const mathjs = require('mathjs');
const config = require('./config.json')
const PREFIX = config.prefix
var version = 'Alpha 2.0.';

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

    if (!bot.commands.has(command)) return;

    try {
        bot.commands.get(command).execute(message, args,bot)    
    } catch (error) {
        console.log(error)
        message.reply('❔ An error has occured.')
    }
    })

bot.login(config.token);