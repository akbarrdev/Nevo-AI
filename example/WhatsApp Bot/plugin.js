const nevo = require("nevo-ai")

const handler = async (m, { conn, args, usedPrefix, command }) => {
  let text =
    args.length >= 1
      ? args.join(" ")
      : (m.quoted && m.quoted.text) ||
        (() => {
          throw "Input Teks";
        })();

  await m.reply(wait);

  try {
    const data = await nevo.ask({apikey: "YOUR-APIKEY", prompt: input});
    if (data) await m.reply(data.result);
  } catch (e) {
    await m.reply(eror);
  }
};

handler.help = ["blackboxchat"];
handler.tags = ["ai"];
handler.command = /^(blackboxchat)$/i;

export default handler;
