import React from "react";
import Chip from "./index";
import { Account, Close } from "../../assets/svg";
import { DEFAULT_TYPES } from "./constants";

const CHIP_CONFIGURATION = {
  title: "Components/Chip",
  component: Chip,
  argTypes: {
    type: { control: { type: "select", options: DEFAULT_TYPES } },
  },
  args: {
    label: "Default",
    type: "default",
    small: true,
    disabled: false,
    onClick: null,
    onDelete: null,
  },
};

/* Component template */
const Template = (args) => <Chip {...args} />;

/* Default Chip */
const Default = Template.bind({});
Default.args = {};

/* Chip With Avatar */
const Avatar = Template.bind({});
Avatar.args = {
  avatar: <Account className="w-4 h-4" />,
};

/* Chip With Action */
const ChipWithAction = Template.bind({});
ChipWithAction.args = {
  avatar: <Account className="w-4 h-4" />,
  onClick: () => console.log("Click me!"),
};

const ChipWithDelete = Template.bind({});
ChipWithDelete.args = {
  icon: <Close className="w-4 h-4" />,
  onDelete: () => console.log("Delete successful!"),
};

export { Default, Avatar, ChipWithAction, ChipWithDelete };
export default CHIP_CONFIGURATION;
