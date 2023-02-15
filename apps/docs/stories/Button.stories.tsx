import React, { ReactNode } from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "ui";
import { ButtonVariants } from "ui/Button.types";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    variant: ButtonVariants,
    label: {
      control: "text",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: ButtonVariants.primary,
  label: "Testing",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: ButtonVariants.secondary,
  label: "Testing",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: ButtonVariants.tertiary,
  label: "Testing",
};
