import type { Meta, StoryObj } from "@storybook/react";

import { expect, userEvent, within } from "@storybook/test";
import ContactUsSection from "./contact-us-section";

const meta = {
  title: "Components/Sections/ContactUsSection",
  component: ContactUsSection,
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
  args: {
    demoStory: true,
  },
} satisfies Meta<typeof ContactUsSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    step("Fill the form and submit", async () => {
      const radioType1 = canvas.getByTestId("contact-type-say-hi");
      const radioType2 = canvas.getByTestId("contact-type-get-quote");
      const inputName = canvas.getByTestId("name");
      const inputEmail = canvas.getByTestId("email");
      const inputMessage = canvas.getByTestId("message");
      const submitButtonDesktop = canvas.getByTestId("submit-button-desktop");

      await userEvent.click(radioType1, {
        delay: 500,
      });
      await userEvent.click(radioType2, {
        delay: 500,
      });

      await step("Input invalid name", async () => {
        await userEvent.type(inputName, "?N)z7f*Hm]", {
          delay: 100,
        });
        const errorMessage = canvas.getByTestId("error-name");
        expect(errorMessage).toHaveTextContent(
          "Name must contain only letters"
        );
      });

      await userEvent.clear(inputName);
      await userEvent.type(inputName, "Deri Kurniawan", {
        delay: 100,
      });

      await step("Input invalid email", async () => {
        await userEvent.type(inputEmail, "hi", {
          delay: 100,
        });
        const errorMessage = canvas.getByTestId("error-email");
        expect(errorMessage).toHaveTextContent("Invalid email address");
      });

      await userEvent.type(inputEmail, "@deri.my.id", {
        delay: 100,
      });
      await userEvent.type(inputMessage, "Hello, World!", {
        delay: 100,
      });
      await userEvent.click(submitButtonDesktop, {
        delay: 100,
      });
    });
  },
};
