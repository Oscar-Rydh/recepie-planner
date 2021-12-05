import React from "react";
import { FiList, FiMenu, FiShoppingCart } from "react-icons/fi";
import { GiChecklist, GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";

export const NavBar = () => (
  <div className="w-screen h-16 bg-gray-700">
    <div className="flex justify-between">
      <div className="p-5">
        <IconContext.Provider value={{ size: "1.5em" }}>
          <FiMenu />
        </IconContext.Provider>
      </div>
      <div className="grid grid-cols-2 auto-cols-max pt-5 pr-4">
        <span className="pr-4">
          <IconContext.Provider value={{ size: "1.5em" }}>
            <FiList />
          </IconContext.Provider>
        </span>
        <span className="">
          <IconContext.Provider value={{ size: "1.5em" }}>
            <FiShoppingCart />
          </IconContext.Provider>
        </span>
      </div>
    </div>
  </div>
);
