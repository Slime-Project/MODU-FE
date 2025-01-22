import type { Meta, StoryObj } from '@storybook/react';

import BottomBtn from '.';

const meta = {
  title: 'components/BottomBtn',
  component: BottomBtn,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],

  args: {
    disabled: false,
    children: '다음',
    onClick: () => {}
  }
} satisfies Meta<typeof BottomBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
