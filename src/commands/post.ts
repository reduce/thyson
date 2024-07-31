import { Context, Markup, Telegraf } from 'telegraf';
import createDebug from 'debug';
import { author, name, version } from '../../package.json';
import { description } from '../text';

const debug = createDebug('bot:post_command');

const openKeyboard = Markup.inlineKeyboard([
  Markup.button.url('Open App →', 'https://app.sell.rocks/telegram'),
])

const post = (bot: Telegraf) => async (ctx: Context) => {
  // await bot.telegram.sendMessage('-1002222921096', `*Welcome to SELL!*\n\n`, {
  //   parse_mode: 'Markdown'
  // })
  // await bot.telegram.sendMessage('-1002222921096', description, openKeyboard)
};

export { post };
