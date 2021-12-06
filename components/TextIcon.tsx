import React from "react";
import { IconType } from "react-icons";
import { FiClock } from "react-icons/fi";
import { IconRenderer } from "./IconRenderer";

export interface TextIconProps {
  value: string;
  icon: IconType;
}
export const TextIcon = ({ value, icon }: TextIconProps) => (
  <div className="flex flex-row">
    <p className="pr-2">{value}</p>
    <IconRenderer size={"1.5em"} Icon={icon} />
  </div>
);
