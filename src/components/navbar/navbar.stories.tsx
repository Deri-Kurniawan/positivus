import type { Meta, StoryObj } from "@storybook/react";

import { expect, userEvent } from "@storybook/test";
import data from "../../data";
import Navbar from "./navbar";
import styles from "./navbar.module.css";

const meta = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "center",
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

export const Desktop: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile",
    },
  },
  play: async ({ canvasElement, step }) => {
    await step("Navbar Menu is closed and hidden by Default", () => {
      const menu = canvasElement.querySelector(
        `.${styles["navbar__menu"]}`
      ) as HTMLElement;
      expect(menu).toHaveAttribute("aria-hidden", "true");
    });

    await step("Open the Menu", async () => {
      const button = canvasElement.querySelector(
        `.${styles["navbar__toggle-menu"]}`
      ) as HTMLButtonElement;

      await userEvent.click(button);

      const menu = canvasElement.querySelector(
        `.${styles["navbar__menu"]}`
      ) as HTMLElement;

      expect(menu).toHaveAttribute("aria-hidden", "false");
    });

    await step("Close the Menu", async () => {
      const button = canvasElement.querySelector(
        `.${styles["navbar__toggle-menu"]}`
      ) as HTMLButtonElement;

      const menu = canvasElement.querySelector(
        `.${styles["navbar__menu"]}`
      ) as HTMLElement;

      await userEvent.click(button);

      expect(menu).toHaveAttribute("aria-hidden", "true");
    });
  },
};
