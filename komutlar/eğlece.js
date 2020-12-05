const Discord = require ("discord.js");

exports.run = (client, message) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
const EmbedCrewCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**  » CAPTAN Bot  **")
.setThumbnail("https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1")
.setDescription(`
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/qzHTkhjQgT)** **•** **[Botun Davet Linki](https://discord.com/api/oauth2/authorize?client_id=779006421625995345&permissions=2146958847&scope=bot)** **•** **[Web-Site]()**
Bir komut hakkında detaylı __yardım için__: **-yardım**

**• Komutlar**
> [-zarat](https://discord.gg/qzHTkhjQgT) →  Zar atarsınız
> [-kasaaç](https://discord.gg/qzHTkhjQgT) → CsGo kasası açmaya ne dersin?.
> [-emojiyazı](https://discord.gg/qzHTkhjQgT) → Emojili yazı yazmaya ne dersin?.
> [-espiri](https://discord.gg/qzHTkhjQgT) → Bot espiri yapar.
> [-sor](https://discord.gg/qzHTkhjQgT) → Bot sorduğunuz soruya cevap verir.
> [-vine](https://discord.gg/qzHTkhjQgT) → Bot size komik paylaşımlar gösterir.
> [-adamasmaca](https://discord.gg/qzHTkhjQgT) → Adam asmaca oyunu.
> [-balıktut](https://discord.gg/qzHTkhjQgT) → Dereden balık tutarsınız.
> [-tersyazı](https://discord.gg/qzHTkhjQgT) →  Yazdığınız yazıyı bot tersten yazar
> [-mcskin](https://discord.gg/qzHTkhjQgT) →Yazdığınız ismin minecraft görünüşünü atar.
> [-token](https://discord.gg/qzHTkhjQgT) →  Botun tokenini gösterir.
> [-düello](https://discord.gg/qzHTkhjQgT) →  Arkadaşlarınızla düello yaparsınız.
> [-wasted](https://discord.gg/qzHTkhjQgT) → Polis tarafından yakalanırsnız
> [-yumruk-at](https://discord.gg/qzHTkhjQgT) → Etiketlediğin kişiye bot yumruk atar.
> [-yazan-kazanır](https://discord.gg/qzHTkhjQgT) → Yazan kazanır oyunu.
> [-kapaklaf](https://discord.gg/qzHTkhjQgT) → Etiketlediğin kişiye bot kapaklaf söyler.
> [-şanslısayım](https://discord.gg/qzHTkhjQgT) → Şanslı sayını bulmaya calışır.
> [-kaçcm](https://discord.gg/qzHTkhjQgT) → Malafatını ölçer.

**• Bilgilendirme**
> :bulb: **Discord Js Sürümü : 12.5.0**
> :robot: **Yapımcım : Manyak*#9999**
> :eye_in_speech_bubble: **Sürümüm : 2.0.1**
© 2020 Captan | Tüm hakları saklıdır.
`)
 
 

return message.channel.send(EmbedCrewCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'eğlence', 
    description: 'Botun Komut Listesini Gösterir!',
    usage: '-eğlence'
};