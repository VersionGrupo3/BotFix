ºconst handler = async (m, {conn}) => {
  m.reply(global.FormularioTh);
};
handler.command = /^(FormularioTh)$/i;
export default handler;
global.FormularioTh = `

*LLENAR FORMULARIO*

*NICK FF :*
*NICK PERSONAL :*
*EDAD :*
*DISPONIBILIDAD DE TIEMPO :*
*EXP EN VV2 :*
*EXP EN MAPA :*


*Nota : Recuerda Una Vez Hayas Pasado El Formulario Se Te Hara Prueba En Vv2 Si Mandas Ig O Tus Clips De Ahora Entras Directo*

`;