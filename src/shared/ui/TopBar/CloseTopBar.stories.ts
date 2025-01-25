import CloseTopBar from './CloseTopBar';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/TopBar/CloseTopBar',
  component: CloseTopBar,
  tags: ['autodocs'],
  args: { close: () => {}, title: '리뷰 상세보기' },
  parameters: {
    backgrounds: {
      default: 'dark'
    }
  }
} satisfies Meta<typeof CloseTopBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
