import type { Meta, StoryObj } from "@storybook/react";

import { expect } from "@storybook/test";
import HeroSection from "./hero-section";
import styles from "./hero-section.module.css";

const meta = {
  title: "Components/Sections/HeroSection",
  component: HeroSection,
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
} satisfies Meta<typeof HeroSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    await step("Render the hero", async () => {
      const div = canvasElement.querySelector("section");
      expect(div).toHaveClass(styles["hero-section"]);
    });
  },
};
