import type { Meta, StoryObj } from "@storybook/react";

import data from "../../data";
import Navbar from "./navbar";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
  args: {
    data: data.navlinks,
  },
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
