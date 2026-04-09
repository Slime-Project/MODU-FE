import SearchTopBar from './SearchTopBar';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/TopBar/SearchTopBar',
  component: SearchTopBar,
  tags: ['autodocs'],
  args: {
    onSubmit: () => {}
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} satisfies Meta<typeof SearchTopBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
