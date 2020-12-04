const Discord = require('discord.js');

exports.run = async (bot, message, args) => {
    var dogruluk = ['Telefonunda arattığın en son şey nedir ?', 'Bir sabah karşı cins olarak uyansaydın ilk yapacağın şey ne olurdu ?', 'Sokakta yere bir şey düşürdüğünde hiç bir şey olmamış gibi alıp ağzına attın mı ?', '']
    var cesaret = ['İğrenç bir ses tonuyla şarkı söyle', 'Bugün yaptığın bir şeyle alakalı uydurma kısa, komik bir hikaye anlat', 'Whatsappındaki son mesajlaşmanı bize oku', 'Çok yüksek bir sesle 3 saniye bağır']
    var dcevap = dogruluk[Math.floor(Math.random() * dogruluk.length)];
    var ccevap = cesaret[Math.floor(Math.random() * cesaret.length)]

    message.channel.send('\`Doğruluk\` mu yoksa \`cesaret\` mi?')
    let crew = false;
    while (!crew) {
        const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 });
        const choice = response.first().content
        if (choice == 'doğruluk' || choice == 'd') return message.channel.send(`${dcevap}`)
        if (choice !== 'cesaret' && choice !== 'c') {
            message.channel.send(`Doğruluk ve cesaret oyununu oynamak istiyorsan ya **<c>** yaz yada **<d>** yaz!`) 
        }
        if (choice == 'cesaret' || choice == 'c') crew = true
    }
    if (crew) {
        message.channel.send(`${ccevap}`)

    }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['doğruluk-cesaret'],
    permLevel: 0
};

exports.help = {
    name: 'doğrulukcesaret',
    description: 'Doğruluk cesaret oynarsınız',
    usage: 'doğrulukcesaret'
};