const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
   let Crew = args.slice(0).join(' ');
   
  if (!Crew) return message.reply(':x:Sahibi neden çağıracağım!')
  if (Crew.length < 6) return message.channel.send(":x: Karakter sayısı cok az tekrar deneyiniz. **En az 10 karakterli olmalıdır!**");
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(CrewCode => {

    message.channel.send("Sahibime Mesajını İlettim!")
    let manyak = new Discord.MessageEmbed()
    .setColor('RED')
    .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL}`)
    .setTitle('Biri Seni Yardın İçin Çağırdı')
    .addField('Sebep:', `${manyak}`)
    .addField(`Sunucunun Davet Linki:`, `${CrewCode}`)
    .setThumbnail(message.guild.iconURL)
    .setFooter('Crew CODE');
    client.users.get(ayarlar.sahip).send(Crew);
  });
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["s-i"],
  permLevel: 0
};

exports.help = {
  name: 'ilet',
  description: '',
  usage: 'ilet'
}; 
