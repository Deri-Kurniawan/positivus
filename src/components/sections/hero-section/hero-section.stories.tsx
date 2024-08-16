import type { Meta, StoryObj } from "@storybook/react";

import { expect } from "@storybook/test";
import Hero from "./hero-section";
import styles from "./hero-section.module.css";

const meta = {
  title: "Components/Sections/HeroSection",
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
      const div = canvasElement.querySelector("section");
      expect(div).toHaveClass(styles["hero"]);
    });
  },
};
