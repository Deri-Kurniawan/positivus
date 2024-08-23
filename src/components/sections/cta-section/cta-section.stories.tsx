import type { Meta, StoryObj } from "@storybook/react";

import CtaSection from "../cta-section/cta-section";

const meta = {
  title: "Components/Sections/CtaSection",
  component: CtaSection,
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
} satisfies Meta<typeof CtaSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
