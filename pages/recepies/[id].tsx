import React from "react";
import { FiClock, FiShoppingCart } from "react-icons/fi";
import { CircularButton } from "../../components/CircularButton";
import { Description } from "../../components/Description";
import { ExtrasPicker } from "../../components/ExtrasPicker";
import { IconRenderer } from "../../components/IconRenderer";
import { NavBar } from "../../components/NavBar";
import { PortionPicker } from "../../components/PortionPicker";
import { Search } from "../../components/Search";
import { TextIcon } from "../../components/TextIcon";

const Recepie = () => {
  return (
    <div className="w-screen">
      <NavBar />
      <div className="flex flex-col flex-grow items-center">
        <img
          className="w-screen drop-shadow-md h-64 border-b-2"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
        />
        <div className="pt-4 font-bold">
          <h1>En krämig tikka masala</h1>
        </div>
      </div>
      <div className="flex flex-row justify-between px-8 py-4">
        <TextIcon value={"1 h"} icon={FiClock} />
        <TextIcon value={"30"} icon={FiShoppingCart} />
      </div>
      <div className="pt-4">
        <Description content={"some great content"} />
      </div>
      <div className="px-4 pt-8 pb-4">
        <h3>Tillbehör</h3>
        <ExtrasPicker />
      </div>
      <div className="px-4">
        <h3>Sås</h3>
        <ExtrasPicker />
      </div>
      <div className="my-4">
        <PortionPicker />
      </div>
      <div>
        <CircularButton
          onClick={() => console.log("clicked")}
          Icon={FiShoppingCart}
        />
      </div>
    </div>
  );
};

export default Recepie;
