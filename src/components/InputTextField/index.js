import React from "react";
import PropTypes from "prop-types";

/* Variant: Outline, Filled, Standard */
const VARIANT_STYLE = {
  outline: "bg-white border-2 border-slate-300",
  filled: "bg-gray-100",
  standard: "border-b-2 border-slate-300",
};

const INPUT_STYLE =
  "placeholder:italic placeholder:text-slate-400 block rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm";

const InputTextField = ({ label, variant, fullWidth, ...props }) => {
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
  variant: PropTypes.oneOf(["outline", "filled", "standard"]),
  fullWidth: PropTypes.bool,
  onChange: PropTypes.func,
};

InputTextField.defaultProps = {
  label: "Input",
  variant: "outline",
  fullWidth: false,
  onChange: undefined,
};

export default InputTextField;
