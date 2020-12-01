const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
   let Crew = args.slice(0).join(' ');
   
  if (!Crew) return message.reply(':x:Sahibi neden çağıracağım!')
  if (Crew.length < 6) return message.channel.send(":x: Sebebiniz Daha Geçerli Olması İçin **En Az 6** Karakterli Olmalıdır!");
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(CrewCode => {

    message.channel.send("Sahibime Mesajını İlettim!")
    let Manyak = new Discord.MessageEmbed()
    .setColor('RED')
    .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL}`)
    .setTitle('Biri Seni Yardın İçin Çağırdı')
    .addField('Sebep:', `${Manyak}`)
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
