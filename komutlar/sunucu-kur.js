const Discord = require('discord.js');
module.exports.run = async (bot, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed()
                                                                                      .setDescription('Bu komuTu kullanmak için **Yönetici** yetkisine sahip olmalısın.')
                                                                                      .setColor(10038562));
     message.guild.owner.send('Sunucu Kurulumu Başladı')
       message.guild.channels.cache.forEach(function(kan) {
      message.guild.roles.cache.forEach(function(rol) {
                 kan.delete()
                 rol.delete()
       })}) 
     
    
    message.guild.roles.create({
        name: `👑 | Kurucu`,
        color: "#46FE95", 
        hoist: true,
        permissions: [
            "ADMINISTRATOR",
    ]
    }).then(kurucurol => {
    message.guild.roles.create({
        name: `🚨 | Admin`,
        color: "RED",
        hoist: true,
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
        }).then(adminrol => {
    message.guild.roles.create({
        name: `🛡️ | Moderatör`,
        color: "#f1c40f" ,
        hoist: true,
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
        }).then(modrol => {
    message.guild.roles.create({
        name: `📔 | Destek Ekibi`,
        color: '#f1c40f',
        hoist: true
        }).then(destekrol => {
    message.guild.roles.create({
        name: `❤️ | Özel Kişi`,
        color: "#ee77ff" ,
        hoist: true
        }).then(özelrol => {
    message.guild.roles.create({
        hoist: true,
        name: `😊 | Partner`,
        color: "GREEN" 
        }).then(partnerrol => {
    message.guild.roles.create({
        hoist: true,
        name: `🤖 | Botlar`,
        color: "#413FEE" 
        }).then(botrol => {
    message.guild.roles.create({
        hoist: true,
        name: `👥 | Üye`,
        color: "#00fff5" 
        }).then(üyerol => {
      
      
    })})})})})})})})
  //  message.guild.members.get(message.guild.owner).addRole(message.guild.roles.find("name", "👑 | Kurucu"))
    
     message.guild.channels.create(`Önemli Kanallar`, "Category").then(duyurukategorisi => {
     message.guild.channels.create(`Yazı Kanalları`, "Category").then(sohbetkategori => {
     message.guild.channels.create(`Ses Kanalları`, "Category").then(SesKategori => {
     message.guild.channels.create(`[A]way [F]rom [K]eyboard`, "Category").then(AFKkategori => {  
     message.guild.channels.create(`Eğlence `, "Category").then(OyunKategori => {
     message.guild.channels.create(`Yetkili`, "Category").then(YetkiliKategori => {  
        
     message.guild.channels.create(`Kurallar`, "text").then(kuralkanal => {
     message.guild.channels.create(`Duyurular`, "text").then(duyurukanal => {
     message.guild.channels.create(`Partnerler`, "text").then(partnerkanal => {
     message.guild.channels.create(`PartnerŞart`, "text").then(partnersartkanal => {
     message.guild.channels.create(`Sohbet`, "text").then(sohbetkanal => {
     message.guild.channels.create(`Bot-Komut`, "text").then(botkomutkanal => {
     message.guild.channels.create(`Müzik 1`, "voice").then(müzik1kanal => { 
     message.guild.channels.create(`Müzik 2`, "voice").then(müzik2kanal => {
     message.guild.channels.create(`Sesli Sohbet 1`, "voice").then(ses1kanal => {
     message.guild.channels.create(`Sesli Sohbet 2`, "voice").then(ses2kanal => {
     message.guild.channels.create(`Sesli Sohbet 3`, "voice").then(ses3kanal => {
     message.guild.channels.create(`Sesli Oyun Odası`, "voice").then(oyunseskanal => { 
     message.guild.channels.create(`Kelime-Türetmece`, "text").then(kelimetüretme => { 
     message.guild.channels.create(`Sayı-Sayma`, "text").then(sayısayma => { 
     message.guild.channels.create(`kayıtlar`, "text").then(kayıtlar => {
     message.guild.channels.create(`giriş-çıkış`, "text").then(girişçıkış => { 
     message.guild.channels.create(`medya`, "text").then(medyakanal => {
     message.guild.channels.create(`destek`, "text").then(destekkanal => { 
     message.guild.channels.create(`sayaç`, "text").then(sayaçkanal => { 
     message.guild.channels.create(`AFK`, "voice").then(afkkanal => { 
      
      let role4 = message.guild.roles.find("name", "🛡️ | Moderatör");
      let role3 = message.guild.roles.find("name", "🚨 | Admin");
      let role1 = message.guild.roles.find("name", "👑 | Kurucu");
      let role2 = message.guild.roles.find("name", "@everyone");
      YetkiliKategori.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      YetkiliKategori.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      YetkiliKategori.overwritePermissions(role3, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      YetkiliKategori.overwritePermissions(role4, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
      kayıtlar.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      kayıtlar.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      kayıtlar.overwritePermissions(role3, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      kayıtlar.overwritePermissions(role4, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
      
      sayaçkanal.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      sayaçkanal.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      sayaçkanal.overwritePermissions(role3, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      sayaçkanal.overwritePermissions(role4, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
      
      girişçıkış.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: false
      });
      girişçıkış.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      girişçıkış.overwritePermissions(role3, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      girişçıkış.overwritePermissions(role4, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      
//////////////////////////////////////////////////////////////////////////////      
      
      duyurukategorisi.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      duyurukategorisi.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      duyurukategorisi.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
      duyurukanal.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      duyurukanal.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      duyurukanal.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
    
      //////////////////////////////////////////////////////////////////////////////      
      
      partnerkanal.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      partnerkanal.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      partnerkanal.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
          
      kuralkanal.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      kuralkanal.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      kuralkanal.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////      
      
      partnersartkanal.overwritePermissions(role2, {
          SEND_MESSAGES: false,
          READ_MESSAGES: true
      });
      partnersartkanal.overwritePermissions(role1, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      partnersartkanal.overwritePermissions(role3, {
          SEND_MESSAGES: true,
          READ_MESSAGES: true
      });
      
      //////////////////////////////////////////////////////////////////////////////
    
      kuralkanal.setParent(duyurukategorisi)
      duyurukanal.setParent(duyurukategorisi)
      partnerkanal.setParent(duyurukategorisi)
      partnersartkanal.setParent(duyurukategorisi)
      sohbetkanal.setParent(sohbetkategori)
      botkomutkanal.setParent(sohbetkategori)
      müzik1kanal.setParent(SesKategori)
      müzik2kanal.setParent(SesKategori)
      ses1kanal.setParent(SesKategori)
      ses2kanal.setParent(SesKategori)
      ses3kanal.setParent(SesKategori)
      oyunseskanal.setParent(OyunKategori)
      kelimetüretme.setParent(OyunKategori)
      sayısayma.setParent(OyunKategori)
      kayıtlar.setParent(YetkiliKategori)
      girişçıkış.setParent(YetkiliKategori)
      medyakanal.setParent(sohbetkategori)
      destekkanal.setParent(sohbetkategori)
      sayaçkanal.setParent(YetkiliKategori)
      afkkanal.setParent(AFKkategori)
       
      kuralkanal.send(`:tools: <@${message.guild.owner.id}> bu kanala sunucunuzun kurallarını yazınız!`)
      partnersartkanal.send(`:tools: <@${message.guild.owner.id}> bu kanala sunucunuzun partnerlik şartlarını yazınız!`)
      sayısayma.send(`Bu Kanalda 1 Sayısından İtibaren Gidebildiğimiz kadar sayarak uzaklara gideceğiz\n**Örneğin**\n1\n2\n3\n4\n**Kurallar!**\nHerkes alt alta sadece 1 sayı yazabilir\nİlk sayıyı söylüyorum; 1`)
      kelimetüretme.send(`Bu kanalda ünlü bir oyun olan kelime türetmeceyi oynayacaksınız.\n**Örneğin;**\nKelime\nEmek\nKutu\nUsta\n**Kurallar**\nHerkes alt alta sadece *1* kelime yazmalıdır.\nİlk kelimeyi söylüyorum; Pasta`)
       
      message.guild.owner.send(":white_check_mark: Sunucu rolleri ve kanalları ayarlandı.\nEğer donma vb. olaylar yaşıyorsanız Discord'a tekrar girmeniz tavsiye edilir.")
      
      
      
      
      
      
    })})})})})})})})})})})})})})})})})})})})
    })})})})})})
  } 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sunucukur'],
  permLevel: 3
};
 
exports.help = {
  name: 'sunucukur',
  description: 'Bulunulan sunucu için gerekli kanalları oluşturur.',
  usage: 'sunucukur'
};