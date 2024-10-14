import { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';
import { FaBell, FaUser, FaHeart } from 'react-icons/fa';
import { fn } from '@storybook/test';

const icons = { FaBell: <FaBell />, FaUser: <FaUser />, FaHeart: <FaHeart /> };

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: Object.keys(icons),
      mapping: icons,
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    color: { control: 'color' },
  },
  args: {
    icon: 'FaBell',
    size: 'medium',
    onClick: fn(),
  },
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    icon: <FaBell />,
    size: 'small',
  },
};

export const Large: Story = {
  args: {
    icon: <FaBell />,
    size: 'large',
  },
};

export const Custom: Story = {
  args: {
    icon: <FaBell />,
    size: '5rem',
  },
};
