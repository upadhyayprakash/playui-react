import { Meta, StoryObj } from '@storybook/react';
import Card from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    // Here you can define custom controls for the component props
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    title: 'Simple Card',
    children: (
      <p>
        Play-UI is a modern, lightweight React component library designed for seamless frontend
        development. It offers customizable and accessible components in dark and light themes.
      </p>
    ),
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning Card',
    children: (
      <p>
        Play-UI is a modern, lightweight React component library designed for seamless UI
        development. It offers customizable, accessible components with support for dark and light
        themes, enhancing user experience effortlessly.
      </p>
    ),
  },
};
