const Discord = require ("discord.js");

exports.run = (client, message) => {
const embed = new Discord.RichEmbed()
.setColor("RANDOM")
.setTitle("🤖 İnvite Manager")
.addField("🤖 -invites","Kullanıcının Kaç Davet Bulunduğunu Gösterir",)
.addField("🤖 -davet-kanal #kanal ","İnvite Sisteminde Kanalı Ayarlar",)
.addField("🤖 -davet-ekle @kişi (sayı) ","Kişiye Davet Ekler",)
.addField("🤖 -davet-sil @kişi (sayı) " ,"Kişiden Davet Siler",)
.addField("🤖 -davet-sıfırla @kişi ","Kişinin Davetlerini Sıfıra İndirir. ",)
.addField("🤖 -davet-kanal-sıfırla","Davet Kanal Sıfırlar.", )


message.channel.sendEmbed(embed)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
  };
  
  exports.help = {
    name: 'davet-yardım', 
    description: 'The Help Command',
    usage: 'help'
  };
