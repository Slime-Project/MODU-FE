import { makeSdTailwindConfig } from 'sd-tailwindcss-transformer';
import StyleDictionary from 'style-dictionary';

const styleDictionaryTailwind = new StyleDictionary(
  makeSdTailwindConfig({
    type: 'all',
    source: ['tokens/build/*.json'],
    buildPath: '',
    formatType: 'cjs'
  })
);

await styleDictionaryTailwind.hasInitialized;
await styleDictionaryTailwind.buildAllPlatforms();
