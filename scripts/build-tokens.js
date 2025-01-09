import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

register(StyleDictionary);

const customTypographyTransform = {
  name: 'custom/typography',
  type: 'value',
  transform: token => {
    if (typeof token.original.value === 'object') {
      return { css: token.original.value };
    }

    return token.original.value;
  }
};

StyleDictionary.registerTransform(customTypographyTransform);

const sd = new StyleDictionary({
  source: ['tokens/transform/*.json'],
  preprocessors: ['tokens-studio'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
      transforms: ['custom/typography'],
      buildPath: 'tokens/build/',
      files: [
        {
          destination: 'global.json',
          format: 'json'
        }
      ]
    }
  }
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
