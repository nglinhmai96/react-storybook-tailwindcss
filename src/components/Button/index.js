import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { DEFAULT_SIZES, DEFAULT_TYPES, DEFAULT_VARIANTS } from "./constants";
import { Loading } from "../../assets/svg";

const SIZE_STYLE = {
  small: "text-sm py-2 px-4",
  medium: "text-base py-2 px-4",
  large: "text-lg py-2 px-4",
  extraLarge: "test-sm min-w-[197px] py-5 px-12",
};

const BUTTON_STYLE = "font-bold border-2 rounded-full";

const disabledStyle = {
  contained:
    "cursor-not-allowed focus:outline-none disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none disabled:border-slate-300",
  outlined:
    "cursor-not-allowed focus:outline-none opacity-75 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-300 disabled:shadow-none",
};

const colorStyles = {
  contained: {
    default:
      "text-neutral-900 bg-gray-200 hover:bg-gray-300 hover:border-gray-300",
    primary:
      "text-white bg-blue-500 hover:bg-blue-600  border-blue-500 hover:border-blue-600",
    secondary:
      "text-neutral-900 bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600",
  },
  outlined: {
    default: "text-gray-600 border-gray-600 hover:bg-gray-200",
    primary: "text-blue-500 border-blue-500 hover:bg-blue-50",
    secondary: "text-yellow-500 border-yellow-500 hover:bg-yellow-50",
  },
};

const colorSVGStyles = {
  contained: {
    default: "fill-gray-600",
    primary: "fill-white",
    secondary: "fill-white",
  },
  outlined: {
    default: "fill-gray-600",
    primary: "fill-blue-500",
    secondary: "fill-yellow-500",
  },
};

const Button = ({
  fullWidth,
  loading,
  type,
  size,
  label,
  variant,
  disabled,
  className,
  onClick,
  startIcon,
  endIcon,
  ...props
}) => {
  const isDisable = disabled ? disabledStyle[variant] : "";
  const isFullWidth = fullWidth ? "w-full" : "";

  const buttonStyle = clsx(
    BUTTON_STYLE,
    SIZE_STYLE[size],
    isDisable,
    isFullWidth,
    className,
    colorStyles[variant][type]
  );

  return (
    <button
      type="button"
      className={buttonStyle}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {loading ? (
        <Loading
          className={clsx(
            colorSVGStyles[variant][type],
            "animate-spin h-5 w-5 mx-auto"
          )}
        />
      ) : (
        <div className="flex items-center justify-center">
          {startIcon && startIcon}
          {label && <span className="mx-2">{label}</span>}
          {endIcon && endIcon}
        </div>
      )}
    </button>
  );
};

Button.propTypes = {
  fullWidth: PropTypes.bool,
  loading: PropTypes.bool,
  type: PropTypes.oneOf(DEFAULT_TYPES),
  size: PropTypes.oneOf(DEFAULT_SIZES),
  variant: PropTypes.oneOf(DEFAULT_VARIANTS),
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  startIcon: PropTypes.node,
  endIcon: PropTypes.node,
};

Button.defaultProps = {
  fullWidth: false,
  loading: false,
  type: "primary",
  size: "medium",
  label: "Button",
  variant: "contained",
  disabled: false,
  onClick: () => {},
  startIcon: null,
  endIcon: null,
};

export default Button;
