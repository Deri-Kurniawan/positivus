import type { Preview } from "@storybook/react";
import "../src/index.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#ffffff",
        },
        {
          name: "dark",
          value: "#333333",
        },
        {
          name: "blue",
          value: "#00aced",
        },
      ],
    },
    viewport: {
      viewports: {
        desktop: {
          name: "Desktop",
          styles: {
            width: "1440px",
            height: "100%",
          },
        },
        tablet: {
          name: "Tablet",
          styles: {
            width: "768px",
            height: "1024px",
          },
        },
        mobile: {
          name: "Mobile",
          styles: {
            width: "430px",
            height: "1024px",
          },
        },
        mobileSmall: {
          name: "Mobile Small",
          styles: {
            width: "320px",
            height: "1024px",
          },
        },
      },
      defaultViewport: "responsive",
    },
  },
  tags: ["autodocs"],
};

export default preview;
