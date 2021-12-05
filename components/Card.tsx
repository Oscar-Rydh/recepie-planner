import React from "react";
import { FiClock } from "react-icons/fi";

export const Card = () => (
  <div className="border shadow-md h-64 max-w-md">
    <div className="border h-5/6 flex items-center justify-center">
      <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" />
    </div>
    <div className="h-1/6 border flex items-center justify-between">
      <h1 className="w-3/4 pl-4">Name</h1>
      <div className="w-1/4 pl-2 flex items-center">
        <FiClock /> <p className="pl-2">60 h</p>
      </div>
    </div>
  </div>
);
