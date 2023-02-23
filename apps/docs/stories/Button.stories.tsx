import React, { ReactNode } from "react";
import { Story, Meta } from "@storybook/react";

import { Button } from "ui";
import { ButtonVariants } from "ui/Button.types";

export default {
  title: "Form/Button",
  component: Button,
  argTypes: {
    variant: ButtonVariants,
    label: {
      control: "text",
    },
  },
} as Meta;

export const Primary: Story = (args) => <Button {...args} />;
Primary.args = {
  variant: ButtonVariants.primary,
  label: "Testing primary",
};

export const Secondary: Story = (args) => <Button {...args} />;
Secondary.args = {
  variant: ButtonVariants.secondary,
  label: "Testing secondary",
};

export const Tertiary: Story = (args) => <Button {...args} />;
Tertiary.args = {
  variant: ButtonVariants.tertiary,
  label: "Testing tertiary",
};
