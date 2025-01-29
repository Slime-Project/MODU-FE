import type { Meta, StoryObj } from '@storybook/react';

import CardInput from '.';

const meta = {
  title: 'components/CardInput',
  component: CardInput,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    name: 'ageGroup',
    label: 'card',
    value: 'card',
    emoji: 'gemStone',
    checked: true,
    onChange: () => {}
  }
} satisfies Meta<typeof CardInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    checked: true
  }
};
export const Unchecked: Story = {
  args: {
    checked: false
  }
};
