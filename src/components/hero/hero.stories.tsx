import type { Meta, StoryObj } from "@storybook/react";

import Hero from "./hero";
import { expect } from "@storybook/test";
import styles from "./hero.module.css";

const meta = {
  title: "Components/Hero",
  component: Hero,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Hero>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    await step("Render the hero", async () => {
      const div = canvasElement.querySelector("div");
      expect(div).toHaveClass(styles["hero"]);
    });
  },
};
