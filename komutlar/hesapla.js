const Discord = require('discord.js');
const math = require('math-expression-evaluator') //Gereken Modül: math-expression-evaluator
const stripIndents = require('common-tags').stripIndents //Gereken Modül: common-tags

//Dcs Ekibi

exports.run = function(client, message, args) {
      if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  var soru = args.join(' ');
    
    if(!soru) return message.reply('Bir işlem belirtin. **Doğru Kullanım**: -hesapla <işlem>')
    else { let cevap;
        try {
            cevap = math.eval(soru)
        } catch(err) {
            message.channel.send('Hatalı işlem: **' + err)
        }

        const CrewCode = new Discord.MessageEmbed()
        .addField('Soru', soru)
        .addField('Cevap', cevap)

        message.channel.send(CrewCode)
    }


};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
}; //Dcs Ekibi

exports.help = {
  name: 'hesapla', 
  description: 'Belirtilen işlemi yapar.',
  usage: 'hesapla <işlem>'
};