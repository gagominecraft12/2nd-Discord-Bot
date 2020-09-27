const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${Alt'er#8880}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NzU5NTgxMDY5NjY5MzAyMzA1.X2_k_w.cKtrODlb0uc5nCVc8-2NwVurMO8');
