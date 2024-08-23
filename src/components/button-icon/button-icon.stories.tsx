import type { Meta, StoryObj } from "@storybook/react";

import { expect, within } from "@storybook/test";
import { IconArrow, IconPlus } from "../icons";
import ButtonIcon from "./button-icon";
import styles from "./button-icon.module.css";

const meta = {
  title: "Components/ButtonIcon",
  component: ButtonIcon,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    asChild: { control: "boolean" },
  },
  args: {
    children: "Label",
    asChild: false,
  },
} satisfies Meta<typeof ButtonIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    icon: <IconArrow />,
    children: "Label",
    asChild: false,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Render the button", async () => {
      const button = canvas.getByRole("button");
      await expect(button).toHaveTextContent("Label");
      await expect(button).toHaveClass(styles["button-icon"]);
      await expect(button).toHaveClass(styles["button-icon--primary"]);
    });

    await step("Should have an icon element", async () => {
      const button = canvas.getByRole("button");
      const icon = button.querySelector(`.${styles["button-icon__icon"]}`);
      await expect(icon).toBeDefined();

      await step("Should have an icon content", async () => {
        await expect(icon?.childNodes).toHaveLength(1);
      });
    });

    await step("Should have a label element", async () => {
      const button = canvas.getByRole("button");
      const label = button.querySelector(`.${styles["button-icon__label"]}`);
      await expect(label).toBeDefined();

      await step("Should have a label content", async () => {
        await expect(label).toHaveTextContent("Label");
      });
    });
  },
};

export const PrimaryAlt: Story = {
  args: {
    variant: "primary-alt",
    icon: <IconArrow />,
    children: "Label",
    asChild: false,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Render the button", async () => {
      const button = canvas.getByRole("button");
      await expect(button).toHaveTextContent("Label");
      await expect(button).toHaveClass(styles["button-icon"]);
      await expect(button).toHaveClass(styles["button-icon--primary-alt"]);
    });

    await step("Should have an icon element", async () => {
      const button = canvas.getByRole("button");
      const icon = button.querySelector(`.${styles["button-icon__icon"]}`);
      await expect(icon).toBeDefined();

      await step("Should have an icon content", async () => {
        await expect(icon?.childNodes).toHaveLength(1);
      });
    });

    await step("Should have a label element", async () => {
      const button = canvas.getByRole("button");
      const label = button.querySelector(`.${styles["button-icon__label"]}`);
      await expect(label).toBeDefined();

      await step("Should have a label content", async () => {
        await expect(label).toHaveTextContent("Label");
      });
    });
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    icon: <IconArrow />,
    children: "Label",
    asChild: false,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Render the button", async () => {
      const button = canvas.getByRole("button");
      await expect(button).toHaveTextContent("Label");
      await expect(button).toHaveClass(styles["button-icon"]);
      await expect(button).toHaveClass(styles["button-icon--secondary"]);
    });

    await step("Should have an icon element", async () => {
      const button = canvas.getByRole("button");
      const icon = button.querySelector(`.${styles["button-icon__icon"]}`);
      await expect(icon).toBeDefined();

      await step("Should have an icon content", async () => {
        await expect(icon?.childNodes).toHaveLength(1);
      });
    });

    await step("Should have a label element", async () => {
      const button = canvas.getByRole("button");
      const label = button.querySelector(`.${styles["button-icon__label"]}`);
      await expect(label).toBeDefined();

      await step("Should have a label content", async () => {
        await expect(label).toHaveTextContent("Label");
      });
    });
  },
};

export const SecondaryAlt: Story = {
  parameters: {
    backgrounds: {
      default: "blue",
    },
  },
  args: {
    variant: "secondary-alt",
    icon: <IconArrow />,
    children: "Label",
    asChild: false,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Render the button", async () => {
      const button = canvas.getByRole("button");
      await expect(button).toHaveTextContent("Label");
      await expect(button).toHaveClass(styles["button-icon"]);
      await expect(button).toHaveClass(styles["button-icon--secondary-alt"]);
    });

    await step("Should have an icon element", async () => {
      const button = canvas.getByRole("button");
      const icon = button.querySelector(`.${styles["button-icon__icon"]}`);
      await expect(icon).toBeDefined();

      await step("Should have an icon content", async () => {
        await expect(icon?.childNodes).toHaveLength(1);
      });
    });

    await step("Should have a label element", async () => {
      const button = canvas.getByRole("button");
      const label = button.querySelector(`.${styles["button-icon__label"]}`);
      await expect(label).toBeDefined();

      await step("Should have a label content", async () => {
        await expect(label).toHaveTextContent("Label");
      });
    });
  },
};

export const Ghost: Story = {
  parameters: {
    backgrounds: {
      default: "blue",
    },
  },
  args: {
    variant: "ghost",
    icon: <IconArrow />,
    children: "Label",
    asChild: false,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Render the button", async () => {
      const button = canvas.getByRole("button");
      await expect(button).toHaveTextContent("Label");
      await expect(button).toHaveClass(styles["button-icon"]);
      await expect(button).toHaveClass(styles["button-icon--ghost"]);
    });

    await step("Should have an icon element", async () => {
      const button = canvas.getByRole("button");
      const icon = button.querySelector(`.${styles["button-icon__icon"]}`);
      await expect(icon).toBeDefined();

      await step("Should have an icon content", async () => {
        await expect(icon?.childNodes).toHaveLength(1);
      });
    });

    await step("Should have a label element", async () => {
      const button = canvas.getByRole("button");
      const label = button.querySelector(`.${styles["button-icon__label"]}`);
      await expect(label).toBeDefined();

      await step("Should have a label content", async () => {
        await expect(label).toHaveTextContent("Label");
      });
    });
  },
};

export const GhostAlt: Story = {
  parameters: {
    backgrounds: {
      default: "blue",
    },
  },
  args: {
    variant: "ghost-alt",
    icon: <IconArrow />,
    children: "Label",
    asChild: false,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Render the button", async () => {
      const button = canvas.getByRole("button");
      await expect(button).toHaveTextContent("Label");
      await expect(button).toHaveClass(styles["button-icon"]);
      await expect(button).toHaveClass(styles["button-icon--ghost-alt"]);
    });

    await step("Should have an icon element", async () => {
      const button = canvas.getByRole("button");
      const icon = button.querySelector(`.${styles["button-icon__icon"]}`);
      await expect(icon).toBeDefined();

      await step("Should have an icon content", async () => {
        await expect(icon?.childNodes).toHaveLength(1);
      });
    });

    await step("Should have a label element", async () => {
      const button = canvas.getByRole("button");
      const label = button.querySelector(`.${styles["button-icon__label"]}`);
      await expect(label).toBeDefined();

      await step("Should have a label content", async () => {
        await expect(label).toHaveTextContent("Label");
      });
    });
  },
};

export const Outline: Story = {
  parameters: {
    backgrounds: {
      default: "blue",
    },
  },
  args: {
    variant: "outline",
    icon: <IconArrow />,
    children: "Label",
    asChild: false,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Render the button", async () => {
      const button = canvas.getByRole("button");
      await expect(button).toHaveTextContent("Label");
      await expect(button).toHaveClass(styles["button-icon"]);
      await expect(button).toHaveClass(styles["button-icon--outline"]);
    });

    await step("Should have an icon element", async () => {
      const button = canvas.getByRole("button");
      const icon = button.querySelector(`.${styles["button-icon__icon"]}`);
      await expect(icon).toBeDefined();

      await step("Should have an icon content", async () => {
        await expect(icon?.childNodes).toHaveLength(1);
      });
    });

    await step("Should have a label element", async () => {
      const button = canvas.getByRole("button");
      const label = button.querySelector(`.${styles["button-icon__label"]}`);
      await expect(label).toBeDefined();

      await step("Should have a label content", async () => {
        await expect(label).toHaveTextContent("Label");
      });
    });
  },
};

export const AsChild: Story = {
  args: {
    variant: "primary",
    icon: <IconArrow />,
    children: <a href="#test">Label</a>,
    asChild: true,
  },
  play: async ({ canvasElement, step }) => {
    await step("Render the button", async () => {
      const button = canvasElement.querySelector(`.${styles["button-icon"]}`);
      await expect(button).toHaveTextContent("Label");
      await expect(button).toHaveClass(styles["button-icon"]);
      await expect(button).toHaveClass(styles["button-icon--primary"]);
    });

    await step("Should not a button element", async () => {
      const button = canvasElement.querySelector(`.${styles["button-icon"]}`);
      await expect(button?.tagName).not.toBe("BUTTON");
    });
  },
};

export const PrimaryPlain: Story = {
  parameters: {
    backgrounds: {
      default: "blue",
    },
  },
  args: {
    variant: "primary-plain",
    icon: <IconArrow />,
    children: "Label",
    asChild: false,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Render the button", async () => {
      const button = canvas.getByRole("button");
      await expect(button).toHaveTextContent("Label");
      await expect(button).toHaveClass(styles["button-icon"]);
      await expect(button).toHaveClass(styles["button-icon--primary-plain"]);
    });

    await step("Should have an icon element", async () => {
      const button = canvas.getByRole("button");
      const icon = button.querySelector(`.${styles["button-icon__icon"]}`);
      await expect(icon).toBeDefined();

      await step("Should have an icon content", async () => {
        await expect(icon?.childNodes).toHaveLength(1);
      });
    });

    await step("Should have a label element", async () => {
      const button = canvas.getByRole("button");
      const label = button.querySelector(`.${styles["button-icon__label"]}`);
      await expect(label).toBeDefined();

      await step("Should have a label content", async () => {
        await expect(label).toHaveTextContent("Label");
      });
    });
  },
};

export const SecondaryPlain: Story = {
  parameters: {
    backgrounds: {
      default: "blue",
    },
  },
  args: {
    variant: "secondary-plain",
    icon: <IconArrow />,
    children: "Label",
    asChild: false,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Render the button", async () => {
      const button = canvas.getByRole("button");
      await expect(button).toHaveTextContent("Label");
      await expect(button).toHaveClass(styles["button-icon"]);
      await expect(button).toHaveClass(styles["button-icon--secondary-plain"]);
    });

    await step("Should have an icon element", async () => {
      const button = canvas.getByRole("button");
      const icon = button.querySelector(`.${styles["button-icon__icon"]}`);
      await expect(icon).toBeDefined();

      await step("Should have an icon content", async () => {
        await expect(icon?.childNodes).toHaveLength(1);
      });
    });

    await step("Should have a label element", async () => {
      const button = canvas.getByRole("button");
      const label = button.querySelector(`.${styles["button-icon__label"]}`);
      await expect(label).toBeDefined();

      await step("Should have a label content", async () => {
        await expect(label).toHaveTextContent("Label");
      });
    });
  },
};

export const GhostPlain: Story = {
  parameters: {
    backgrounds: {
      default: "blue",
    },
  },
  args: {
    variant: "ghost-plain",
    icon: <IconArrow />,
    children: "Label",
    asChild: false,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Render the button", async () => {
      const button = canvas.getByRole("button");
      await expect(button).toHaveTextContent("Label");
      await expect(button).toHaveClass(styles["button-icon"]);
      await expect(button).toHaveClass(styles["button-icon--ghost-plain"]);
    });

    await step("Should have an icon element", async () => {
      const button = canvas.getByRole("button");
      const icon = button.querySelector(`.${styles["button-icon__icon"]}`);
      await expect(icon).toBeDefined();

      await step("Should have an icon content", async () => {
        await expect(icon?.childNodes).toHaveLength(1);
      });
    });

    await step("Should have a label element", async () => {
      const button = canvas.getByRole("button");
      const label = button.querySelector(`.${styles["button-icon__label"]}`);
      await expect(label).toBeDefined();

      await step("Should have a label content", async () => {
        await expect(label).toHaveTextContent("Label");
      });
    });
  },
};

export const AsChildPlain: Story = {
  parameters: {
    backgrounds: {
      default: "blue",
    },
  },
  args: {
    variant: "primary-plain",
    icon: <IconArrow />,
    children: <a href="#test">Label</a>,
    asChild: true,
  },
  play: async ({ canvasElement, step }) => {
    await step("Render the button", async () => {
      const button = canvasElement.querySelector(`.${styles["button-icon"]}`);
      await expect(button).toHaveTextContent("Label");
      await expect(button).toHaveClass(styles["button-icon"]);
      await expect(button).toHaveClass(styles["button-icon--primary-plain"]);
    });

    await step("Should not a button element", async () => {
      const button = canvasElement.querySelector(`.${styles["button-icon"]}`);
      await expect(button?.tagName).not.toBe("BUTTON");
    });
  },
};

export const IconOnly: Story = {
  args: {
    variant: "outline",
    icon: <IconPlus />,
    children: "Label",
    iconOnly: true,
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step("Render the button", async () => {
      const button = canvas.getByRole("button");
      await expect(button).toHaveClass(styles["button-icon"]);
      await expect(button).toHaveClass(styles["button-icon--outline"]);
      await expect(button).toHaveClass(styles["button-icon--icon-only"]);
    });

    await step("Should have an icon element", async () => {
      const button = canvas.getByRole("button");
      const icon = button.querySelector(`.${styles["button-icon__icon"]}`);
      await expect(icon).toBeDefined();

      await step("Should have an icon content", async () => {
        await expect(icon?.childNodes).toHaveLength(1);
      });
    });

    await step("Should hide label element", async () => {
      const button = canvas.getByRole("button");
      await expect(button).toHaveClass(styles["button-icon--icon-only"]);
    });
  },
};
