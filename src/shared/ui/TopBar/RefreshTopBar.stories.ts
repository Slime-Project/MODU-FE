import RefreshTopBar from './RefreshTopBar';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/TopBar/RefreshTopBar',
  component: RefreshTopBar,
  tags: ['autodocs'],
  args: {
    title: 'AI 선물 추천 결과',
    refresh: () => {}
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} satisfies Meta<typeof RefreshTopBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
