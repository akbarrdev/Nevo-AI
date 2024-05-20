const Discord = require('discord.js');
const nevo = require('nevo-ai');

const client = new Discord.Client();
const prefix = '/'; 

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async message => {
    if (message.author.bot) return;
    
    if (!message.content.startsWith(prefix)) return;
    
    const prompt = message.content.slice(prefix.length);

    try {
        const response = await nevo.ask({ apiKey: 'YOUR_NEVO_API_KEY', prompt });
        message.channel.send(response);
    } catch (error) {
        console.error('Error fetching AI response:', error);
        message.channel.send('Sorry, there was an error fetching AI response.');
    }
});

// Mengganti 'YOUR_API_KEY' dengan API key Anda yang sebenarnya

client.login('YOUR_DISCORD_BOT_TOKEN');
