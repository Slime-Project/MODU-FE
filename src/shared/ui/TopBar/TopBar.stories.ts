import TopBar from './TopBar';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/TopBar/TopBar',
  component: TopBar,
  tags: ['autodocs'],
  args: {
    title: '선물 모음 상세보기'
  },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} satisfies Meta<typeof TopBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithSearchLink: Story = {};

export const WithoutSearchLink: Story = {
  args: {
    hasSearchLink: false
  }
};
