import React, { useState } from "react";
import { FiX } from "react-icons/fi";
import { IconRenderer } from "./IconRenderer";
import { Search } from "./Search";

export const ExtrasPicker = () => {
  const [pickedItem, setPickedItem] = useState(undefined);

  return (
    (pickedItem && (
      <div className="flex flex-row items-center">
        {pickedItem}
        <button onClick={() => setPickedItem(undefined)} className="ml-2 p-2">
          <IconRenderer size={"1em"} Icon={FiX} />
        </button>
      </div>
    )) || <Search onSubmit={(searchContent) => setPickedItem(searchContent)} />
  );
};
