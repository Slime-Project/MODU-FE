import type { Meta, StoryObj } from '@storybook/react';

import WishBtn from '.';

const meta = {
  title: 'components/WishBtn',
  component: WishBtn,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs'],
  args: {
    size: 'lg',
    color: 'gray',
    isWished: false,
    toggleWish: () => {}
  }
} satisfies Meta<typeof WishBtn>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sm: Story = {
  args: {
    size: 'sm'
  }
};

export const Md: Story = {
  args: {
    size: 'md'
  }
};

export const Lg: Story = {
  args: {
    size: 'lg'
  }
};

export const White: Story = {
  args: {
    color: 'white'
  }
};

export const Wished: Story = {
  args: {
    isWished: true
  }
};

export const Shadow: Story = {
  args: {
    className: 'bg-white p-1.5 rounded-full shadow'
  }
};
