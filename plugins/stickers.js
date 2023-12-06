require('../main.js') 
const fs = require("fs")
const path = require("path")
const chalk = require("chalk");
const axios = require('axios')
const cheerio = require('cheerio')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom } = require('../libs/fuctions.js'); 

async function stickers(m, command, conn, mime, quoted, args, text, lolkeysapi, fkontak) {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].limit < 1) return m.reply(info.endLimit)
if (command == 's' || command == 'sticker') {
if (/image/.test(mime)) {  
conn.fakeReply(m.chat, `⏳ *Aguarde un momento estoy creando tu stickers....*`, '0@s.whatsapp.net', 'No haga spam')
media = await quoted.download()  
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, mediaType: 2, sourceUrl: nn6, thumbnail: imagen1}}})
await fs.unlinkSync(encmedia)  
} else if (/video/.test(mime)) {  
if ((quoted.msg || quoted).seconds > 20) return m. reply('_[ ❌ ] Máximo 20 segundos!_')  
media = await quoted.download()  
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, mediaType: 2, sourceUrl: nn6, thumbnail: imagen1}}})
await new Promise((resolve) => setTimeout(resolve, 2000));
await fs.unlinkSync(encmedia)  
} else {  
m.reply(`*Y LA IMAGEN?*`)}}

if (command == 'wm' || command == 'take') {
if (!args.join(" ")) return m.reply(`*Responda un sticker para robar*`)
conn.fakeReply(m.chat, `⏳ *Aguarde un momento....*`, '0@s.whatsapp.net', 'No haga spam') 
const swn = args.join(" ")
const pcknm = swn.split("|")[0]
const atnm = swn.split("|")[1]
if (m.quoted.isAnimated === true) {
conn.downloadAndSaveMediaMessage(quoted, "gifee")
conn.sendMessage(m.chat, {sticker:fs.readFileSync("gifee.webp")},{ quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await conn.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: botname, body: `h`, mediaType: 2, sourceUrl: nn6, thumbnail: imagen1}}})
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m. reply('Maximum 10 Seconds!')
let media = await quoted.download()
let encmedia = await conn.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm, contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: nn6, thumbnail: imagen1}}})
} else {
m.reply(`Y la imagen?`)}}

if (command == 'attp') {
if (!text) return m.reply('ingresa algo para convertirlo a sticker :v')
m.reply(`_*Calma crack estoy haciendo tu texto a sticker 👏*_\n\n_*Esto puede demorar unos minutos....*_`) 
let link = `https://api.lolhuman.xyz/api/attp?apikey=${lolkeysapi}&text=${text}`
await conn.sendMessage(m.chat, { sticker: { url: link } }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
db.data.users[m.sender].limit -= 1 }

if (command == 'dado') {
let dir = `https://api.lolhuman.xyz/api/sticker/dadu?apikey=${lolkeysapi}`
conn.sendMessage(m.chat, { sticker: { url: dir } }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})
db.data.users[m.sender].limit -= 1
m.reply('1 ' + info.limit)}}

module.exports = { stickers }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})