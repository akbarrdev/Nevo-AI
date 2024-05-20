const TelegramBot = require("node-telegram-bot-api");
const nevo = require("nevo-ai");

const token = "YOUR_TELEGRAM_BOT_TOKEN";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;

  if (msg.text) {
    const prompt = msg.text;

    try {
      const response = await nevo.ask({ apiKey: "YOUR_NEVO_API_KEY", prompt });
      bot.sendMessage(chatId, response);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      bot.sendMessage(
        chatId,
        "Sorry, there was an error fetching AI response."
      );
    }
  }
});

bot.on("polling_error", (error) => {
  console.error(error);
});

console.log("Bot started polling");
