import type { Meta, StoryObj } from "@storybook/react";

import data from "../../../data";
import CompanySection from "./company-section";

const meta = {
  title: "Components/Sections/CompanySection",
  component: CompanySection,
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
} satisfies Meta<typeof CompanySection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: data.companies,
  },
};
