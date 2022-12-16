import React from "react";
import { Account } from "../../assets/svg";
import { DEFAULT_SIZES, DEFAULT_TYPES, DEFAULT_VARIANTS } from "./constants";
import Button from "./index";

const BUTTON_CONFIGURATION = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: DEFAULT_TYPES,
      },
    },
    size: { control: { type: "select", options: DEFAULT_SIZES } },
    variant: {
      control: { type: "select", options: DEFAULT_VARIANTS },
    },
  },
  args: {
    fullWidth: false,
    label: "Button",
    type: "primary",
    size: "medium",
    variant: "contained",
    disabled: false,
    loading: false,
  },
};

/* Component template */
const Template = (args) => <Button {...args} />;

/* Type */
/* Default Button */
const Default = Template.bind({});
Default.args = {
  type: "primary",
};
/* Icon Button */
const LeftIconButton = Template.bind({});
LeftIconButton.args = {
  type: "primary",
  startIcon: <Account className="w-5 h-5" />,
};

const RightIconButton = Template.bind({});
RightIconButton.args = {
  type: "primary",
  endIcon: <Account className="w-5 h-5" />,
};

export { Default, LeftIconButton, RightIconButton };
export default BUTTON_CONFIGURATION;
