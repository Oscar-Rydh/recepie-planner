import React from "react";
import { FiPlus, FiRotateCcw, FiShoppingCart } from "react-icons/fi";
import { Card } from "../components/Card";
import { CircularButton } from "../components/CircularButton";
import { FiList } from "react-icons/fi";
import { IconRenderer } from "../components/IconRenderer";
import { NavBar } from "../components/NavBar";

const IndexPage = () => (
  <div className="bg-gray-200 h-screen">
    <NavBar />
    <div className="flex flex-col">
      <div className="mx-auto">
        <h1 className="text-2xl font-bold pt-4 pb-4"> Dagens recept </h1>
      </div>
      <div className="mx-auto">
        <Card id={"tmp"} />
      </div>
      <div className="mx-auto pt-8 flex-grow">
        <IconRenderer size={"3em"} Icon={FiRotateCcw} />
      </div>
    </div>
    <div className="absolute bottom-0 w-screen h-40">
      <div className="flex justify-center">
        <div>
          <CircularButton
            Icon={FiList}
            count={99}
            onClick={() => console.log("Got click")}
          />
        </div>
        <div className="pl-8 pr-8">
          <CircularButton
            Icon={FiPlus}
            onClick={() => console.log("Got click")}
          />
        </div>
        <div>
          <CircularButton
            Icon={FiShoppingCart}
            count={99}
            onClick={() => console.log("Got click")}
          />
        </div>
      </div>
    </div>
  </div>
);

export default IndexPage;
