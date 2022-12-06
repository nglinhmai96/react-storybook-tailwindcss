import React from "react";
import InputTextField from "./index";

const INPUT_CONFIGURATION = {
  title: "Components/Input",
  component: InputTextField,
  args: {
    label: "Input",
    variant: "outline",
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
const Outline = Template.bind({});
Outline.args = {
  variant: "outline",
};

const Filled = Template.bind({});
Filled.args = {
  variant: "filled",
};

const Standard = Template.bind({});
Standard.args = {
  variant: "standard",
};

export { Outline, Filled, Standard, FullWidth };
export default INPUT_CONFIGURATION;
