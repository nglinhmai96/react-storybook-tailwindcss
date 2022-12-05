import React from "react";
import Button from "./Button";

const BUTTON_CONFIGURATION = {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    label: "Button",
    type: "primary",
    size: "medium",
    variant: "outlined",
    disabled: false,
  },
};

/* Component template */
const Template = (args) => <Button {...args} />;

/* Type */
const Primary = Template.bind({});
Primary.args = {
  type: "primary",
};

const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
};

/* Size */
const Small = Template.bind({});
Small.args = {
  size: "small",
};

const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

const Large = Template.bind({});
Large.args = {
  size: "large",
};

export { Primary, Secondary, Small, Medium, Large };
export default BUTTON_CONFIGURATION;
