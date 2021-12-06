import { HtmlProps } from "next/dist/shared/lib/utils";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IconRenderer } from "./IconRenderer";

export interface SearchProps {
  onSubmit(inputValue: string): void;
}
export const Search = ({ onSubmit }: SearchProps) => {
  const [searchContent, setSearchContent] = useState("");

  const handleSubmit = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      onSubmit(searchContent);
    }
  };

  return (
    <div className="w-3/5">
      <div className="relative">
        <input
          onKeyDown={(e) => handleSubmit(e)}
          className="shadow border w-full rounded-full pl-4 pr-8 py-2"
          placeholder="Search"
          value={searchContent}
          onChange={(e) => setSearchContent(e.target.value)}
        />
        <div className="absolute top-3 right-3">
          <IconRenderer size={"1em"} Icon={FiSearch} />
        </div>
      </div>
    </div>
  );
};
