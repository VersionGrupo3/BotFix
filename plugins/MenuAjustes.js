const handler = async (m, {conn}) => {
  m.reply(global.MenuAjustes);
};
handler.command = /^(MenuAjustes)$/i;
export default handler;
global.MenuAjustes = `
*╭━━━[ AJUSTES - CHATS ]━━━⬣*
┃⚙️ _${usedPrefix}on *:* off *bienvenida*_
┃⚙️ _${usedPrefix}on *:* off *avisos*_
┃⚙️ _${usedPrefix}on *:* off *restringir*_
┃⚙️ _${usedPrefix}on *:* off *antillamar*_
┃⚙️ _${usedPrefix}on *:* off *publico*_
┃⚙️ _${usedPrefix}on *:* off *autovisto*_
┃⚙️ _${usedPrefix}on *:* off *temporal*_
┃⚙️ _${usedPrefix}on *:* off *stickers*_
┃⚙️ _${usedPrefix}on *:* off *autosticker*_
┃⚙️ _${usedPrefix}on *:* off *reacciones*_
┃⚙️ _${usedPrefix}on *:* off *audios*_
┃⚙️ _${usedPrefix}on *:* off *modocaliente*_
┃⚙️ _${usedPrefix}on *:* off *antitoxicos*_
┃⚙️ _${usedPrefix}on *:* off *antiver*_
┃⚙️ _${usedPrefix}on *:* off *antieliminar*_
┃⚙️ _${usedPrefix}on *:* off *antinternacional*_
┃⚙️ _${usedPrefix}on *:* off *antienlace*_
┃⚙️ _${usedPrefix}on *:* off *antienlace2*_
┃⚙️ _${usedPrefix}on *:* off *antitiktok*_
┃⚙️ _${usedPrefix}on *:* off *antiyoutube*_
┃⚙️ _${usedPrefix}on *:* off *antitelegram*_
┃⚙️ _${usedPrefix}on *:* off *antifacebook*_
┃⚙️ _${usedPrefix}on *:* off *antinstagram*_
┃⚙️ _${usedPrefix}on *:* off *antitwitter*_
┃⚙️ _${usedPrefix}on *:* off *soloprivados*_
┃⚙️ _${usedPrefix}on *:* off *sologrupos*_
*╰━━━━━━━━━━━━⬣*

`;
