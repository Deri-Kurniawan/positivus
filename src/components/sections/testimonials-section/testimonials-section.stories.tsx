import type { Meta, StoryObj } from "@storybook/react";

import data from "../../../data";
import TestimonialsSection from "./testimonials-section";

const meta = {
  title: "Components/Sections/TestimonialsSection",
  component: TestimonialsSection,
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
} satisfies Meta<typeof TestimonialsSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: data.testimonials,
  },
};
