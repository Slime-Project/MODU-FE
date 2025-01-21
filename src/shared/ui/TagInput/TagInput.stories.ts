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
    type: 'radio',
    size: 'sm',
    name: 'ageGroup',
    label: '#10대',
    value: '#10대',
    onChange: () => {}
  }
} satisfies Meta<typeof TagInput>;

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
