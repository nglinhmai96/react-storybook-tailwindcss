import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { DEFAULT_TYPES } from "./constants";

const Chip = ({
  label,
  type,
  avatar,
  onClick,
  small,
  disabled,
  onDelete,
  icon,
  ...props
}) => {
  const DEFAULT_STYLE = "inline-flex items-center rounded-full py-2";

  const COLOR_STYLE = {
    default:
      "text-neutral-900 bg-gray-200 hover:bg-gray-300 hover:border-gray-300",
    primary:
      "text-white bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600",
    secondary:
      "text-neutral-900 bg-yellow-500 hover:bg-yellow-600 border-yellow-500 hover:border-yellow-600",
  };

  const DISABLED_STYLE = {
    default: "cursor-not-allowed focus:outline-none bg-gray-100",
    primary: "cursor-not-allowed focus:outline-none bg-blue-400",
    secondary: "cursor-not-allowed focus:outline-none bg-yellow-400",
  };

  const isDisabled = disabled ? DISABLED_STYLE[type] : "";
  const isOnClick = onClick ? "" : "cursor-default pointer-events-none";
  const isSmallChip = small ? "px-2" : "px-4";
  const isSmallLabel = small ? "text-xs" : "text-sm";

  const chipStyle = clsx(
    isDisabled,
    isOnClick,
    isSmallChip,
    DEFAULT_STYLE,
    COLOR_STYLE[type]
  );

  return (
    <button className={chipStyle} onClick={onClick} {...props}>
      {avatar && <div className="rounded-full mr-1">{avatar}</div>}
      <p className={isSmallLabel}>{label}</p>
      {icon && onDelete && (
        <button
          onClick={onDelete}
          className="w-4 h-4 ml-1 text-gray-200  bg-gray-500 hover:bg-gray-400 rounded-full  pointer-events-auto"
        >
          {icon}
        </button>
      )}
    </button>
  );
};

Chip.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(DEFAULT_TYPES),
  avatar: PropTypes.element,
  icon: PropTypes.element,
  small: PropTypes.bool,
  onClick: PropTypes.func,
  onDelete: PropTypes.func,
};

Chip.defaultProps = {
  label: "Default",
  type: "default",
  small: true,
  avatar: null,
  onClick: null,
  onDelete: null,
};

export default Chip;
