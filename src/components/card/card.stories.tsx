import type { Meta, StoryObj } from "@storybook/react";

import Card from "./card";
import { expect } from "@storybook/test";
import styles from "./card.module.css";

const meta = {
  title: "Components/Card",
  component: Card,
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
    asChild: false,
    withShadow: true,
    withBorder: true,
  },
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
  play: async ({ canvasElement, step }) => {
    await step("Render the card with primary variant", async () => {
      const card = canvasElement.querySelector("div");
      expect(card).toHaveClass(styles["card--primary"]);
    });
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
  play: async ({ canvasElement, step }) => {
    await step("Render the card with secondary variant", async () => {
      const card = canvasElement.querySelector("div");
      expect(card).toHaveClass(styles["card--secondary"]);
    });
  },
};

export const Tertiary: Story = {
  args: {
    variant: "tertiary",
  },
  play: async ({ canvasElement, step }) => {
    await step("Render the card with tertiary variant", async () => {
      const card = canvasElement.querySelector("div");
      expect(card).toHaveClass(styles["card--tertiary"]);
    });
  },
};

export const AsChild: Story = {
  args: {
    asChild: true,
    children: <section />,
  },
  play: async ({ canvasElement, step }) => {
    await step("Render card with section element as child", async () => {
      const card = canvasElement.querySelector("section");
      expect(card).toHaveClass(styles["card"]);
    });
  },
};
