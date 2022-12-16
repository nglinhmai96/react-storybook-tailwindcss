import React from "react";
import { DEFAULT_VARIANTS } from "./constants";
import InputTextField from "./index";

const INPUT_CONFIGURATION = {
  title: "Components/Input",
  component: InputTextField,
  argTypes: {
    variant: { control: { type: "select", options: DEFAULT_VARIANTS } },
  },
  args: {
    label: "Input",
    variant: "outlined",
    fullWidth: false,
  },
};

/* Component template */
const Template = (args) => <InputTextField {...args} />;

/* Full width */
const FullWidth = Template.bind({});
FullWidth.args = {
  fullWidth: true,
};

/* Variant */
const Outlined = Template.bind({});
Outlined.args = {
  variant: "outlined",
};

const Filled = Template.bind({});
Filled.args = {
  variant: "filled",
};

const Standard = Template.bind({});
Standard.args = {
  variant: "standard",
};

export { Outlined, Filled, Standard, FullWidth };
export default INPUT_CONFIGURATION;
