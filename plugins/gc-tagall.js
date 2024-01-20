const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `@𝗢𝗽𝘁𝗶𝗺𝘂𝘀.𝗩𝗲𝗻𝘁𝗮𝘀.𝗕𝗼𝘁${pesan}\n`;
  let teks = `𝐀𝐜𝐭𝐢𝐯𝐚𝐭𝐞 𝐀𝐬𝐪𝐮𝐞𝐫𝐨𝐬𝐚 𝐑𝐚𝐭𝐚 𝐍𝐨 𝐄𝐬𝐭𝐚𝐦𝐨𝐬 𝐏𝐚𝐫𝐚 𝐌𝐚𝐧𝐭𝐞𝐧𝐞𝐫𝐭𝐞 🌱\n\n${oi}\n`;
  for (const mem of participants) {
    teks += `ִ໋ღ @${mem.id.split('@')[0]}\n`;
  }
  teks += `\n〔 𝗕𝗟𝗢𝗗𝗜𝗘 𝗕𝗢𝗧 〕`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
