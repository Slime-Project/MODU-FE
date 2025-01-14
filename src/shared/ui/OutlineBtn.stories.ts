import OutlineBtn from './OutlineBtn';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/OutlineBtn',
  component: OutlineBtn,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    size: '2xs',
    active: true,
    children: '#집들이',
    onClick: () => {}
  }
} satisfies Meta<typeof OutlineBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sm: Story = {
  args: {
    size: 'sm'
  }
};
export const TwoXs: Story = {
  args: {
    size: '2xs'
  }
};

export const Active: Story = {
  args: {
    active: true
  }
};

export const Inactive: Story = {
  args: {
    active: false
  }
};
