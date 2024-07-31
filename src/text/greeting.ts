import { Context, Input, Markup, Telegraf } from 'telegraf';
import createDebug from 'debug';

const debug = createDebug('bot:greeting_text');

export const description = 'Buy and sell with others on the Telegram Open Network.\n \n'

export const replyToMessage = (ctx: Context, messageId: number, string: string) => {
  ctx.reply(string, {
    reply_parameters: { message_id: messageId },
  });
}

const greeting = (bot: Telegraf) => async (ctx: Context) => {
  debug('Triggered "greeting" text command');

  const messageId = ctx.message?.message_id;
  const userName = `${ctx.message?.from.first_name || ctx.message?.from.username}`;

  if (messageId) {
    await ctx.replyWithPhoto(Input.fromURL('https://sell.rocks/thumbnail.png'))

    await ctx.reply(`Hey, *${userName}!*\n\nWelcome to _SELL!_\n\n${description}`, {
      parse_mode: 'Markdown',
      reply_markup: {
        inline_keyboard: [
          [{ web_app: { url: 'https://app.sell.rocks/telegram' }, text: 'Open App →' }],
        ]
      }
    });
  }
};

export { greeting };
