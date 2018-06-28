const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '*'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`*help`,"http://twitch.tv/S-F")
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
.addField('═══════════ஜ۩۞۩ஜ════════════','￵ ')
.setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
}); 
   

   client.on("message", message => {
 if (message.content === "*help-public") {
        message.react("📫")
                message.react("✔️")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

💎『اوامر عامة』💎
                        
💎 *server 『معلومات عن السيرفر』                      

💎 *bot 『لمعرف البوت بكم سيرفر』

💎 *ping 『لمعرفه سرعه البوت』

💎 *members 『معلومات عن الاعضاء』

💎 *id 『لمعرفة معلومات حسابك』

💎 *avatar 『لاعطائك صورة الشخص اللي منشنته مع الرابط』

💎 *say 『البوت يقول كلامك』

💎 *link 『يعطيك رابط انفايت للسيرفر اللي انت فيه』

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
	  

💎『الدعم الفني والمساعدة』💎

*invite | القسم الاول لي اضافه البوت 

@dead#6262 | القسم الثاني لمصمم البوت

`)


message.author.sendEmbed(embed)

}
});
   
   
   
   
   
       client.on('message', message => {
    if(message.content == '*members') {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Members info🔋
:green_heart: online:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
:heart:dnd:       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
:yellow_heart: idle:      ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
:black_heart: offline:   ${message.guild.members.filter(m=>m.presence.status == 'offline').size}
:blue_heart:   all:  ${message.guild.memberCount}**`)
         message.channel.send({embed});

    }
  });

   
   
   




			 
   
   
   
   
   client.on("message", message => {
  if (message.content === "*avatar") {
   const embed = new Discord.RichEmbed()
       .setColor('RANDOM')
       .setFooter('By Dead')
       .setThumbnail(message.author.avatarURL)
       .addField(message.author.displayAvatarURL)
 message.channel.send(embed);
}
});




client.on('message', message => {
   if (message.content.startsWith("+id")) {
                if(!message.channel.guild) return message.reply('**هذا الامر فقط في السيرفرات وشكرا**');

               var mentionned = message.mentions.users.first();
    var mentionavatar;
      if(mentionned){
          var mentionavatar = mentionned;
      } else {
          var mentionavatar = message.author;
          
      }
   let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
   .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("الاسم:",`<@` + `${mentionavatar.id}` + `>`, true)
  .addField('التاق:',"#" +  `${mentionavatar.discriminator}`, true)
   .addField("الايدي:", "**[" + `${mentionavatar.id}` + "]**", true)
  .addField("تم الانشاء في:", "**[" + `${mentionavatar.createdAt}` + "]**", true)
     
     
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

   
   
   
client.on('message', message => {

     if (message.author.bot) return;
    if (!message.channel.guild) return;
 
    

if(message.content.startsWith(prefix + 'bot')) {
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setDescription(`السيرفرات🌐 ${client.guilds.size}
المستخدمين👥 ${client.users.size}
الرومات📚 ${client.channels.size} `)
        message.channel.sendEmbed(embed);
    }
 
});







client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Showing Details Of  **${msg.guild.name}*`)
      .addField(':globe_with_meridians:** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
      .addField(':medal:** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField(':red_circle:**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField(':large_blue_circle:**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
      .addField(':pencil:**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField(':microphone:**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
      .addField(':crown:**__ الأونـر__**',`**${msg.guild.owner}**`,true)
      .addField(':id:**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
      .addField(':date:**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
      msg.channel.send({embed:embed});
    }
  });
  
  
  
  
  
  
  
   client.on('message' , message => {

    if (message.content === "*invite") {
        if(!message.channel.guild) return message.reply('**الآمر فقط في السيرفرات**');
     const embed = new Discord.RichEmbed()
 .setColor("RANDOM")
 .setThumbnail(client.user.avatarURL)
 .setDescription("ضيفني لو سمحت" + `
 **
رابط البوت | https://discordapp.com/api/oauth2/authorize?client_id=456934284566069248&permissions=8&scope=bot
 **
`);
  message.author.sendEmbed(embed);
   }
});
  
  
  
  
  
  
  
  
  client.on("message", message => {
      if (message.content === "*ping") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('**Ping:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});
  
  
  
  
client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', 'welcome');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField(':running_shirt_with_sash: | name :  ',`${member}`)
        .addField(':loudspeaker: | اطلق من دخل' , `Welcome to the server, ${member}`)
        .addField(':id: | user :', "**[" + `${member.id}` + "]**" )
                .addField('➡| انت العضو رقم',`${member.guild.memberCount}`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });
    
    client.on('guildMemberRemove', member => {
        var embed = new Discord.RichEmbed()
        .setAuthor(member.user.username, member.user.avatarURL)
        .setThumbnail(member.user.avatarURL)
        .setTitle(`بس بعرف وين رحت؟؟؟ :raised_hand::skin-tone-1: :pensive:`)
        .setDescription(`مع السلامه تشرفنا بك :raised_hand::skin-tone-1: :pensive: `)
        .addField(':bust_in_silhouette:   تبقي',`**[ ${member.guild.memberCount} ]**`,true)
        .setColor('RED')
        .setFooter(`====ولكم منور السيرفر اتمنا لك الاستمتاع====`, 'https://cdn.discordapp.com/attachments/397818254439219217/399292026782351381/shy.png')
    
    var channel =member.guild.channels.find('name', 'welcome')
    if (!channel) return;
    channel.send({embed : embed});
    })
   
   



   
   
   client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
  
    let args = message.content.split(" ").slice(1);
  
    if (command == "*say") {
     message.channel.sendMessage(args.join("  "))
     message.delete()
    }
   });

   
   
   client.on('message', message => {

    if (message.content.startsWith("*link")) {        
  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setDescription(" :white_check_mark: تم ارسال الرابط على الخاص ")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
                .setAuthor(message.guild.name, message.guild.iconURL)
        .setDescription(`
---------------------
 :kissing_closed_eyes:  - هذا الرابط صالح ل 100 مستخدم فقط
---------------------
 :smiley: - هذا الرابط صالح لمده 24 ساعه فقط
---------------------`)
      message.author.sendEmbed(Embed11)
    }
 
});
   
   
   
   
   
   
   client.on("message", message => {
 if (message.content === "*help-admin") {
        message.react("📫")
                message.react("✔️")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
	  
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
👑『اوامر ادارية』👑

👑 *ban 『لتعطي شخص باند』

👑 *kick 『لتعطي شخص كيك』

👑 *clear 『لمسح الشات برقم』

👑 *mute  『لاعطاء شخص ما ميوت』 
 
👑 *unmute  『لنزع الميوت من الشخص』 

👑 *ct  『لانشاء روم كتابي مع اختيار الاسم』

👑 *cv  『لانشاء روم صوتي مع اختيار الاسم』 

👑 *delet  『كـود يحذف الـروم سواء صوتي او كتابي』

👑 *bc  『للبرودكاست』 

👑 *color  『لانشاء رتب الوان مع اختيار رقم الرتب اللي تبيه』

👑 *move all  『سحب جميع الأعضاء لرومك الصوتي』

👑 *rules  『لعرض قوانين السيرفر بامبيد』 

● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

	  

💎『الدعم الفني والمساعدة』💎

*invite | القسم الاول لي اضافه البوت 

@dead#6262 | القسم الثاني لمصمم البوت

للترحيب و المغادرة خلي اسم الروم welcome




`)


message.author.sendEmbed(embed)

}
}); 



   
client.on('message', message => {
   if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'clear')) {
if(!message.channel.guild) return message.channel.send('**هذا الامر فقط في السيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(2 + prefix.length);
let request = `Requested By ${message.author.username}`;
message.channel.send(`**هل انت متاكد من مسح الشات ؟**`).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;

let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`سيتم مسح الشات`).then(m => m.delete(5000));
var msg;
        msg = parseInt();

      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "`` تم مسح الشات ``",
        color: 0x06DF00,
        footer: {

        }
      }}).then(msg => {msg.delete(3000)});

})
reaction2.on("collect", r => {
message.channel.send(`**تم الغاء مسح الشات**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});
   
   
   client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.gg')){
		if(!message.channel.guild) return;
        message.delete()
    return message.reply(`** No Invite Links للاسف ما تقدر تنشر :) ههههههههههايي 😠 ! **`)
    }
});


   client.on('message', message => {
    var args = message.content.split(/[ ]+/)
    if(message.content.includes('discord.me')){
		if(!message.channel.guild) return;
        message.delete()
    return message.reply(`** No Invite Links للاسف ما تقدر تنشر :) ههههههههههايي 😠 ! **`)
    }
});



client.on('message', message => {
  if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('*bc')){
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('Broadcast')
.addField('Server', message.guild.name)
.addField('Sender', message.author.username)
.addField('Message', args)
m.send({ embed: bc })
})
}
});

	
	
	client.on("message", (message) => {
if (message.content.startsWith("*ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('تـم إنـشاء روم كـتابـي')

}
});
	
	
	
		client.on("message", (message) => {
if (message.content.startsWith("*cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('تـم إنـشاء روم صـوتي')

}
});
	
	
	
	
	
	client.on("message", (message) => {
    if (message.content.startsWith('*delet')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});
	
	

	
	
	
client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**You Don't Have ` KICK_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**I Don't Have ` KICK_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : kickembed
  })
}
});
	
	
	
	
	
	client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');

  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  let b5bzlog = client.channels.find("name", "mod-log");

  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});
	
	
	
	
	

	
	
	
	client.on("message", message => {
  if (message.author.bot) return;

  let command = message.content.split(" ")[0];

  if (command === "*unmute") {
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("** لا يوجد لديك برمشن 'Manage Roles' **").catch(console.error);
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'mod-log');
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
  if (!muteRole) return message.reply("** لا يوجد لديك رتبه الميوت'Muted' **").catch(console.error);
  if (message.mentions.users.size < 1) return message.reply('** يجب عليك منشنت شخص اولاً**').catch(console.error);
  const embed = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('الأستعمال:', 'اسكت/احكي')
    .addField('تم فك الميوت عن:', `${user.username}!${user.discriminator} (${user.id})`)
    .addField('بواسطة:', `${message.author.username}!${message.author.discriminator}`)

  if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** لا يوجد لدي برمشن Manage Roles **').catch(console.error);

  if (message.guild.member(user).removeRole(muteRole.id)) {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
} else {
    message.guild.member(user).removeRole(muteRole).then(() => {
return message.reply("**:white_check_mark: .. تم فك الميوت عن الشخص **").catch(console.error);
});
  }

};

});

	

        client.on('message', message => {
                        let args = message.content.split(" ").slice(1).join(" ")
if(message.content.startsWith(prefix + 'color')) {
    if(!args) return message.channel.send('`يرجي اختيار كم لون `');
             if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
             message.channel.send("**✅ | تم عمل الالوان**");
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            message.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });
	
	
	
	
	client.on('message', message => {
if(message.content.startsWith(prefix + 'move all')) {
 if (!message.member.hasPermission("MOVE_MEMBERS")) return message.channel.send('**لايوجد لديك صلاحية سحب الأعضاء**');
   if(!message.guild.member(client.user).hasPermission("MOVE_MEMBERS")) return message.reply("**لايوجد لدي صلاحية السحب**");
if (message.member.voiceChannel == null) return message.channel.send(`**الرجاء الدخول لروم صوتي**`)
 var author = message.member.voiceChannelID;
 var m = message.guild.members.filter(m=>m.voiceChannel)
 message.guild.members.filter(m=>m.voiceChannel).forEach(m => {
 m.setVoiceChannel(author)
 })
 message.channel.send(`**تم سحب جميع الأعضاء إليك**`)


 }
   });
	
	
	client.on('message', message => {
            if (message.content.startsWith("*rules")) {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **اولا** ' ,' **ممنوع السب** ')
.addField('     **ثانيا** ' ,' **لا تسوي سبام ** ')
.addField('     **ثالثا** ' ,' **لا تزعج الاخرين** ')
.addField('    **رابعا**' ,' **ممنوع الاعلانات** ')
.addField('    **خامسا**' ,' **احترم الاخرين** ')
.addField('    **سادسا**' ,' **لا تنشر في الشات او بل خاص** ')
.addField('    **سابعا**' ,' **لا تنشر روابط!** ')
.addField('    **ثامنا**' ,' **لا تسوي سبام ايموجي** ')
.addField('    **تاسعا**' ,' **لا تطلب رتبه الاداره !** ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});
	
	
	
	
	
	   client.on("message", message => {
 if (message.content === "*help-games") {
        message.react("📫")
                message.react("✔️")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
 
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
💎『اوامر الالعاب』💎

💎 *خواطر                      
                     
💎 *rps  『لعبة حجر ورقة مقص』                  

💎 *اسئلني                    

💎 *لو خيروك
                     
● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
	  

💎『الدعم الفني والمساعدة』💎

*invite | القسم الاول لي اضافه البوت 

@dead#6262 | القسم الثاني لمصمم البوت

`)


message.author.sendEmbed(embed)



}
});
	
	
client.on('message' , async (message) => {
       if(message.content.startsWith(prefix + "rps")) {
              let args = message.content.split(" ").slice(1);
  var choice = args[0];
  if (choice == "ورقة" || choice == "p") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "ورقة";
    } else if (numb > 50) {
      var choice2 = "حجر";
    } else {
      var choice2 = "مقص";
    }
    if (choice2 == "مقص") {
      var response = " لقد اخترت **مقص** و :v: ولقد فزت"
    } else if (choice2 == "ورقة") {
      var response = " لقد اخترت **ورقه** :hand_splayed: انه تعادل "
    } else {
      var response = " لقد اخترت **حجر** :punch:  انت الفائز"    
    }
    message.channel.send(response);
  } else if (choice == "حجر" || choice == "r") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "ورقة";
    } else if (numb > 50) {
      var choice2 = "حجر";
    } else {
      var choice2 = "مقص";
    }
    if (choice2 == "ورقة") {
      var response = " لقد اخترت **ورقه** :hand_splayed: ولقد فزت"
    } else if (choice2 == "حجر") {
      var response = "لقد اخترت **حجر** :punch: انه تعادل "
    } else {
      var response = " لقد اخترت **مقص** :v: انت الفائز"
    }
    message.channel.send(response);
  } else if (choice == "مقص" || choice == "s") {
    var numb = Math.floor(Math.random() * 100);
    if (numb <= 50) {
      var choice2 = "ورقة";
    } else if (numb > 50) {
      var choice2 = "حجر";
    } else {
      var choice2 = "مقص";
    }
    if (choice2 == "حجر") {
      var response = "لقد اخترت **ورقه** :hand_splayed: لقد فزت"
    } else if (choice2 == "مقص") {
      var response = "لقد اخترت **مقص** :v: انه تعادل"
    } else {
      var response = " لقد اخترت **حجر** :punch: انت الفائز "
    }
    message.channel.send(response);
  } else {
    message.channel.send(`يجب عليك استعمال \`${prefix}rps\` <حجر|ورقة|مقص>`);
  }
}

});
	
	
	var Himo_04 = ["https://f.top4top.net/p_682it2tg6.png","https://e.top4top.net/p_682a1cus5.png","https://d.top4top.net/p_682pycol4.png","https://c.top4top.net/p_682vqehy3.png","https://b.top4top.net/p_682mlf9d2.png","https://a.top4top.net/p_6827dule1.png","https://b.top4top.net/p_682g1meb10.png","https://a.top4top.net/p_682jgp4v9.png","https://f.top4top.net/p_682d4joq8.png","https://e.top4top.net/p_6828o0e47.png","https://d.top4top.net/p_6824x7sy6.png","https://c.top4top.net/p_682gzo2l5.png","https://b.top4top.net/p_68295qg04.png","https://a.top4top.net/p_682zrz6h3.png","https://f.top4top.net/p_6828vkzc2.png","https://e.top4top.net/p_682i8tb11.png","https://f.top4top.net/p_8816hvic1.png","https://d.top4top.net/p_882020461.png","https://e.top4top.net/p_882s3ftn1.png","https://a.top4top.net/p_882eg9c51.png","https://c.top4top.net/p_882xkcqd1.png","https://f.top4top.net/p_882w7pdi1.png","https://a.top4top.net/p_882gcpmo1.png"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'لو خيروك')) {
         var cat = new Discord.RichEmbed()
.setImage(Himo_04[Math.floor(Math.random() * Himo_04.length)])
message.channel.sendEmbed(cat);
    }
});




const secreT = [
  "**الحياة بكل ما فيها تقف دائمًا على حد الوسطية بين اتزان المعنى وضده من حب وكره وحق وباطل وعدل وظلم**.",
  "**كى تعيش عليك ان تتقن فن التجاهل باحتراف**.",
  "**لا تحزن على من اشعرك بان طيبتك غباء امام وقاحته**.",
  "**هناك من يحلم بالنجاح وهناك من يستيقظ باكرا لتحقيقه**.",
  "**ان تعالج ألمك بنفسك تلك هى القوة**.", 
  "**الجميع يسمع ما تقول والاصدقاء ينصتون لما تقول وافضل الاصدقاء ينصتون لما اخفاه سكوتك**.", 
  "**انتهى زمن الفروسية ، لم تنقرض الخيول بل انقرض الفرسان**.", 
  "**ان تكون اخرسا عاقلا خير من ان تكون نطوقا جهولا**.", 
  "**المناقشات العقيمة لا تنجب افكارا**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
  "**نحن نكتب ما لا نستطيع ان نقول وما نريد ان يكون**.", 
]


 client.on('message', message => {
   if (message.content.startsWith("*خواطر")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL) 
 .addField('لعبه خواطر' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});




client.on('message', message => {
    if (message.content == "*اسئلني") {
         message.react('🤔','👌')
        var x = ['اين يلعب مصطفي فتحي؟', 'ما هو اسم ملعب بارشالونة', 'ما هو يوم الحج الأكبر؟', 'ما هو أطول أنهار أوربا ؟', 'ما هو اسم بيت الدجاج', 'ما هو أول بنك قام بالنشاط المصرفي في السعودية عام 1926م' , 'ما هو أول جامع أقيم في مصر','ما هو أطول نهر في آسيا','ما هو أقرب كوكب إلى الشمس','ما هو الحيوان الذي يُسمى البهنس','ما هو اول مسجد أسس بالمدينة','متى وقع صلح الحديبية عام 6هـ او 3هـ او 2هـ؟','متى قامت أمريكا بأول رحلة فضائية','متى كانت غزوة خيبر؟','ما هي السورة التي تبدأ بقوله تعالى " يا أيها النبي اتق الله ولا تطع الكافرين والمنافقين إن الله كان عليما حكيما ".اجب؟','ما هي السورة التي يطلق عليها عروس القرآن','ماذا يسمى من لايقرأ ولايكتب','ماهي أول دولة استخدمت طابع البريد','ماهو شعار الولايات المتحدة الامريكية','ماهو اذكي الحيوانات','من هو مكتشف أمريكا','مامعنى "فرعون" اجب؟','ماهو اقرب كوكب إلى الارض','ما هي نسبه المياه من الكره الارضيه?','كم عدد السجدات في القرآن الكريم؟','من هو بطل كاس العالم في عام 1966','أين أفتتح اول متحف في العالم?','ماأسم أنثى الحمار?','كم تبلغ درجه حراره الشمس؟','من هي مدينة الضباب','أين توجد أطول سكة حديد في العالم?'
        ];
        var x2 = ['التعاون', 'كامب نو', 'يوم النحر', 'الدانوب', 'قن', 'البنك الهولندي', 'جامع عمرو بن العاص','اليانجستي','عطارد','الاسد','مسجد قباء','6','سنة 1962','عام 7هـ','الاحزاب','سورة الرحمن','امي','بريطانيا','النسر الاصلع','الدلفين','كولمبس','البيت الكبير','الزهره','71%','15 سجدة','انكلترا ','القاهرة','الاتان','15 مليون درجه مئوية','لندن','كندا'
        ];
        var x3 = Math.floor(Math.random()*x.length)
        message.channel.send(`📢 امامك دقيقة لحل الاسئلة , السؤال يقول :  __**${x[x3]}**__ `).then(msg1=> {
            var r = message.channel.awaitMessages(msg => msg.content == x2[x3], {
               thing: true,
               maxMatches : 1,
                time : 60000,
                 maxUses: 1,
                errors : ['time']
            })
        r.catch(() => {
            return message.channel.send(`:negative_squared_cross_mark: لقد انتهى الوقت ولم يقم أحد بالأجابة بشكل صحيح `)
        })

        r.then((collected)=> {
            message.channel.send(`${collected.first().author} لقد قمت بكتابة الجواب الصحيح  `);
            message.react('✅')
        })
        })
    }
})





client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'السلام عليكم') {
              message.channel.send(' وِ عَ ـلَيّكمِ آلَسًسًـلَآمِ وِ رحً ـمِة آلَلَهِ تُعَ ـآلَى وِ بّـركآتُهِ:heart: ');
               

            }
}); 


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'هلا') {
              message.channel.send(' هِلَآ بّـيّك:heart: ');
               

            }
}); 


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'برب') {
              message.channel.send(' تُيّتُ لَآ تُطٌوِلَ عَ ـلَيّنٌآ:heart: ');
               

            }
}); 



client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
         client.on('message', message => {
            if (message.content === 'باك') {
              message.channel.send(' وِلَكمِ بّـآك مِنٌوِر يّآ عَ ـسًسًـلَ:heart: ');
               

            }
}); 




client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`ولكم نورت السيرفر `) 
}).catch(console.error)

});

	



client.login(process.env.BOT_TOKEN);
