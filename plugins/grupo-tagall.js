let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = ``
let teks = `╭━〔 𝗔𝗰𝘁𝗶𝘃𝗮𝘁𝗲 𝗣𝗹𝗮𝗻𝘁𝗶𝘁𝗮 𝗗𝗲 𝗠𝗿𝗱 〕━⬣\n\n${oi}\n\n`
for (let mem of participants) {
teks += `┃ღ @${mem.id.split('@')[0]}\n`}
teks += `┃\n`
teks += `╰━━━━━[ 𝗢𝗽𝘁𝗶𝗺𝘂𝘀 𝗕𝗼𝘁 ]━━━━━⬣`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )  
}
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
