const handler = async (m, {conn}) => {
  m.reply(global.MenuDescargas);
};
handler.command = /^(MenuDescargas)$/i;
export default handler;
global.MenuDescargas = `
*╭━[ DESCARGAS | DOWNLOADS ]━⬣*
┃🚀➺ _${usedPrefix}Plataformas_
┃🚀➺ _${usedPrefix}cuevana  *textp*_
┃🚀➺ _${usedPrefix}imagen | image *texto*_
┃🚀➺ _${usedPrefix}pinterest | dlpinterest *texto*_
┃🚀➺ _${usedPrefix}wallpaper|wp *texto*_
┃🚀➺ _${usedPrefix}play | play2 *texto o link*_
┃🚀➺ _${usedPrefix}play.1 *texto o link*_
┃🚀➺ _${usedPrefix}play.2 *texto o link*_ 
┃🚀➺ _${usedPrefix}ytmp3 | yta *link*_
┃🚀➺ _${usedPrefix}ytmp4 | ytv *link*_
┃🚀➺ _${usedPrefix}pdocaudio | ytadoc *link*_
┃🚀➺ _${usedPrefix}pdocvieo | ytvdoc *link*_
┃🚀➺ _${usedPrefix}tw |twdl | twitter *link*_
┃🚀➺ _${usedPrefix}facebook | fb *link*_
┃🚀➺ _${usedPrefix}verig | igstalk *usuario(a)*_
┃🚀➺ _${usedPrefix}ighistoria | igstory *usuario(a)*_
┃🚀➺ _${usedPrefix}tiktok *link*_
┃🚀➺ _${usedPrefix}tiktokimagen | ttimagen *link*_
┃🚀➺ _${usedPrefix}tiktokfoto | tiktokphoto *usuario(a)*_
┃🚀➺ _${usedPrefix}vertiktok | tiktokstalk *usuario(a)*_
┃🚀➺ _${usedPrefix}mediafire | dlmediafire *link*_
┃🚀➺ _${usedPrefix}clonarepo | gitclone *link*_
┃🚀➺ _${usedPrefix}clima *país ciudad*_
┃🚀➺ _${usedPrefix}consejo_
┃🚀➺ _${usedPrefix}morse codificar *texto*_
┃🚀➺ _${usedPrefix}morse decodificar *morse*_
┃🚀➺ _${usedPrefix}fraseromantica_
┃🚀➺ _${usedPrefix}historia_
*╰━━━━━━━━━━━━⬣*
`;
