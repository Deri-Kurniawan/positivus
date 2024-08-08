import type { Meta, StoryObj } from "@storybook/react";

import Heading from "./typography";

const meta = {
  title: "Components/Typography",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
    children: "Typography",
    asChild: false,
    level: "p",
  },
} satisfies Meta<typeof Heading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Heading1: Story = {
  args: {
    level: 1,
  },
};

export const Heading2: Story = {
  args: {
    level: 2,
  },
};

export const Heading3: Story = {
  args: {
    level: 3,
  },
};

export const Heading4: Story = {
  args: {
    level: 4,
  },
};

export const Paragraph: Story = {
  args: {
    level: "p",
  },
};
