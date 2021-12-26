import React, { useState } from "react";
import { Dropdown, DropdownOptionProps } from "./Dropdown";

export const PortionPicker = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);
  const options: DropdownOptionProps[] = [
    { key: "0", value: "2" },
    { key: "1", value: "4" },
    { key: "2", value: "6" },
    { key: "3", value: "8" },
  ];

  return (
    <div className="flex flex-row">
      <div className="mt-2"># Portioner</div>
      <div className="ml-4">
        <Dropdown defaultOption={options[1]} options={options} />
      </div>
    </div>
  );
};
