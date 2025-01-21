import type { Meta, StoryObj } from '@storybook/react';

import Input from '.';

const meta = {
  title: 'components/Input',
  component: Input,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    size: 'xs',
    placeholder: '입력해 주세요',
    value: '',
    onChange: () => {},
    maxLength: 30
  }
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Xs: Story = {
  args: {
    size: 'xs'
  }
};

export const TwoXs: Story = {
  args: {
    size: '2xs'
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
