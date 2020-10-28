const fs=require('fs');
const Discord=require("discord.js");
const client=new Discord.Client();
const db = require('quick.db')
const moment = require("moment");
const ayarlar=require("./ayarlar.json");
const express = require('express');
/////
const app = express()
app.get('/', (req, res) => res.send("Bot Aktif"))
app.listen(process.env.PORT, () => console.log('Port ayarlandı: ' + process.env.PORT))
//////////////////



client.on("message", message => {
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.yetkiler(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
})


client.on("ready", () => {
  console.log(`Bütün komutlar başarıyla yüklendi!`);
  client.user.setStatus("dnd");
  client.user.setActivity('-yardım | -davet');
})


const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
  log(`${files.length} adet komut yüklemeye hazırlanılıyor.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut ismi: ${props.help.name.toUpperCase()}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});


client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

  
client.yetkiler = message => {
  if(!message.guild) {
	return; }
  let permlvl = -ayarlar.varsayilanperm  ;
  if(message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if(message.member.hasPermission("KICK_MEMBERS")) permlvl = 2;
  if(message.member.hasPermission("BAN_MEMBERS")) permlvl = 3;
  if(message.member.hasPermission("MANAGE_GUILD")) permlvl = 4;
  if(message.member.hasPermission("ADMINISTRATOR")) permlvl = 5;
  if(message.author.id === message.guild.ownerID) permlvl = 6;
  if(message.author.id === ayarlar.sahip) permlvl = 7;
  return permlvl;
};



client.on("message", async msg => {
    if(msg.author.bot) return;
    
    let i = await db.fetch(`reklamFiltre_${msg.guild.id}`)  
          if (i == 'acik') {
              const reklam = ["https://","http://","discord.gg"];
              if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
                try {
                  if (!msg.member.hasPermission("MANAGE_GUILD")) {
                    msg.delete();                                       
                    return msg.channel.send(`${msg.author.tag}, Reklam Yapmak Yasak!`).then(msg => msg.delete(10000));
                  }              
                } catch(err) {
                  console.log(err);
                }
              }
          }
          if (!i) return;
          });    


client.on("messageUpdate", msg => {
 
 
 const i = db.fetch(`${msg.guild.id}.kufur`)
    if (i) {
        const kufur = ["oç", 
                       "amk", 
                       "ananı sik iyim",
                       "piç",
                       "orospu çocuğu",
                       "orospu",
                       "oruspu"];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                         
                      return msg.reply('Bu Sunucuda Küfür Filtresi Aktiftir.').then(msg => msg.delete(3000));
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});
 


client.on("message", async msg => {
 
 
  const i = await db.fetch(`ssaass_${msg.guild.id}`);
    if (i == 'acik') {
      if (msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 's.a' || msg.content.toLowerCase() == 'selamun aleyküm' || msg.content.toLowerCase() == 'sea'|| msg.content.toLowerCase() == 'selam') {
          try {
 
                  return msg.reply(
                    'Aleyküm Selam, Hoşgeldin')
          } catch(err) {
            console.log(err);
          }
      }
    }
    else if (i == 'kapali') {
   
    }
    if (!i) return;
 
    });

client.login(ayarlar.token)

   client.on("ready", () => {
  client.channels.cache.get("770217169865670696").join();//sesli bi kanala katılacagı icin kanal ID si
}) 

//----------------------------------Public Sunucu Sistemi----------------------------// 
client.on('message', async message => {
  const ms = require('ms');
  const prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "-public-kur") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send(" Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
    message.channel.send(`Public Sunucunun Kurulmasından Eminseniz **Kur** Yazmanız Yeterli Olacaktır.`)
      message.channel.awaitMessages(response => response.content === 'Kur', {
        max: 1,
        time: 10000,
        errors: ['time'],
     })
    .then((collected) => {

message.guild.createChannel('【BILGILENDIRME】', 'category', [{
  id: message.guild.id,
}]);

message.guild.createChannel(`📋・kurallar`, 'text')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【BILGILENDIRME】")))
        
        message.guild.createChannel(`📢・duyurular`, 'text')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【BILGILENDIRME】")))
        
        message.guild.createChannel(`🎁・boost-bilgi`, 'text')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【BILGILENDIRME】")))
        
        message.guild.createChannel(`🎉・cekilis`, 'text')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【BILGILENDIRME】")))
        
        message.guild.createChannel(`📕・bilgilendirme`, 'text')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【BILGILENDIRME】")))
        
                message.guild.createChannel(`📤・gelen-giden`, 'text')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【BILGILENDIRME】")))
        
                        message.guild.createChannel(`📝・yetkili-basvuru`, 'text')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【BILGILENDIRME】")))
        
        message.guild.createChannel('【CEZA BİLGİ】', 'category', [{
  id: message.guild.id,
}]);
        
                                message.guild.createChannel(`📝・neden-ceza-alırım`, 'text')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【CEZA BİLGİ】")))
        
                                        message.guild.createChannel(`📝・mute-bilgi`, 'text')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【CEZA BİLGİ】")))
        
                                               message.guild.createChannel(`📝・ban-bilgi`, 'text')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【CEZA BİLGİ】")))
        
                message.guild.createChannel('【GENEL】', 'category', [{
  id: message.guild.id,
}]);
        
        message.guild.createChannel(`💬・sohbet`, 'text')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【GENEL】")))
        
                message.guild.createChannel(`🤖・bot-komut`, 'text')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【GENEL】")))
        
        message.guild.createChannel(`📷・foto-chat`, 'text')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【GENEL】")))
        
                        message.guild.createChannel('【OTHER TEXT】', 'category', [{
  id: message.guild.id,
}]);
        
                message.guild.createChannel(`🐟・burc-hakkinda`, 'text')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【OTHER TEXT】")))
        
        message.guild.createChannel(`🐟・haftalik-burc-yorumlari`, 'text')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【OTHER TEXT】")))
        
        message.guild.createChannel(`🎲・gune-soz-birak`, 'text')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【OTHER TEXT】")))
        
        message.guild.createChannel(`📚・oneri-istek-sikayet`, 'text')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【OTHER TEXT】")))
        
        message.guild.createChannel(`⭐️・sorun-cozme-chat`, 'text')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【OTHER TEXT】")))
        
        message.guild.createChannel('【SESLİ SOHBET】', 'category', [{
  id: message.guild.id,
}]);
        
      message.guild.createChannel(`🔊・Genel Sohbet `, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【SESLİ SOHBET】")))
        
        message.guild.createChannel(`🔊・Genel Sohbet `, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【SESLİ SOHBET】")))
        
        message.guild.createChannel(`🔊・2 Kişilik Sohbet `, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【SESLİ SOHBET】")))
        
        message.guild.createChannel(`🔊・2 Kişilik Sohbet `, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【SESLİ SOHBET】")))
        
        message.guild.createChannel(`🔊・3 Kişilik Sohbet `, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【SESLİ SOHBET】")))
        
        message.guild.createChannel(`🔊・3 Kişilik Sohbet `, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【SESLİ SOHBET】")))
        
        message.guild.createChannel(`🔊・4 Kişilik Sohbet `, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【SESLİ SOHBET】")))
        
        message.guild.createChannel(`🔊・5 Kişilik Sohbet `, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【SESLİ SOHBET】")))
        
                message.guild.createChannel('【MUZIK KANALLARI】', 'category', [{
  id: message.guild.id,
}]);
        
        message.guild.createChannel(`🎶・Müzik Odası `, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【MUZIK KANALLARI】")))
        
                message.guild.createChannel(`🎶・Müzik Odası `, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【MUZIK KANALLARI】")))
        
                        message.guild.createChannel('【VALORANT】', 'category', [{
  id: message.guild.id,
}]);
        
                        message.guild.createChannel(`🎮・Valorant`, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【VALORANT】")))
        
        message.guild.createChannel(`🎮・Valorant`, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【VALORANT】")))
        
                                message.guild.createChannel('【CS:GO】', 'category', [{
  id: message.guild.id,
}]);
        
                message.guild.createChannel(`🎮・CS:GO REKABETCİ`, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【CS:GO】")))
        
        message.guild.createChannel(`🎮・CS:GO REKABETCİ`, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【CS:GO】")))
        
        message.guild.createChannel(`🎮・CS:GO YOLDAŞ`, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【CS:GO】")))
        
        message.guild.createChannel('【LOL】', 'category', [{
  id: message.guild.id,
}]);
        
      message.guild.createChannel(`🎮・LOL ODASI`, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【LOL】")))
        
        message.guild.createChannel(`🎮・LOL ODASI`, 'voice')
.then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "【LOL】")))
        
        
        
        

       message.channel.send("Public Sunucunuz Kuruldu !")
     
            })   
      
}
});
//----------------------------------Public Sunucu Kurma Sistemi Son----------------------------// 