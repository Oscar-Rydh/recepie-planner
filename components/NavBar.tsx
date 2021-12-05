import React from "react";
import { FiList, FiMenu, FiShoppingCart } from "react-icons/fi";
import { IconRenderer } from "./IconRenderer";

export const NavBar = () => (
  <div className="w-screen h-16 bg-gray-700">
    <div className="flex justify-between">
      <div className="p-5">
        <IconRenderer size={"1.5em"} Icon={FiMenu} />
      </div>
      <div className="grid grid-cols-2 auto-cols-max pt-5 pr-4">
        <span className="pr-4">
          <IconRenderer size={"1.5em"} Icon={FiList} />
        </span>
        <span className="">
          <IconRenderer size={"1.5em"} Icon={FiShoppingCart} />
        </span>
      </div>
    </div>
  </div>
);
