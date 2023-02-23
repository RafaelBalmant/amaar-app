import React from "react";
import { Story, Meta } from "@storybook/react";

import { Section } from "ui";

export default {
  title: "Content/Section",
  component: Section,
} as Meta;

export const Default: Story = (args) => <Section {...args} />;
Default.args = {
  children: "Example section content.",
};
