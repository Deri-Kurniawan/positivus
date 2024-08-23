import type { Meta, StoryObj } from "@storybook/react";

import data from "../../../data";
import OurWorkingProcessSection from "./our-working-process-section";

const meta = {
  title: "Components/Sections/OurWorkingProcessSection",
  component: OurWorkingProcessSection,
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
} satisfies Meta<typeof OurWorkingProcessSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: data.ourWorkingProcess,
  },
};
