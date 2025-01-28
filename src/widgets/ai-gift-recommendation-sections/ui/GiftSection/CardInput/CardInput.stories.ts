import type { Meta, StoryObj } from '@storybook/react';

import TagInput from '.';

const meta = {
  title: 'components/TagInput',
  component: TagInput,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    name: 'ageGroup',
    label: 'card',
    value: 'card',
    emoji: 'gemStone',
    onChange: () => {}
  }
} satisfies Meta<typeof TagInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
