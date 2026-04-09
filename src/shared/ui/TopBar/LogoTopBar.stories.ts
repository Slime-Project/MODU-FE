import LogoTopBar from './LogoTopBar';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/TopBar/LogoTopBar',
  component: LogoTopBar,
  tags: ['autodocs'],
  args: {
    percentage: 30
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} satisfies Meta<typeof LogoTopBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
