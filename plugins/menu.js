const fs = require("fs")
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, delay, format, logic, generateProfilePicture, parseMention, getRandom} = require('../libs/fuctions.js'); 
const path = require("path") 
const chalk = require("chalk");
const moment = require('moment-timezone') 
const gradient = require('gradient-string') 
const fetch = require('node-fetch') 
const axios = require('axios')
const cheerio = require('cheerio')
const Jimp = require('jimp')
const os = require('os')
let usuario = global.db.data.users[m.sender]

const menu = (m, command, conn, prefix, pushname, sender, pickRandom, fkontak) => {
if (global.db.data.users[m.sender].registered < true) return m.reply(info.registra)
if (global.db.data.users[m.sender].banned) return 
let user = global.db.data.users[m.sender]
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
const date = moment.tz('America/Bogota').format('DD/MM/YYYY')
const time = moment.tz('America/Argentina/Buenos_Aires').format('LT')
let wa = m.key.id.length > 21 ? 'Android' : m.key.id.substring(0, 2) == '3A' ? 'IOS' : 'whatsapp web'
let submenu = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ ┏━━━━━━━━━━━━━━•
┊┃ ┃ \`👥 ${usuario.Language === 'es' ? 'INFO DEL USUARIO' : usuario.Language === 'en' ? 'USER INFO' :  usuario.Language === 'ar' ? ' معلومات المستخدم' : usuario.Language === 'pt' ? 'INFORMAÇÃO DE USUÁRIO' : usuario.Language === 'id' ? 'INFO PENGGUNA' : usuario.Language === 'rs' ? 'ИНФОРМАЦИЯ О ПОЛЬЗОВАТЕЛЕ' : usuario.Language}\`
┊┃ ┗━━━━━━━━━━━━━━•
┊┃ ┏━━━━━━━━━━━━━━•
┊┃ ┃❐ ${lenguaje.menu.text5} @${sender.split("@")[0]} 
┊┃ ┃${lenguaje.menu.text8} ${user.limit}
┊┃ ┃${lenguaje.menu.text9} ${user.level}
┊┃ ┃${lenguaje.menu.text10} ${user.role}
┊┃ ┃❐ ᴇxᴘ : ${user.exp}
┊┃ ┃❐ ᴄᴏɪɴs : ${user.money}
┊┃ ┃ 
┊┃ ┃${lenguaje.menu.text11} ${rtotalreg} de ${totalreg}
┊┃ ┗━━━━━━━━━━━━━━•
┊┗━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩ 

${pickRandom([`\`𝐐𝐮𝐢𝐞𝐫𝐞𝐬 𝐨𝐛𝐭𝐞𝐧𝐞𝐫 𝐭𝐮 𝐛𝐨𝐭 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐢𝐳𝐚𝐝𝐨?\`
https://www.instagram.com/alcashop.ff`, `\`□ CÓMO INSTALAR EL BOT\`\n${yt}`, `\`¿Qué hay de nuevo?\`\n• Pon : ${prefix}nuevo`, `\`💫 INFÓRMATE SOBRE LAS NUEVAS ACTUALIZACIONES, NOVEDADES DEL BOT AQUÍ\`\n${nna}`, `\`🌟¿Te agrada el bot? califica nuestro repo con una estrellita ☺\`\n${md}`, `Activar tu bot 24/7 con nuestro hosting\n${host}`])}\n\n`
let descargar = `
┊┏━━━━━━━━━━━━━━•
┊┃ *🚀 ＭＥＮＵ ＤＥＳＣＡＲＧＡＳ 🚀*
┊┃━━━━━━━━━━━━━━•
┊┃🟠${prefix}play _(descargar música)_
┊┃🟠${prefix}play2 _(descargar video)_
┊┃🟠${prefix}play.1 _(descargar música)_
┊┗━━━━━━━━━━━━━━•`
let grupos = `
┊┏━━━━━━━━━━━━━━•
┊┃ *🔰 ＭＥＮＵ ＰＡＲＡ ⃐ＧＲＵＰＯＳ 🔰*
┊┃━━━━━━━━━━━━━━•
┊┃Gestiona tu grupo con Alcabot
┊┃━━━━━━━━━━━━━━•
┊┃🟡 ${prefix}welcome _(on/off)_
┊┃🟡 ${prefix}antilink _(on/off)_
┊┃🟡 ${prefix}antienlace _(on/off)_
┊┃🟡 ${prefix}antitoxic _(on/off)_
┊┃🟡 ${prefix}antilink2 _(on/off)_
┊┃🟡 ${prefix}autosticker _(on/off)_
┊┃🟡 ${prefix}modoadmin _(on/off)_
┊┃🟡 ${prefix}kick _(@tag)_
┊┃🟡 ${prefix}promote _(@tag)_
┊┃🟡 ${prefix}demote _(@tag)_
┊┃🟡 ${prefix}infogrupo
┊┃🟡 ${prefix}groupinfo
┊┃🟡 ${prefix}admins _(invocar a los admins)_
┊┃🟡 ${prefix}grupo _(close/open)_
┊┃🟡 ${prefix}invocar _(invocar a todos en una lista)_
┊┗━━━━━━━━━━━━━━•`
let buscadores = `
┊┏━━━━━━━━━━━━━━•
┊┃ *🔎 ＭＥＮＵ ＢＵＳＣＡＤＯＲＥＳ 🔎*
┊┃━━━━━━━━━━━━━━•
┊┃🟢 ${prefix}imagen _(imagen en google)_
┊┃🟢 ${prefix}traducir _(traducir algun texto)_
┊┃🟢 ${prefix}pinterest
┊┃🟢 ${prefix}wikipedia
┊┗━━━━━━━━━━━━━━•`
let juegos = `
┊┏━━━━━━━━━━━━━━•
┊┃ *👾 ＭＥＮＵ ＪＵＥＧＯＳ 👾*
┊┃━━━━━━━━━━━━━━•
┊┃🔵 ${prefix}simi _(hablar con el bot)_
┊┃🔵 ${prefix}ppt _(piedra, papel, o tijera)_
┊┃🔵 ${prefix}gay @tag
┊┃🔵 ${prefix}pareja @tag
┊┃🔵 ${prefix}love @tag
┊┃🔵 ${prefix}follar @tag
┊┃🔵 ${prefix}pregunta
┊┃🔵 ${prefix}verdad
┊┃🔵 ${prefix}reto
┊┃🔵 ${prefix}personalidad
┊┃🔵 ${prefix}racista
┊┃🔵 ${prefix}piropo
┊┃🔵 ${prefix}formartrio
┊┃🔵 ${prefix}formarpareja
┊┗━━━━━━━━━━━━━━•`
let efecto = `
┊┏━━━━━━━━━━━━━━•
┊┃ *🎤 ＭＥＮＵ ＤＥ ＥＦＥＣＴＯＳ 🎤*
┊┃━━━━━━━━━━━━━━•
┊┃ *(𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 UN 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉)*
┊┃━━━━━━━━━━━━━━•
┊┃🟣 ${prefix}bass
┊┃🟣 ${prefix}nightcore
┊┃🟣 ${prefix}reverse
┊┃🟣 ${prefix}robot
┊┃🟣 ${prefix}slow
┊┃🟣 ${prefix}smooth
┊┃🟣 ${prefix}squirrel
┊┗━━━━━━━━━━━━━━•`
let convertidores = `
┊┏━━━━━━━━━━━━━━•
┊┃ *🧧ＭＥＮＵ ＣＯＮＶＥＲＴＩＤＯＲＥＳ 🧧*
┊┃━━━━━━━━━━━━━━•
┊┃🔴 ${prefix}tourl
┊┃🔴 ${prefix}tts
┊┃🔴 ${prefix}tomp3
┊┃🔴 ${prefix}toimg
┊┃🔴 ${prefix}toaudio
┊┃🔴 ${prefix}toanime
┊┃🔴 ${prefix}hd
┊┃🔴 ${prefix}logos
┊┗━━━━━━━━━━━━━━•`
let menurandow = `
┊┏━━━━━━━━━━━━━━•
┊┃ *⛩️ ＭＥＮＵ ＲＡＮＤＯＭ ⛩️*
┊┃━━━━━━━━━━━━━━•
┊┃⚫️ ${prefix}memes
┊┃⚫️ ${prefix}simp
┊┃⚫️ ${prefix}navidad
┊┃⚫️ ${prefix}minato
┊┃⚫️ ${prefix}naruto
┊┃⚫️ ${prefix}nezuko
┊┃⚫️ ${prefix}sagiri
┊┃⚫️ ${prefix}sasuke
┊┃⚫️ ${prefix}sakura
┊┃⚫️ ${prefix}cosplay
┊┗━━━━━━━━━━━━━━•`
let menuSticker= `
┊┏━━━━━━━━━━━━━━•
┊┃ *👽 ＭＥＮＵ ＳＴＩＣＫＥＲ 👽*
┊┃━━━━━━━━━━━━━━•
┊┃ *(Crear sticker desde whatsapp con NovaBot)*
┊┃━━━━━━━━━━━━━━•
┊┃⚪️ ${prefix}s
┊┃⚪️ ${prefix}sticker 
┊┃⚪️ ${prefix}wm
┊┃⚪️ ${prefix}attp
┊┃⚪️ ${prefix}qc
┊┃⚪️ ${prefix}emojimix
┊┗━━━━━━━━━━━━━━•`

if (command == 'menu' || command == 'help') {
m.react('💫') 
let menu = `╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ ┏━━━━━━━━━━━━━━•
┊┃ ┃${lenguaje['smsWel']()} @${sender.split("@")[0]} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''} 👋🏻
┊┃ ┗━━━━━━━━━━━━━━•

${pickRandom([`\`¿𝐐𝐮𝐢𝐞𝐫𝐞𝐬 𝐨𝐛𝐭𝐞𝐧𝐞𝐫 𝐭𝐮 𝐛𝐨𝐭 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐢𝐳𝐚𝐝𝐨?\`
https://www.instagram.com/alcashop.ff`, `\`□ CÓMO INSTALAR EL BOT\`\n${yt}`, `\`¿Qué hay de nuevo?\`\n• Pon : ${prefix}nuevo`, `\`💫 INFÓMARTE SOBRE LAS NUEVAS ACTUALIZACIONES, NOVEDADES DEL BOT AQUI\`\n${nna}`, `\`🌟¿Te agrada el bot? califica nuestro repositorio con una estrellita ☺\`\n${md}\``])}

╭┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩
┊┏━━━━━━━━━━━━━━•
┊┃ *🟢 ＬＩＳＴＡ ＤＥ ＣＯＭＡＮＤＯＳ*
┊┃━━━━━━━━━━━━━━•
┊┃⚙️ ${prefix}allmenu | menucompleto
┊┃⚙️ ${prefix}menu1 | descarga
┊┃⚙️ ${prefix}menu2 | audio
┊┃⚙️ ${prefix}menu3 | menugrupos
┊┃⚙️ ${prefix}menu4 | menubuscadores
┊┃⚙️ ${prefix}menu5 | menujuegos
┊┃⚙️ ${prefix}menu10 | menuSticker
┊┃━━━━━━━━━━━━━━•
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈⪩`
conn.sendMessage(m.chat, { text: menu,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'Alca-Bot💫' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender, numBot],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
}

if (command == 'menu1' || command == 'descarga') {
m.react('🚀') 
conn.sendMessage(m.chat, { text: submenu + descargar,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'Alca-Bot' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'menu2' || command == 'audio') {

let menu2 = `${lenguaje.menu.text13}\n\na\nfeliz navidad\nMerry Christmas\nFeliz cumpleaños\nPasa pack\nUwu\nSiuuu\nhola\nhello\nVete a la verga\nPasen porno\nHora del sexito\nPongan cuties\nFiesta del admin\nAdmin party\nViernes\nGOOOOD\nAlto temazo\nTodo bien\nBuenos dias\nBot gay\nGracias\nFua\nFino señores\n🧐🍷\nCorte\nGaspi buenos dias\nGaspi me saludas\nGaspi y las minitas\nGaspi todo bien\nGaspi ya no aguanto\nContate algo bot\nSexo\nMomento epico\nEl bot del orto no funciona\nEpicardo\nInsta de la minita\nUna mierda de bot\nUltimo momento\nNefasto\nParaguayo\nBot de mierda\nVenezolano\na nadie le importa\nGaspi corte\nYa me voy a dormir\nCalefon\nApurate bot\nUn chino\nNo funciona\nBoliviano\nEnano\nQuien es tu sempai botsito\nMe gimes 7u7\nTe amo botsito uwu\nOnichan\nLa toca 7w7\nautodestruction\n\n${lenguaje.menu.text14}`
conn.sendMessage(m.chat, { text: menu2}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'menu3' || command == 'menugrupos') {
m.react('🔰') 
conn.sendMessage(m.chat, { text: submenu + grupos,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'Alca-Bot 💫' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'menu4' || command == 'menubuscadores') {
m.react('🪄') 
conn.sendMessage(m.chat, { text: submenu + buscadores,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'Alca-Bot💫' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'menu5' || command == 'menujuegos') {
m.react('👾') 
conn.sendMessage(m.chat, { text: submenu + juegos,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'Alca-Bot' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'menu6' || command == 'menuefecto') {
m.react('🎤') 
conn.sendMessage(m.chat, { text: submenu + efecto,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'Alca-Bot' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'menu7' || command == 'menuconvertidores') {
m.react('🧧') 
conn.sendMessage(m.chat, { text: submenu + convertidores,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'Alca-Bot 💫' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'menu18' || command == 'Menuhony') {
m.react('🥵') 
conn.sendMessage(m.chat, { text: submenu + menu18,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'Alca-Bot💫' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'menurandow' || command == 'menu8') {
m.react('⛩️') 
conn.sendMessage(m.chat, { text: submenu + menurandow,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'Alca-Bot💫' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'menuRPG' || command == 'menu9') {
m.react('⚒️') 
conn.sendMessage(m.chat, { text: submenu + menuRPG,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'Alca-Bot💫' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'menuSticker' || command == 'menu10') {
m.react('🎈') 
conn.sendMessage(m.chat, { text: submenu + menuSticker,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'Alca-Bot 💫' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'menuOwner' || command == 'menu11') {
m.react('👑') 
conn.sendMessage(m.chat, { text: submenu + menuOwner,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'Alca-Bot 💫' }, 
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'allmenu' || command == 'menucompleto') {
m.react('🙌') 
let menu = `╔══════ ≪ •❈• ≫ ══════╗
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║${lenguaje['smsWel']()} @${sender.split("@")[0]} ${user.registered === true ? 'ͧͧͧͦꙶͣͤ✓' : ''} 👋🏻
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
║${lenguaje.menu.text} [ ${prefix} ]
║${lenguaje.menu.text2} ${date}
║${lenguaje.menu.text3} ${time}
║${lenguaje.menu.text4} ${vs}
║${lenguaje.menu.text5} ${Object.keys(global.db.data.users).length}
║${lenguaje.menu.text6} ${runtime(process.uptime())}
║${lenguaje.menu.text7} ${conn.public ? 'publico' : 'privado'}
║${conn.user.id == global.numBot2 ? `${lenguaje.menu.textt} ` : `${lenguaje.menu.texttt} @${global.numBot.split`@`[0]}`}
║ 
║${lenguaje.menu.text8} ${user.limit}
║${lenguaje.menu.text9} ${user.level}
║${lenguaje.menu.text10} ${user.role}
║❐ ᴇxᴘ : ${user.exp}
║❐ ᴄᴏɪɴs : ${user.money}
║ 
║${lenguaje.menu.text11} ${rtotalreg} de ${totalreg}
║◤━━━━━ ☆. ∆ .☆ ━━━━━◥
╚══════ ≪ •❈• ≫ ══════╝

===============================
${lenguaje.menu.text12}
===============================

┊┏━━━━━━━━━━━━━━•
┊┃ *🚀 ＭＥＮＵ ＤＥＳＣＡＲＧＡＳ 🚀*
┊┃━━━━━━━━━━━━━━•
┊┃🟠${prefix}play _(descargar música)_
┊┃🟠${prefix}play2 _(descargar video)_
┊┃🟠${prefix}play.1 _(descargar música)_
┊┗━━━━━━━━━━━━━━•
┊┏━━━━━━━━━━━━━━•
┊┃ *🔰 ＭＥＮＵ ＰＡＲＡ ⃐ＧＲＵＰＯＳ 🔰*
┊┃━━━━━━━━━━━━━━•
┊┃Gestiona tu grupo con Alcabot
┊┃━━━━━━━━━━━━━━•
┊┃🟡 ${prefix}welcome _(on/off)_
┊┃🟡 ${prefix}antilink _(on/off)_
┊┃🟡 ${prefix}antienlace _(on/off)_
┊┃🟡 ${prefix}antitoxic _(on/off)_
┊┃🟡 ${prefix}antilink2 _(on/off)_
┊┃🟡 ${prefix}autosticker _(on/off)_
┊┃🟡 ${prefix}modoadmin _(on/off)_
┊┃🟡 ${prefix}kick _(@tag)_
┊┃🟡 ${prefix}promote _(@tag)_
┊┃🟡 ${prefix}demote _(@tag)_
┊┃🟡 ${prefix}infogrupo
┊┃🟡 ${prefix}groupinfo
┊┃🟡 ${prefix}admins _(invocar a los admins)_
┊┃🟡 ${prefix}grupo _(close/open)_
┊┃🟡 ${prefix}invocar _(invocar a todos en una lista)_
┊┗━━━━━━━━━━━━━━•
┊┏━━━━━━━━━━━━━━•
┊┃ *🔎 ＭＥＮＵ ＢＵＳＣＡＤＯＲＥＳ 🔎*
┊┃━━━━━━━━━━━━━━•
┊┃🟢 ${prefix}imagen _(imagen en google)_
┊┃🟢 ${prefix}traducir _(traducir algun texto)_
┊┃🟢 ${prefix}pinterest
┊┃🟢 ${prefix}wikipedia
┊┗━━━━━━━━━━━━━━•
┊┏━━━━━━━━━━━━━━•
┊┃ *👾 ＭＥＮＵ ＪＵＥＧＯＳ 👾*
┊┃━━━━━━━━━━━━━━•
┊┃🔵 ${prefix}simi _(hablar con el bot)_
┊┃🔵 ${prefix}ppt _(piedra, papel, o tijera)_
┊┃🔵 ${prefix}gay @tag
┊┃🔵 ${prefix}pareja @tag
┊┃🔵 ${prefix}love @tag
┊┃🔵 ${prefix}follar @tag
┊┃🔵 ${prefix}pregunta
┊┃🔵 ${prefix}verdad
┊┃🔵 ${prefix}reto
┊┃🔵 ${prefix}personalidad
┊┃🔵 ${prefix}racista
┊┃🔵 ${prefix}piropo
┊┃🔵 ${prefix}formartrio
┊┃🔵 ${prefix}formarpareja
┊┗━━━━━━━━━━━━━━•
┊┏━━━━━━━━━━━━━━•
┊┃ *🎤 ＭＥＮＵ ＤＥ ＥＦＥＣＴＯＳ 🎤*
┊┃━━━━━━━━━━━━━━•
┊┃ *(𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 UN 𝙰𝚄𝙳𝙸𝙾 𝙾 𝙽𝙾𝚃𝙰 𝙳𝙴 𝚅𝙾𝚉)*
┊┃━━━━━━━━━━━━━━•
┊┃🟣 ${prefix}bass
┊┃🟣 ${prefix}nightcore
┊┃🟣 ${prefix}reverse
┊┃🟣 ${prefix}robot
┊┃🟣 ${prefix}slow
┊┃🟣 ${prefix}smooth
┊┃🟣 ${prefix}squirrel
┊┗━━━━━━━━━━━━━━•࣭۫
┊┏━━━━━━━━━━━━━━•
┊┃ *🧧ＭＥＮＵ ＣＯＮＶＥＲＴＩＤＯＲＥＳ 🧧*
┊┃━━━━━━━━━━━━━━•
┊┃🔴 ${prefix}tourl
┊┃🔴 ${prefix}tts
┊┃🔴 ${prefix}tomp3
┊┃🔴 ${prefix}toimg
┊┃🔴 ${prefix}toaudio
┊┃🔴 ${prefix}toanime
┊┃🔴 ${prefix}hd
┊┃🔴 ${prefix}logos
┊┗━━━━━━━━━━━━━━•
┊┏━━━━━━━━━━━━━━•
┊┃ *⛩️ ＭＥＮＵ ＲＡＮＤＯＭ ⛩️*
┊┃━━━━━━━━━━━━━━•
┊┃⚫️ ${prefix}memes
┊┃⚫️ ${prefix}simp
┊┃⚫️ ${prefix}navidad
┊┃⚫️ ${prefix}minato
┊┃⚫️ ${prefix}naruto
┊┃⚫️ ${prefix}nezuko
┊┃⚫️ ${prefix}sagiri
┊┃⚫️ ${prefix}sasuke
┊┃⚫️ ${prefix}sakura
┊┃⚫️ ${prefix}cosplay
┊┗━━━━━━━━━━━━━━•
┊┏━━━━━━━━━━━━━━•
┊┃ *👽 ＭＥＮＵ ＳＴＩＣＫＥＲ 👽*
┊┃━━━━━━━━━━━━━━•
┊┃ *(Crear sticker desde whatsapp con AlcaBot)*
┊┃━━━━━━━━━━━━━━•
┊┃⚪️ ${prefix}s
┊┃⚪️ ${prefix}sticker 
┊┃⚪️ ${prefix}wm
┊┃⚪️ ${prefix}attp
┊┃⚪️ ${prefix}qc
┊┃⚪️ ${prefix}emojimix
┊┗━━━━━━━━━━━━━━•`
conn.sendMessage(m.chat, { text: menu,  
contextInfo:{  
forwardedNewsletterMessageInfo: { 
newsletterJid: '120363160031023229@newsletter', 
serverMessageId: '', 
newsletterName: 'Alca-Bot 💫' },
forwardingScore: 9999999,  
isForwarded: true,   
mentionedJid:[sender, numBot],  
"externalAdReply": {  
"showAdAttribution": true,  
"renderLargerThumbnail": true,  
"title": wm,   
"containsAutoReply": true,  
"mediaType": 1,   
"thumbnail": imagen2, 
sourceUrl: `${pickRandom([nna, nn, md, yt])}`
}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}) 
}

if (command == 'nuevo' || command == 'extreno') {
conn.sendMessage(m.chat, { text: lenguaje.menu.text15(vs), contextInfo:{forwardedNewsletterMessageInfo: { newsletterJid: '120363160031023229@newsletter', serverMessageId: '', newsletterName: 'INFINITY-WA 💫' }, mentions: [sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": ` ${wm}`, "body": ` ${vs}`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: `${pickRandom([nna, nn, md, yt])}`}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}

if (command == 'reglas') {
conn.sendMessage(m.chat, { text: lenguaje.menu.text16, contextInfo:{forwardedNewsletterMessageInfo: { newsletterJid: '120363160031023229@newsletter', serverMessageId: '', newsletterName: 'INFINITY-WA 💫' }, mentions: [sender], forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "title": ` ${wm}`, "body": ` ${vs}`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: `${pickRandom([nna, nn, md, yt])}`}}}, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100})}}

module.exports = { menu }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
