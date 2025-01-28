import type { Meta, StoryObj } from '@storybook/react';

import { TextInput } from '.';

const meta = {
  title: 'components/TextInput',
  component: TextInput,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    label: '',
    size: 'xs',
    placeholder: '입력해 주세요',
    value: '',
    onChange: () => {},
    maxLength: 30
  }
} satisfies Meta<typeof TextInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Xs: Story = {
  args: {
    size: 'xs'
  }
};

export const Value: Story = {
  args: {
    value: '안녕하세요'
  }
};

export const Center: Story = {
  args: {
    className: 'text-center'
  }
};
