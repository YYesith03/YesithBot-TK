let handler = async (m, { conn, text, args, participants, usedPrefix, command }) => {	
let a = []
let b = text.split('|')

if (!b[0]) return conn.reply(m.chat, `${mg}𝙐𝙎𝙀 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙇𝘼 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝙁𝙊𝙍𝙈𝘼\n*${usedPrefix + command} Motivo de Encuesta|texto1|texto2|texto3....*\n\n𝙐𝙎𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝘼𝙎 𝙁𝙊𝙇𝙇𝙊𝙒𝙎\n*${usedPrefix + command} Survey Reason|text1|text2|text3....*`, fkontak, m) 
if (!b[1]) return conn.reply(m.chat, `${mg}𝙋𝘼𝙍𝘼 𝘾𝙍𝙀𝘼𝙍 𝙊𝙋𝘾𝙄𝙊𝙉𝙀𝙎 𝙀𝙉 𝙇𝘼 𝙀𝙉𝘾𝙐𝙀𝙎𝙏𝘼 𝙐𝙎𝙀 *" | "*\n*${usedPrefix + command} Motivo de Encuesta|texto1|texto2|texto3....*\n\n𝙏𝙊 𝘾𝙍𝙀𝘼𝙏𝙀 𝙊𝙋𝙏𝙄𝙊𝙉𝙎 𝙄𝙉 𝙏𝙃𝙀 𝙎𝙐𝙍𝙑𝙀𝙔 𝙐𝙎𝙀 *" | "*\n*${usedPrefix + command} Survey Reason|text1|text2|text3....*`, fkontak, m)
if (b[13]) return conn.reply(m.chat, `${fg}𝙈𝘼𝙓𝙄𝙈𝙊 *12* 𝙊𝙋𝘾𝙄𝙊𝙉𝙀𝙎!!\n\n𝙐𝙎𝙀 𝙀𝙇 𝘾𝙊𝙈𝘼𝙉𝘿𝙊 𝘿𝙀 𝙇𝘼 𝙎𝙄𝙂𝙐𝙄𝙀𝙉𝙏𝙀 𝙁𝙊𝙍𝙈𝘼\n*${usedPrefix + command} Motivo de Encuesta|texto1|texto2|texto3....*\n\n𝙈𝘼𝙓𝙄𝙈𝙐𝙈 *12* 𝙊𝙋𝙏𝙄𝙊𝙉𝙎!!\n\n𝙐𝙎𝙀 𝙏𝙃𝙀 𝘾𝙊𝙈𝙈𝘼𝙉𝘿 𝘼𝙎 𝙁𝙊𝙇𝙇𝙊𝙒𝙎\n*${usedPrefix + command} Survey Reason|text1|text2|text3....*`, fkontak, m)

for (let c = 1; c < b.length; c++) { a.push([b[c]]) }
let texto = `📊 𝙀𝙉𝘾𝙐𝙀𝙎𝙏𝘼 𝘾𝙍𝙀𝘼𝘿𝘼 𝙋𝙊𝙍\n*❤️⇢ ${conn.getName(m.sender)}*\n*${text.split('|')[0]}*`

return conn.sendPoll(m.chat, texto, a, {mentions: m})}
handler.command = ['poll', 'encuesta', 'crearencuesta', 'startpoll', 'encuestas', 'polls'] 
export default handler
