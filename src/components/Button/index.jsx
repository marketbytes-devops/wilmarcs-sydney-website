import React from "react";

const Button = ({
  children,
  onClick,
  disabled = false,
  className = "",
  ...rest // captures onMouseEnter, onMouseLeave, etc.
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center 
        rounded-full
        text-[15px] font-semibold font-geist
        transition-all duration-200 ease-in-out
        ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
