let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let sticker = './src/sticker/hehe.webp'
conn.sendFile(m.chat, sticker, 'hehe.webp', null, m, true, {
type: 'MessageSticker', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /Hehehe|hehehe/
handler.command = new RegExp
module.exports = handler
