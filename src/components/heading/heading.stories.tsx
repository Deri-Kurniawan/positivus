import type { Meta, StoryObj } from "@storybook/react";

import Heading from "./heading";

const meta = {
  title: "Components/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "blue",
      values: [{ name: "blue", value: "#00aced" }],
    },
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    variant: "primary",
    children: "Label",
    asChild: false,
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    asChild: false,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    asChild: false,
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    asChild: false,
  },
};
