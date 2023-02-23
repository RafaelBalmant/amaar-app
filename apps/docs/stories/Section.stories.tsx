import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Section } from "ui";

export default {
  title: "Content/Section",
  component: Section,
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => (
  <Section {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: "Testing",
};
