import fetch from 'node-fetch'
import moment from 'moment-timezone'
import axios from 'axios'
import fs from 'fs'
const { generateWAMessageFromContent, prepareWAMessageMedia, proto }  = (await import(global.baileys))

var handler = m => m
handler.all = async function (m) {
global.key = ''

// Cuentas
const response = await fetch('https://raw.githubusercontent.com/JJoan02/JoanBot-TK/master/official_accounts.json')  
const data = await response.json()
let { accounts, channels, groups, collaboration, sponsors, others } = data.info

global.yt = accounts.youTube
global.yt2 = others.yt_vid
global.ig = accounts.instagram
global.md = accounts.joanbot_md
global.fb = accounts.facebook
global.tk = accounts.tiktok
global.ths = accounts.threads
global.paypal = accounts.paypal
global.asistencia = others.assistance_num
global.bot = 'wa.me/573145358172'
global.cuentas = accounts.all

global.canal1 = channels.channel1
global.canal2 = channels.channel2
global.canal3 = channels.channel3
global.canal4 = channels.channel4

global.soporteGB = others.group_support
global.grupo1 = groups.group1
global.grupo2 = groups.group2
global.grupo3 = groups.group3
global.grupo4 = groups.group4
global.grupo5 = groups.group5
global.grupo6 = groups.group6

global.grupo_collab1 = collaboration.group1
global.grupo_collab2 = collaboration.group2
global.grupo_collab3 = collaboration.group3
global.grupo_collab4 = collaboration.group4

global.patrocinador1 = sponsors.boxmine
global.patrocinador2 = sponsors.cafirexos
global.patrocinador3 = sponsors.vortexus
global.patrocinador4 = sponsors.asif

global.canales = [canal1, canal2, canal3, canal4].getRandom()
global.weljoan = [tk, ig, yt2, yt2, ig, md, ig, yt, paypal, yt2, yt2, ig, fb, tk, ths, asistencia].getRandom()
global.redesMenu = [canal1, canal2, canal3, canal4, soporteGB, grupo1, grupo2, grupo3, grupo4, grupo5, grupo6, md, ig, paypal, yt, asistencia, fb, tk].getRandom()
global.accountsgb = [canal1, canal2, canal3, canal4, tk, ig, yt, paypal, fb, ths, md, asistencia].getRandom()

var canalesInfo = [
{ link: canal1, id: "120363160031023229@newsletter", name: "INFINITY-WA 💫" },
{ link: canal2, id: "120363169294281316@newsletter", name: "GB - UPDATE ✨" },
{ link: canal3, id: "120363203805910750@newsletter", name: "Tips sobre YesithBot 🤩" } 
]
var indiceAleatorio = Math.floor(Math.random() * canalesInfo.length)
var channelRD = canalesInfo[indiceAleatorio]

// Imágenes 
global.imagen1 = fs.readFileSync("./media/menus/Menu3.jpg")
global.imagen2 = fs.readFileSync("./media/menus/img1.jpg")
global.imagen3 = fs.readFileSync("./media/menus/img2.jpg")
global.imagen4 = fs.readFileSync("./media/menus/img3.jpg")
global.imagen5 = fs.readFileSync("./media/menus/img4.jpg")
global.imagen6 = fs.readFileSync("./media/menus/img5.jpg")
global.imagen7 = fs.readFileSync("./media/menus/img6.jpg")
global.imagen8 = fs.readFileSync("./media/menus/img7.jpg")
global.imagen9 = fs.readFileSync("./media/menus/img8.jpg")
global.imagen10 = fs.readFileSync("./media/menus/img9.jpg")
global.imagen11 = fs.readFileSync("./media/menus/img10.jpg")
global.imagen12 = fs.readFileSync("./media/menus/img11.jpg")
global.imagen13 = fs.readFileSync("./media/menus/img12.jpg")

global.img = 'https://telegra.ph/file/dd52a32069189173cc6a6.jpg'
global.img2 = 'https://telegra.ph/file/e55ab867dfdb82decc06e.jpg'

global.img3 = 'https://i.imgur.com/oUAGYc2.jpg' //prem
global.img4 = 'https://i.imgur.com/i0pccuo.jpg' //prem

global.img5 = 'https://i.imgur.com/iL1snRx.jpeg'
global.img6 = 'https://telegra.ph/file/fbbcfcae361649ba359dc.jpg'
global.img7 = 'https://telegra.ph/file/e3632fce546550e128365.jpg'
global.img8 = 'https://telegra.ph/file/c161fc5861a3964e2781f.jpg'
global.img9 = 'https://telegra.ph/file/e684ee6c07d4e53297e81.jpg'

global.img10 = 'https://i.imgur.com/DvHoMc3.jpg'
global.img11 = 'https://i.imgur.com/5Q1MqGD.jpg'
global.img12 = 'https://i.imgur.com/vWnsjh8.jpg'
global.img13 = 'https://telegra.ph/file/3793ea1c961d70363b45d.jpg'
global.img14 = 'https://telegra.ph/file/c9c8d37ae5bd30ab83980.jpg'
global.img15 = 'https://telegra.ph/file/f65fef900eb99a28c51dd.jpg'

global.img16 = 'https://telegra.ph/file/e8b42108168cfc8cfe02f.jpg' //+18

global.img17 = 'https://telegra.ph/file/a0f4f35368877e21a9316.jpg'
global.img18 = 'https://telegra.ph/file/1f61fa8705ed26ad32a11.jpg'

global.logogit = 'https://tinyurl.com/2qvl9vgs'

global.joanVidMenu = ['https://qu.ax/AAvg.mp4', 'https://qu.ax/SeFS.mp4', 'https://qu.ax/NqZN.mp4'].getRandom()
global.joanMenu = [img, img2, img6, img7, img8, img9, img13, img14, img15, img17, img18].getRandom()
global.joanImg = [imagen1, imagen2, imagen3, imagen4, imagen5, imagen6, imagen7, imagen8, imagen9, imagen10, imagen11, imagen12, imagen13].getRandom()

// Fake
global.fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }

global.fakeChannel = { contextInfo: { mentionedJid: null, forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: channelRD.id, serverMessageId: '', newsletterName: channelRD.name }, externalAdReply: { title: wm, body: vs, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: joanImg, thumbnail: imagen1, sourceUrl: accountsgb }}}, { quoted: m }
  
const estilo = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { orderMessage: { itemCount : -999999, status: 1, surface : 1, message: 'Super Bot WhatsApp', orderTitle: 'Bang', thumbnail: joanMenu, sellerJid: '0@s.whatsapp.net' }}}
const estiloaudio = { key: {  fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "5219992095479-1625305606@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99569", "ptt": "true"   
}}} 

//let bottime = `${name} 𝗧𝗜𝗠𝗘: ${moment.tz('America/Bogota').format('HH:mm:ss')}`//America/Los_Angeles

let ftroli = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { itemCount: 99, status: 1, surface: 1, message: wm, orderTitle: wm, sellerJid: '0@s.whatsapp.net' } } }
let fgif = {key: {participant : '0@s.whatsapp.net'}, message: {"videoMessage": { "title": wm, "h": `Hmm`, 'seconds': '999999999', 'gifPlayback': 'true', 'caption': bottime, 'jpegThumbnail': fs.readFileSync('./media/menus/Menu3.jpg')}}}
                             
let enlace = { contextInfo: { externalAdReply: {title: wm + ' 🐈', body: 'support group' , sourceUrl: redesMenu, thumbnail: await(await fetch(joanMenu)).buffer() }}}
let enlace2 = { contextInfo: { externalAdReply: { showAdAttribution: true, mediaUrl: yt, mediaType: 'VIDEO', description: '', title: wm, body: '𝗦𝘂𝗽𝗲𝗿 Yesith𝗕𝗼𝘁-𝗧𝗞 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', thumbnailUrl: joanMenu, sourceUrl: accountsgb }}}
let dos = [enlace, enlace2]  

global.wait = "⌛ *`Cargando...`*\n*✪✦✦⊹⊹⊹⊹⊹⊹⊹⊹✪* `20%`"
global.waitt = "⏳ *`Cargando....`*\n*✪✦✦✦✦⊹⊹⊹⊹⊹⊹✪* `40%`"
global.waittt = "⌛ *`Cargando...`*\n*✪✦✦✦✦✦✦⊹⊹⊹⊹✪* `60%`"
global.waitttt = "⏳ *`Cargando....`*\n*✪✦✦✦✦✦✦✦✦⊹⊹✪* `80%`"
global.waittttt = "⌛ *`Procesando...`*\n*✪✦✦✦✦✦✦✦✦✦✦✪* `100%`"

global.destraba = `⏰DESTRABA⏰*
li.DESTRAVip.to
2024 🦍💨

ဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪဪ
☣✝ﾚⅰɬ◊D͠Я◊ⅰD͠  D͠∑ㄅɬЯ∆√✝☣`
  
}
export default handler

// Mensaje de espera
// await mensajesEditados(conn, m)
global.mensajesEditados = async function(conn, m) {
const mensajes = [waitt, waittt, waitttt, waittttt]
key = await conn.sendMessage(m.chat, { text: wait, quoted: m })
for (let i = 0; i < mensajes.length; i++) {
await new Promise(resolve => setTimeout(resolve, 1000))
await conn.sendMessage(m.chat, { text: mensajes[i], edit: key })
}}

function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
  }
