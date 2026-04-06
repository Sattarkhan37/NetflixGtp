import React from "react";

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="py-15 px-2">
      <h1 className="text-4xl px-2 font-bold py-2">{title}</h1>
      <p className="py-2 px-2 text-lg w-1/2">{overview}</p>
      <div className="py-2 px-2">
        <button className="rounded-lg py-2 px-2 cursor-pointer bg-gray-300 w-25 text-black">
        ⏵  Play
        </button>
        <button className="rounded-lg py-2 px-2 mx-5 cursor-pointer bg-gray-300 w-25 text-black">
          More Info
        </button>
      </div>
    </div>
  );
};
