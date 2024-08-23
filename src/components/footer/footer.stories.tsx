import type { Meta, StoryObj } from "@storybook/react";

import data from "../../data";
import Footer from "./footer";

const meta = {
  title: "Components/Footer",
  component: Footer,
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navLinks: data.navlinks,
    socialMedia: data.socialMedia,
  },
};
