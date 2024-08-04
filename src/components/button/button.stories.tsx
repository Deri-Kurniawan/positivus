import type { Meta, StoryObj } from "@storybook/react";
import { expect, within } from "@storybook/test";
import Button from "./button";
import styles from "./button.module.css";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {
    variant: "primary",
    children: "Label",
    asChild: false,
    disabled: false,
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  // args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    asChild: false,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Render the button", async () => {
      const button = canvas.getByRole("button");
      expect(button).toHaveTextContent("Label");
      expect(button).toHaveClass(styles["button"]);
      expect(button).toHaveClass(styles["button--primary"]);
    });

    await step("Check the button is disabled", async () => {
      const button = canvas.getByRole("button");
      button.setAttribute("disabled", "true");
      expect(button).toBeDisabled();
      button.removeAttribute("disabled");
    });
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Render the button", async () => {
      const button = canvas.getByRole("button");
      await expect(button).toHaveTextContent("Label");
      await expect(button).toHaveClass(styles["button"]);
      await expect(button).toHaveClass(styles["button--secondary"]);
    });

    await step("Check the button is disabled", async () => {
      const button = canvas.getByRole("button");
      button.setAttribute("disabled", "true");
      await expect(button).toBeDisabled();
      button.removeAttribute("disabled");
    });
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Render the button", async () => {
      const button = canvas.getByRole("button");
      await expect(button).toHaveTextContent("Label");
      await expect(button).toHaveClass(styles["button"]);
      await expect(button).toHaveClass(styles["button--outline"]);
    });

    await step("Check the button is disabled", async () => {
      const button = canvas.getByRole("button");
      button.setAttribute("disabled", "true");
      await expect(button).toBeDisabled();
      button.removeAttribute("disabled");
    });
  },
};

export const AsChild: Story = {
  args: {
    variant: "primary",
    asChild: true,
    children: <a>Label</a>,
  },
  play: async ({ canvasElement, step }) => {
    await step("Render the button", async () => {
      const button = canvasElement.querySelector(`.${styles["button"]}`);
      await expect(button).toHaveTextContent("Label");
      await expect(button).toHaveClass(styles["button"]);
      await expect(button).toHaveClass(styles["button--primary"]);
    });

    await step("Should not a button element", async () => {
      const button = canvasElement.querySelector(`.${styles["button"]}`);
      await expect(button?.nodeName).not.toEqual("BUTTON");
    });

    await step("Check the button is disabled", async () => {
      const button = canvasElement.querySelector(`.${styles["button"]}`);
      button?.setAttribute("disabled", "true");
      await expect(button).toHaveAttribute("disabled");
      button?.removeAttribute("disabled");
    });
  },
};
