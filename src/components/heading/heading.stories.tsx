import type { Meta, StoryObj } from "@storybook/react";

import Heading from "./heading";

const meta = {
  title: "Components/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "primary",
    children: "Label",
    asChild: false,
    level: 1,
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    children: <h1>H1 Tag</h1>,
  },
};

export const Level1: Story = {
  args: {
    level: 1,
  },
};

export const Level2: Story = {
  args: {
    level: 2,
  },
};

export const Level3: Story = {
  args: {
    level: 3,
  },
};

export const Level4: Story = {
  args: {
    level: 4,
  },
};

export const LevelP: Story = {
  args: {
    level: "p",
  },
};
