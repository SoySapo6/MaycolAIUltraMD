// ╭─────────────────────⊷
// │ 𖥔 MaycolAIUltraMD - Configuración
// │ Tematizado al estilo Hanako-Kun (◍•ᴗ•◍)❤
// Hecho por SoyMaycol - NO QUITAR CREDITOS NI EL MISMO SOYMAYCOL
// ╰─────────────────────⊷

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import fs from 'fs'
import cheerio from 'cheerio'
import fetch from 'node-fetch'
import axios from 'axios'
import moment from 'moment-timezone'

// ╭── ✦ Número de Bot ✦ ──⊷
global.botNumber = '' // Ejemplo: 51921826291

// ╭── ✦ Propietario y Staff ✦ ──⊷
global.owner = ['51921826291']
global.mods = []
global.suittag = []
global.prems = []
global.creador = '51921826291'
global.namechannel = '𝐒𝐨𝐲𝐌𝐚𝐲𝐜𝐨𝐥 <𝟑 • Actualizaciones'
global.namechannel2 = '𝐒𝐨𝐲𝐌𝐚𝐲𝐜𝐨𝐥 <𝟑 • Actualizaciones'
global.namegrupo = '𝐒𝐨𝐲𝐌𝐚𝐲𝐜𝐨𝐥 <𝟑 • Actualizaciones'
global.namecomu = '𝐒𝐨𝐲𝐌𝐚𝐲𝐜𝐨𝐥 <𝟑 • Actualizaciones'
global.apodo = '𝚂𝚘𝚢𝙼𝚊𝚢𝚌𝚘𝚕 <𝟹'
global.repo = 'SoySapo6/MaycolAIUltraMD'
global.pais = '⊹˚• Perú •˚⊹'
global.github = 'SoySapo6'

// ╭── ✦ Información del Bot ✦ ──⊷
global.libreria = 'MayBailyes'
global.baileys = 'V 6.7.16'
global.vs = '2.2.0'
global.nameqr = 'SoyMaycol'
global.namebotttt = 'MaycolAIUltraMD'
global.namebot = '𝐌𝐚𝐲𝐜𝐨𝐥𝐀𝐈𝐔𝐥𝐭𝐫𝐚-𝐌𝐃'
global.personaje = 'Hanako Kun'
global.sessions = './MayBots/Principal'
global.jadi = 'MayBots'
global.yukiJadibts = true

// ╭── ✦ Personalización Visual ✦ ──⊷
global.packname = '𝕄𝕒𝕪𝕔𝕠𝕝𝔸𝕀𝕌𝕝𝕥𝕣𝕒-𝕄𝔻'
global.botname = '𝐌𝐚𝐲𝐜𝐨𝐥𝐀𝐈𝐔𝐥𝐭𝐫𝐚-𝐌𝐃'
global.wm = '𝙼𝚊𝚢𝚌𝚘𝚕𝙰𝙸𝚄𝚕𝚝𝚛𝚊-𝙼𝙳'
global.author = '𝙃𝙚𝙘𝙝𝙤 𝙥𝙤𝙧 𝙎𝙤𝙮𝙈𝙖𝙮𝙘𝙤𝙡 <3'
global.dev = global.author
global.textbot = '𝐌𝐚𝐲𝐜𝐨𝐥𝐀𝐈𝐔𝐥𝐭𝐫𝐚-𝐌𝐃 • 𝙃𝙚𝙘𝙝𝙤 𝙥𝙤𝙧 𝙎𝙤𝙮𝙈𝙖𝙮𝙘𝙤𝙡 <3'
global.etiqueta = '𝙼𝚊𝚢𝚌𝚘𝚕𝙰𝙸'
global.listo = 'Aca lo tienes ୧⁠(⁠＾⁠ ⁠〰⁠ ⁠＾⁠)⁠୨'
global.rwait = '🕒'
global.done = '🇯🇵'
global.error = '🈲'
global.msm = '⚠︎'
global.emoji = '🇯🇵'
global.emoji2 = '💕'
global.emoji3 = '😍'
global.emoji4 = '🥴'
global.emoji5 = '👻'
global.wait = '¡Esperame (⁠´⁠∩⁠｡⁠•⁠ ⁠ᵕ⁠ ⁠•⁠｡⁠∩⁠`⁠)!';
global.waitt = '¡Esperame (⁠´⁠∩⁠｡⁠•⁠ ⁠ᵕ⁠ ⁠•⁠｡⁠∩⁠`⁠)!';
global.waittt = '¡Esperame (⁠´⁠∩⁠｡⁠•⁠ ⁠ᵕ⁠ ⁠•⁠｡⁠∩⁠`⁠)!';
global.waitttt = '¡Esperame (⁠´⁠∩⁠｡⁠•⁠ ⁠ᵕ⁠ ⁠•⁠｡⁠∩⁠`⁠)!';

// ╭── ✦ Configuración General ✦ ──⊷
global.moneda = 'MayCoins'
global.welcom1 = '❍ Edita Con El Comando setwelcome'
global.welcom2 = '❍ Edita Con El Comando setbye'
global.banner = 'https://files.catbox.moe/l8ohvs.jpeg'
global.banner2 = 'https://files.catbox.moe/l8ohvs.jpeg'
global.avatar = 'https://files.catbox.moe/uvc28a.jpeg'
global.video = 'https://files.catbox.moe/ks0qz0.mp4'
global.video2 = [
  'https://files.catbox.moe/i74z9e.mp4'
]
global.icono = 'https://files.catbox.moe/wnx3j7.jpeg'

// ╭── ✦ Enlaces Oficiales ✦ ──⊷
global.gp1 = 'https://chat.whatsapp.comEprzCjr7XFyAIFr9OfBh2o'
global.comunidad1 = 'https://whatsapp.com/channel/0029VayXJte65yD6LQGiRB0R'
global.channel = global.comunidad1
global.channel2 = global.comunidad1
global.md = 'https://github.com/SoySapo6/MaycolAI'
global.correo = 'karatekidamericatv@gmail.com'
global.cn = global.comunidad1
global.owner_ngl = 'soymaycoldev'
global.canalIdM = ["120363372883715167@newsletter"]
global.canalNombreM = ["𝐒𝐨𝐲𝐌𝐚𝐲𝐜𝐨𝐥 <𝟑 • Actualizaciones"]
global.canalLink = ["https://whatsapp.com/channel/0029VayXJte65yD6LQGiRB0R"]

// ╭── ✦ Catálogo y Estilo ✦ ──⊷
global.catalogo = fs.readFileSync('./src/catalogo.jpg')
global.estilo = {
  key: { fromMe: false, participant: '0@s.whatsapp.net' },
  message: {
    orderMessage: {
      itemCount: -999999,
      status: 1,
      surface: 1,
      message: global.packname,
      orderTitle: 'Bang',
      thumbnail: global.catalogo,
      sellerJid: '0@s.whatsapp.net'
    }
  }
}

// ╭── ✦ Otros Ajustes ✦ ──⊷
global.ch = {
  ch1: '120363372883715167@newsletter'
}
global.multiplier = 70
global.activeSocket = null
global.comandosEnMantenimiento = global.comandosEnMantenimiento || []

// ╭── ✦ Librerías Globales ✦ ──⊷
global.cheerio = cheerio
global.fs = fs
global.fetch = fetch
global.axios = axios
global.moment = moment

// ╭── ✦ Recarga Automática ✦ ──⊷
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("⭑ Hanako dice: Se actualizó 'settings.js' ⭑"))
  import(`${file}?update=${Date.now()}`)
})
  
