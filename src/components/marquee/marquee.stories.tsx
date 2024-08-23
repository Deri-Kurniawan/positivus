import type { Meta, StoryObj } from "@storybook/react";

import data from "../../data";
import Marquee from "./marquee";

const meta = {
  title: "Components/Marquee",
  component: Marquee,
  args: {
    speed: 25,
    direction: "to-left",
    pauseOnHover: false,
  },
} satisfies Meta<typeof Marquee>;

export default meta;

type Story = StoryObj<typeof meta>;

const marqueeDataExample = [...data.companies];

const ExampleChildren = marqueeDataExample.map(
  ({ image, width, height, alt }) => (
    <img key={alt} {...{ src: image, width, height, alt }} />
  )
);

export const Default: Story = {
  args: {
    children: ExampleChildren,
  },
};

export const DirectionToRight: Story = {
  args: {
    direction: "to-right",
    children: ExampleChildren,
  },
};

export const Faster: Story = {
  args: {
    direction: "to-right",
    speed: 12,
    children: ExampleChildren,
  },
};

export const PauseOnHover: Story = {
  args: {
    pauseOnHover: true,
    children: ExampleChildren,
  },
};

export const ALittleContent: Story = {
  args: {
    speed: 25,
    children: (
      <img
        style={{
          height: 48,
          width: "auto",
        }}
        src={data.companies[0].image}
        width={data.companies[0].width}
        height={data.companies[0].height}
        alt={data.companies[0].alt}
      />
    ),
  },
};
