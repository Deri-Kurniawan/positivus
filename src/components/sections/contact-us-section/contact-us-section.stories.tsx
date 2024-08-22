import type { Meta, StoryObj } from "@storybook/react";

import ContactUsSection from "./contact-us-section";

const meta = {
  title: "Components/Sections/ContactUsSection",
  component: ContactUsSection,
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
  args: {
    demoStory: true,
  },
} satisfies Meta<typeof ContactUsSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
