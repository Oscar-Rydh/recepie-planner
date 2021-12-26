import React, { useState } from "react";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { IconRenderer } from "./IconRenderer";

export interface DropdownOptionProps {
  key: string;
  value: string;
}
export interface DropdownProps {
  defaultOption: DropdownOptionProps;
  options: DropdownOptionProps[];
}
export const Dropdown = ({ defaultOption, options }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [header, setHeader] = useState(defaultOption.value);
  const [selected, setSelected] = useState(defaultOption.key);

  const handleDropdownSelect = (selection: DropdownOptionProps) => {
    setHeader(selection.value);
    setSelected(selection.key);
    setIsOpen(false);
  };

  return (
    <div>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex flex-row p-2">
          {header}
          {isOpen ? (
            <IconRenderer size="1.5em" Icon={FiArrowUp} />
          ) : (
            <IconRenderer size="1.5em" Icon={FiArrowDown} />
          )}
        </div>
      </button>
      <div className="flex flex-col items-center border rounded-md ">
        {isOpen &&
          options.map((option) => (
            <div>
              <button
                key={option.key}
                onClick={() => handleDropdownSelect(option)}
                className="border-b-2"
              >
                {option.value}
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};
