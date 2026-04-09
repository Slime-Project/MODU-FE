import { register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';

register(StyleDictionary);

const sd = new StyleDictionary({
  source: ['tokens/transform/*.json'],
  preprocessors: ['tokens-studio'],
  platforms: {
    css: {
      transformGroup: 'tokens-studio',
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
