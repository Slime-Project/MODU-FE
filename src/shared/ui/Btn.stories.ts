import Btn from './Btn';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/Btn',
  component: Btn,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],

  args: {
    size: 'base',
    disabled: false,
    children: '다음'
  }
} satisfies Meta<typeof Btn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    size: 'base'
  }
};

export const Sm: Story = {
  args: {
    size: 'sm'
  }
};

export const Xs: Story = {
  args: {
    size: 'xs'
  }
};

export const Shadow: Story = {
  args: {
    shadow: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
