const handler = async (m, {conn}) => {
  m.reply(global.MixtoInterna4);
};
handler.command = /^(MixtoInterna4|MixtoInterna4)$/i;
export default handler;
handler.admin = true
handler.group = true
handler.botAdmin = true

global.MixtoInterna4 = `
│ *SALA INTERNA MIXTA*
│ *HORA : 10 🇵🇪 00 🇦🇷*
│ *MOD : VV2*
│
│ _ESCUADRA 1_
│
│•
│•
│•
│•.
│
│ _ESCUADRA 2_
│
│•
│•
│•
│•
│
│
│ _DONADOR O DONADORA DE SALA :_
`;
