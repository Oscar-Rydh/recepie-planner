import React from "react";
import { NavBar } from "../../components/NavBar";
import { Search } from "../../components/Search";

const Recepie = () => {
  return (
    <div>
      <NavBar />
      <div className="flex flex-grow">
        <div className="">
          <Search onSubmit={() => console.log("submitted")} />
        </div>
      </div>
    </div>
  );
};

export default Recepie;
