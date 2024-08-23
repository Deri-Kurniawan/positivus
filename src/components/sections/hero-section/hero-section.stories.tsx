import type { Meta, StoryObj } from "@storybook/react";

import HeroSection from "./hero-section";

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

export const Default: Story = {};
