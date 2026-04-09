import type { Meta, StoryObj } from '@storybook/react';

import PrimaryLink from '.';

const meta = {
  title: 'components/PrimaryLink',
  component: PrimaryLink,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    size: 'base',
    children: '선물 보러가기',
    href: ''
  }
} satisfies Meta<typeof PrimaryLink>;

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
