const Discord = require("discord.js");
exports.run = async (client, message, args) => {

  
let ilet = args.slice(0).join(' ')
if(!ilet) return message.channel.send('Yapımcıyı başarılı birşekilde iletmek için **Sunucunun davet linki** ile birlikte atınız!. :x:')

const embedCrewCode = new Discord.MessageEmbed()
.setTitle("Yapımcıyı cağırma sistemi")
.setColor('BLUE')
.setDescription(`**İlettiği kanal** ${message.channel.name} \n **Çağrılınan sunucu** \`${message.guild.name}\` \n **çağıran Kullanıcı** <@${message.author.id}> \n **Mesajı :** \`${ilet}\``)
client.channels.cache.get('783649833814589471').send(embedCrewCode)
  
message.channel.send("Yapımımcıyı başarılı birşekilde mesajzı ilettim. :confetti_ball:").then(message => message.delete({ timeout: 10000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'ilet',
  description: 'Yapımcıyı cagırmaya yarar',
  usage: 'ilet'
}