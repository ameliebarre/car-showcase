"use client";

import Image from "next/image";

import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  textStyles,
  btnType = "button",
  rightIcon,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon ? (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            fill
            className="object-contain"
            alt="right icon"
          />
        </div>
      ) : null}
    </button>
  );
};

export default CustomButton;
