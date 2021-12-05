import React from "react";
import { FiClock } from "react-icons/fi";
import Link from "next/link";

export interface CardProps {
  id: string;
}
export const Card = ({ id }: CardProps) => (
  <Link href={`/recepies/${id}`}>
    <div className="bg-white shadow-md h-64 w-screen max-w-md rounded-2xl">
      <div className=" h-5/6 flex items-center justify-center">
        <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png" />
      </div>
      <div className="h-1/6 border-t flex items-center justify-between">
        <h1 className="w-3/4 pl-4">Name</h1>
        <div className="w-1/4 pl-2 flex items-center">
          <FiClock /> <p className="pl-2">60 h</p>
        </div>
      </div>
    </div>
  </Link>
);
