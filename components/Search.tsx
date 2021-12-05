import React from "react";
import { FiSearch } from "react-icons/fi";
import { IconRenderer } from "./IconRenderer";

export interface SearchProps {
  onSubmit(): void;
}
export const Search = ({ onSubmit }: SearchProps) => {
  const handleSubmit = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      onSubmit();
    }
  };

  return (
    <div className="w-full">
      <div className="relative">
        <input
          onKeyDown={(e) => handleSubmit(e)}
          className="shadow border w-full rounded-full pl-4 pr-8 py-2"
          placeholder="Search"
        />
        <div className="absolute top-3 right-3">
          <IconRenderer size={"1em"} Icon={FiSearch} />
        </div>
      </div>
    </div>
  );
};
