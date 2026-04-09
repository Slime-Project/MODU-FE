import type { Meta, StoryObj } from '@storybook/react';

import Tag from '.';

const meta = {
  title: 'components/Tag',
  component: Tag,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    size: 'sm',
    children: '#집들이'
  }
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sm: Story = {
  args: {
    size: 'sm'
  }
};
