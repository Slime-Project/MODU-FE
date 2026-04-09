import type { Meta, StoryObj } from '@storybook/react';

import ProgressBar from '.';

const meta = {
  title: 'components/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  args: {
    percentage: 30
  }
} satisfies Meta<typeof ProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
