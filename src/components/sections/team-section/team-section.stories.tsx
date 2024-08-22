import type { Meta, StoryObj } from "@storybook/react";

import data from "../../../data";
import TeamSection from "./team-section";

const meta = {
  title: "Components/Sections/TeamSection",
  component: TeamSection,
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
} satisfies Meta<typeof TeamSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: data.team,
  },
};
