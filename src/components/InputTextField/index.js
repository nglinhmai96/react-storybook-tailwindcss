import React from "react";
import PropTypes from "prop-types";
import { DEFAULT_VARIANTS } from "./constants";

/* Variant: Outlined, Filled, Standard */
const VARIANT_STYLE = {
  outlined: "bg-white border-2 border-slate-300",
  filled: "bg-gray-100",
  standard: "border-b-2 border-slate-300",
};

const INPUT_STYLE =
  "placeholder:bold placeholder:text-slate-400 block rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-blue-500 focus:ring-blue-500 focus:ring-1 sm:text-sm";

const InputTextField = ({ label, variant, fullWidth, disabled, ...props }) => {
  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <input
      placeholder={label}
      className={[VARIANT_STYLE[variant], INPUT_STYLE, widthStyle].join(" ")}
      {...props}
    />
  );
};

InputTextField.propTypes = {
  label: PropTypes.string,
  variant: PropTypes.oneOf(DEFAULT_VARIANTS),
  fullWidth: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

InputTextField.defaultProps = {
  label: "Input",
  variant: "outline",
  fullWidth: false,
  onChange: undefined,
  disabled: false,
};

export default InputTextField;
