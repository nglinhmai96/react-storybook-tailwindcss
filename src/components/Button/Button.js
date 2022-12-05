import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

const SIZE_STYLE = {
  small: "text-sm py-2 px-4",
  medium: "text-base py-2 px-4",
  large: "text-lg py-2 px-4",
};

const BUTTON_STYLE = "font-bold border-2 rounded-3xl";

const Button = ({
  type,
  backgroundColor,
  size,
  label,
  variant,
  disabled,
  className,
  ...props
}) => {
  const disabledStyle = {
    contained:
      "cursor-not-allowed focus:outline-none opacity-75 disabled:bg-slate-200 disabled:text-slate-500 disabled:shadow-none",
    outlined:
      "cursor-not-allowed focus:outline-none opacity-75 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none",
  };
  const isDisable = disabled ? disabledStyle[variant] : "";
  const colorStyles = {
    contained: {
      default: "text-neutral-900 bg-gray-200 hover:bg-gray-300",
      primary: "text-white bg-blue-500 hover:bg-blue-600  border-transparent",
      secondary:
        "text-neutral-900 bg-yellow-500 hover:bg-yellow-600 border-transparent",
    },
    outlined: {
      default: "text-gray-600 border-gray-600 hover:bg-gray-200",
      primary: "text-blue-500 border-blue-500 hover:bg-blue-50",
      secondary: "text-yellow-500 border-yellow-500 hover:bg-yellow-50",
    },
  };

  const buttonStyle = clsx(
    BUTTON_STYLE,
    SIZE_STYLE[size],
    isDisable,
    className,
    colorStyles[variant][type]
  );

  return (
    <button
      type="button"
      className={buttonStyle}
      style={backgroundColor && { backgroundColor }}
      disabled={disabled}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(["primary", "secondary"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  variant: PropTypes.oneOf(["outlined", "contained"]),
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  type: "primary",
  size: "medium",
  label: "Button",
  variant: "contained",
  disabled: false,
  onClick: undefined,
};

export default Button;
