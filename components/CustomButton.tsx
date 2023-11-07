"use client";

import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  btnType = "button",
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 `}>{title}</span>
    </button>
  );
};

export default CustomButton;
