const { ChartJSNodeCanvas } = require("chartjs-node-canvas")
//TANIMI YAPIN


- Komut taslağı içerisine ; 

let bindok = message.guild.roles.cache.get("913706012916219905")
        let always = message.guild.roles.cache.get("913706086870167594")
        let ash = message.guild.roles.cache.get("913817633126744095")
        let sky = message.guild.roles.cache.get("914487356353044480")
        let rys = message.guild.roles.cache.get("914492721757057044")
        let bindokuzyuzkirk = message.guild.roles.cache.get("914493763609591829")
        const ekipsesbindok = `${parseInt(message.guild.members.cache.filter(x => x.roles.cache.has(bindok.id) && x.voice.channel).size / message.guild.members.cache.filter(r => r.roles.cache.has(bindok.id)).size * 100)}`
        const ekipsesalways = `${parseInt(message.guild.members.cache.filter(x => x.roles.cache.has(always.id) && x.voice.channel).size / message.guild.members.cache.filter(r => r.roles.cache.has(always.id)).size * 100)}`
        const ekipsesash = `${parseInt(message.guild.members.cache.filter(x => x.roles.cache.has(ash.id) && x.voice.channel).size / message.guild.members.cache.filter(r => r.roles.cache.has(ash.id)).size * 100)}`
        const ekipsessky = `${parseInt(message.guild.members.cache.filter(x => x.roles.cache.has(sky.id) && x.voice.channel).size / message.guild.members.cache.filter(r => r.roles.cache.has(sky.id)).size * 100)}`
        const ekipsesrys = `${parseInt(message.guild.members.cache.filter(x => x.roles.cache.has(rys.id) && x.voice.channel).size / message.guild.members.cache.filter(r => r.roles.cache.has(rys.id)).size * 100)}`
        const ekipsesdokuzyuzkirk = `${parseInt(message.guild.members.cache.filter(x => x.roles.cache.has(bindokuzyuzkirk.id) && x.voice.channel).size / message.guild.members.cache.filter(r => r.roles.cache.has(bindokuzyuzkirk.id)).size * 100)}`
        const datas = [
            {
                "ekipses": ekipsesbindok,
                "ekipisim": "1953" 
            },
            { 
                "ekipses": ekipsesalways,
                "ekipisim": "Always"
            },
            { 
                "ekipses": ekipsesash,
                "ekipisim": "Ash"
            },
            { 
                "ekipses": ekipsessky,
                "ekipisim": "Sky"
            },
            { 
                "ekipses": ekipsesrys,
                "ekipisim": "Rys"
            },
            { 
                "ekipses": ekipsesdokuzyuzkirk,
                "ekipisim": "1940"
            },
        ]
const ses = []
const ekipisim = []
for ( const item of datas) {
  ses.push(item.ekipses)
  ekipisim.push(item.ekipisim)
}
const width = 500
const height = 300
const chartCallBack = (ChartJS) => { }
const canvas = new ChartJSNodeCanvas({
  width, 
  height,
  chartCallBack
})
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
        }
        async function ImageFromData(body, w = 600, h = 290) {
            return await fromImage(body, w, h);
        };
        async function fromImage(config, w, h) {
            let crs = new ChartJSNodeCanvas({ width: w, height: h });
            return await crs.renderToBuffer(config);
        };
let buffer = await ImageFromData({
    width: 600,
    height: 290,
  type: 'bar',
  data: { 
    labels: [].concat(ekipisim),
    datasets: [
      { 
        label: "EKİPLERİN AKTİFLİK GRAFİĞİ", 
        data: ses,
        backgroundColor: getRandomColor()
      }
    ]
  }
})
//const image = await canvas.renderToBuffer(configs)
//const attachment = new Discord.MessageAttachment(image)
let foto;
let attachments = new Discord.MessageAttachment(buffer, "Aris.png");
        message.channel.send({ embeds: [embed
            .setImage("attachment://Aris.png")
            .addField(`1953 Bilgilendirme:`,`
${emojiler.nokta} Toplam Üye : ${message.guild.members.cache.filter(b => b.roles.cache.has(bindok.id)).size}
${emojiler.nokta} Aktif Üye : ${message.guild.members.cache.filter(c => c.roles.cache.has(bindok.id) && c.presence && c.presence.status !== 'offline').size}
${emojiler.nokta} Sesteki Üye: ${message.guild.members.cache.filter(x => x.roles.cache.has(bindok.id) && x.voice.channel).size}
${emojiler.nokta} Ses Oranı : %${parseInt(message.guild.members.cache.filter(x => x.roles.cache.has(bindok.id) && x.voice.channel).size / message.guild.members.cache.filter(r => r.roles.cache.has(bindok.id)).size * 100)} 
`,true)
            .addField(`Always Bilgilendirme:`,`
${emojiler.nokta} Toplam Üye : ${message.guild.members.cache.filter(b => b.roles.cache.has(always.id)).size}
${emojiler.nokta} Aktif Üye : ${message.guild.members.cache.filter(c => c.roles.cache.has(always.id) && c.presence && c.presence.status !== 'offline').size}
${emojiler.nokta} Sesteki Üye: ${message.guild.members.cache.filter(x => x.roles.cache.has(always.id) && x.voice.channel).size}
${emojiler.nokta} Ses Oranı : %${parseInt(message.guild.members.cache.filter(x => x.roles.cache.has(always.id) && x.voice.channel).size / message.guild.members.cache.filter(r => r.roles.cache.has(always.id)).size * 100)} 
`,true)
            .addField(`Ash Bilgilendirme:`,`
${emojiler.nokta} Toplam Üye : ${message.guild.members.cache.filter(b => b.roles.cache.has(ash.id)).size}
${emojiler.nokta} Aktif Üye : ${message.guild.members.cache.filter(c => c.roles.cache.has(ash.id) && c.presence && c.presence.status !== 'offline').size}
${emojiler.nokta} Sesteki Üye: ${message.guild.members.cache.filter(x => x.roles.cache.has(ash.id) && x.voice.channel).size}
${emojiler.nokta} Ses Oranı : %${parseInt(message.guild.members.cache.filter(x => x.roles.cache.has(ash.id) && x.voice.channel).size / message.guild.members.cache.filter(r => r.roles.cache.has(ash.id)).size * 100)} 
`,true)
            .addField(`Sky Bilgilendirme:`,`
${emojiler.nokta} Toplam Üye : ${message.guild.members.cache.filter(b => b.roles.cache.has(sky.id)).size}
${emojiler.nokta} Aktif Üye : ${message.guild.members.cache.filter(c => c.roles.cache.has(sky.id) && c.presence && c.presence.status !== 'offline').size}
${emojiler.nokta} Sesteki Üye: ${message.guild.members.cache.filter(x => x.roles.cache.has(sky.id) && x.voice.channel).size}
${emojiler.nokta} Ses Oranı : %${parseInt(message.guild.members.cache.filter(x => x.roles.cache.has(sky.id) && x.voice.channel).size / message.guild.members.cache.filter(r => r.roles.cache.has(sky.id)).size * 100)} 
`,true)
            .addField(`Rys Bilgilendirme:`,`
${emojiler.nokta} Toplam Üye : ${message.guild.members.cache.filter(b => b.roles.cache.has(rys.id)).size}
${emojiler.nokta} Aktif Üye : ${message.guild.members.cache.filter(c => c.roles.cache.has(rys.id) && c.presence && c.presence.status !== 'offline').size}
${emojiler.nokta} Sesteki Üye: ${message.guild.members.cache.filter(x => x.roles.cache.has(rys.id) && x.voice.channel).size}
${emojiler.nokta} Ses Oranı : %${parseInt(message.guild.members.cache.filter(x => x.roles.cache.has(rys.id) && x.voice.channel).size / message.guild.members.cache.filter(r => r.roles.cache.has(rys.id)).size * 100)} 
`,true)
            .addField(`1940 Bilgilendirme:`,`
${emojiler.nokta} Toplam Üye : ${message.guild.members.cache.filter(b => b.roles.cache.has(bindokuzyuzkirk.id)).size}
${emojiler.nokta} Aktif Üye : ${message.guild.members.cache.filter(c => c.roles.cache.has(bindokuzyuzkirk.id) && c.presence && c.presence.status !== 'offline').size}
${emojiler.nokta} Sesteki Üye: ${message.guild.members.cache.filter(x => x.roles.cache.has(bindokuzyuzkirk.id) && x.voice.channel).size}
${emojiler.nokta} Ses Oranı : %${parseInt(message.guild.members.cache.filter(x => x.roles.cache.has(bindokuzyuzkirk.id) && x.voice.channel).size / message.guild.members.cache.filter(r => r.roles.cache.has(bindokuzyuzkirk.id)).size * 100)} 
`,true)], files: [attachments] })
