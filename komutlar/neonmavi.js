const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** <a:maple_leaf:742698148329291826>`)
  const linqo = `https://habbofont.net/font/neon_blue/${yazi}.gif`
  .replace(' ', '+')

  
  const CrewCodeembed = new Discord.MessageEmbed()
  .setTitle("Logo")
  .setColor("RANDOM")
  .setImage(linqo)
  .setFooter('Neon Mavi Logo Oluşturuldu')
  message.channel.send(CrewCodeembed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [''],
    permLevel: 0
}

exports.help = {
    name: 'neonmavi',
    description: 'Yazdığınız yazıyı dinamik çevirir.',
    usage: 'neonmavi <yazı>'
}