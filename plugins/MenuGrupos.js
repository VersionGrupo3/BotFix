const handler = async (m, {conn}) => {
  m.reply(global.MenuGrupos);
};
handler.command = /^(MenuGrupos)$/i;
export default handler;
global.MenuGrupos = `
*╭━[ CONFIGURACIÓN - GRUPOS ]━⬣*
┃🌐➺ _${usedPrefix}crearvoto | startvoto *texto*_
┃🌐➺ _${usedPrefix}sivotar | upvote_
┃🌐➺ _${usedPrefix}novotar | devote_
┃🌐➺ _${usedPrefix}vervotos | cekvoto_
┃🌐➺ _${usedPrefix}delvoto | deletevoto_
┃🌐➺ _${usedPrefix}configuracion_
┃🌐➺ _${usedPrefix}settings_
┃🌐➺ _${usedPrefix}vergrupo_
┃🌐➺ _${usedPrefix}add *numero*_
┃🌐➺ _${usedPrefix}sacar | ban | kick  *@tag*_
┃🌐➺ _${usedPrefix}grupo *abrir : cerrar*_
┃🌐➺ _${usedPrefix}group *open : close*_
┃🌐➺ _${usedPrefix}daradmin | promote *@tag*_
┃🌐➺ _${usedPrefix}quitar | demote *@tag*_
┃🌐➺ _${usedPrefix}banchat_
┃🌐➺ _${usedPrefix}unbanchat_
┃🌐➺ _${usedPrefix}banuser *@tag*_
┃🌐➺ _${usedPrefix}unbanuser *@tag*_
┃🌐➺ _${usedPrefix}admins *texto*_
┃🌐➺ _${usedPrefix}invocar *texto*_
┃🌐➺ _${usedPrefix}tagall *texto*_
┃🌐➺ _${usedPrefix}hidetag *texto*_
┃🌐➺ _${usedPrefix}infogrupo | infogroup_
┃🌐➺ _${usedPrefix}grupotiempo | grouptime *Cantidad*_
┃🌐➺ _${usedPrefix}advertencia *@tag*_
┃🌐➺ _${usedPrefix}deladvertencia *@tag*_
┃🌐➺ _${usedPrefix}delwarn *@tag*_
┃🌐➺ _${usedPrefix}crearvoto | startvoto *texto*_
┃🌐➺ _${usedPrefix}sivotar | upvote_
┃🌐➺ _${usedPrefix}novotar | devote_
┃🌐➺ _${usedPrefix}vervotos | cekvoto_
┃🌐➺ _${usedPrefix}delvoto | deletevoto_
┃🌐➺ _${usedPrefix}enlace | link_
┃🌐➺ _${usedPrefix}newnombre | nuevonombre *texto*_
┃🌐➺ _${usedPrefix}newdesc | descripcion *texto*_
┃🌐➺ _${usedPrefix}setwelcome | bienvenida *texto*_
┃🌐➺ _${usedPrefix}setbye | despedida *texto*_
┃🌐➺ _${usedPrefix}nuevoenlace | resetlink_
┃🌐➺ _${usedPrefix}on_
┃🌐➺ _${usedPrefix}off_
*╰━━━━━━━━━━━━⬣*

`;
