import type { Meta, StoryObj } from "@storybook/react";

import { expect } from "@storybook/test";
import data from "../../data";
import Navbar from "./navbar";
import styles from "./navbar.module.css";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {
    data: data.navlinks,
  },
} satisfies Meta<typeof Navbar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div style={{ width: "100%" }}>
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement, step }) => {
    await step("Render the navbar", async () => {
      const navbar = canvasElement.querySelector("nav");
      expect(navbar).toHaveClass(styles["navbar"]);
    });
  },
};
