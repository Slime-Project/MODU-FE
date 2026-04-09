const EMOJIS = {
  zanyFace: '\uD83E\uDD2A',
  gemStone: '\uD83D\uDC8E',
  loveLetter: '\uD83D\uDC8C',
  robot: '\uD83E\uDD16',
  fire: '\uD83D\uDD25'
};

type Emoji = keyof typeof EMOJIS;

export { EMOJIS };
export type { Emoji };
