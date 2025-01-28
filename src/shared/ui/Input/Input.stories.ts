import Input from './Input';

import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'components/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    label: '',
    size: 'xs',
    placeholder: '입력해 주세요',
    value: '',
    onChange: () => {}
  }
} satisfies Meta<typeof Input>;

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

export const Text: Story = {};

export const Number: Story = {
  args: {
    type: 'number'
  }
};

export const Center: Story = {
  args: {
    className: 'text-center'
  }
};
