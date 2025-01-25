import type { Preview } from '@storybook/react';
import 'src/app/globals.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    values: [{ name: 'dark', value: '#bdbdbd' }]
  }
};

export default preview;
