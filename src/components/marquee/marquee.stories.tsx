import type { Meta, StoryObj } from "@storybook/react";

import { expect } from "@storybook/test";
import companyAmazon from "./assets/images/company-amazon.png";
import companyDribbble from "./assets/images/company-dribbble.png";
import companyNetflix from "./assets/images/company-netflix.png";
import companyNotion from "./assets/images/company-notion.png";
import companyZoom from "./assets/images/company-zoom.png";
import Marquee from "./marquee";
import styles from "./marquee.module.css";

const meta = {
  title: "Components/Marquee",
  component: Marquee,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {},
  args: {
    speed: 25,
    direction: "to-left",
    pauseOnHover: false,
  },
} satisfies Meta<typeof Marquee>;

export default meta;

type Story = StoryObj<typeof meta>;

const marqueeDataExample = [
  {
    image: companyAmazon,
    alt: "Amazon",
  },
  {
    image: companyDribbble,
    alt: "Dribbble",
  },
  {
    image: companyNetflix,
    alt: "Netflix",
  },
  {
    image: companyNotion,
    alt: "Notion",
  },
  {
    image: companyZoom,
    alt: "Zoom",
  },
];

const ExampleChildren = marqueeDataExample.map(({ image, alt }) => (
  <img key={alt} src={image} alt={alt} />
));

export const Default: Story = {
  args: {
    children: ExampleChildren,
  },
  play: async ({ canvasElement, step }) => {
    await step("Render the marquee", async () => {
      const div = canvasElement.querySelector("div");
      expect(div).toHaveClass(styles["marquee"]);
    });
  },
};

export const DirectionToRight: Story = {
  args: {
    direction: "to-right",
    children: ExampleChildren,
  },
  play: async ({ canvasElement, step }) => {
    await step("Render the marquee", async () => {
      const div = canvasElement.querySelector("div");
      expect(div).toHaveClass(styles["marquee"]);
    });
  },
};

export const Faster: Story = {
  args: {
    direction: "to-right",
    speed: 12,
    children: ExampleChildren,
  },
  play: async ({ canvasElement, step }) => {
    await step("Render the marquee", async () => {
      const div = canvasElement.querySelector("div");
      expect(div).toHaveClass(styles["marquee"]);
    });
  },
};

export const PauseOnHover: Story = {
  args: {
    pauseOnHover: true,
    children: ExampleChildren,
  },
  play: async ({ canvasElement, step }) => {
    await step("Render the marquee", async () => {
      const div = canvasElement.querySelector("div");
      expect(div).toHaveClass(styles["marquee"]);
    });
  },
};

export const ALittleContent: Story = {
  args: {
    speed: 25,
    children: (
      <>
        <img src={companyAmazon} alt="Amazon" />
      </>
    ),
  },
  play: async ({ canvasElement, step }) => {
    await step("Render the marquee", async () => {
      const div = canvasElement.querySelector("div");
      expect(div).toHaveClass(styles["marquee"]);
    });
  },
};
