const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '.'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Nothing`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});



client.on('message', message => {
     if (message.content === "*help") {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('═══════════ஜ۩۞۩ஜ════════════','￵ ')
.addField('يرجى استخدام الأوامر التالية :','￵ ')
.addField('*help-public','￵ ')
.addField('🌎لمعرفة كافة أوامر العامة🌎','￵ ')
.addField('*help-admin','￵ ')
.addField('👑لمعرفة أوامر الأدارية👑','￵ ')
.addField('*help-games','￵ ')
.addField('🎮لمعرفة أوامر الالعاب🎮','￵ ')
.addField('═══════════ஜ۩۞۩ஜ════════════','King | Bot')
.setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
}); 
   




client.login(process.env.BOT_TOKEN);
