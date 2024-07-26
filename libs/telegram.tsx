import TelegramBot from 'node-telegram-bot-api';

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_BOT_TOKEN;
// read the doc from https://github.com/yagop/node-telegram-bot-api to know how to catch the chatId
const chatId = process.env.TELEGRAM_CHAT_ID;

const bot = new TelegramBot(token, { polling: false });

const telegrambot = (message: any) => {
  try {
    bot.sendMessage(chatId, message, {
      parse_mode: 'HTML'
    });
  } catch (err) {
    console.log('Something went wrong when trying to send a Telegram notification', err);
  }
}

export {
  telegrambot
}