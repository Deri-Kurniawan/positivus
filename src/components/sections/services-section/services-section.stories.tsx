import type { Meta, StoryObj } from "@storybook/react";

import data from "../../../data";
import ServicesSection from "./services-section";

const meta = {
  title: "Components/Sections/ServicesSection",
  component: ServicesSection,
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
} satisfies Meta<typeof ServicesSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: data.services,
  },
};
