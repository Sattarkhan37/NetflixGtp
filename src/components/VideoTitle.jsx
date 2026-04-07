import React from "react";

export const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video py-[15%] px-2 absolute text-amber-50 bg-gradient-to-r from-black">
      <h1 className="text-3xl px-4 font-bold py-2">{title}</h1>
      <p className="py-2 px-4 text-0.5xl w-1/2">{overview}</p>
      <div className="py-2 px-2">
        <button className="rounded-lg py-2 px-2 cursor-pointer bg-gray-300 w-25 text-black hover:bg-gray-300/30">
          ⏵ Play
        </button>
        <button className="rounded-lg py-2 px-2 mx-5 cursor-pointer bg-gray-300/30 w-25 text-black">
          More Info
        </button>
      </div>
    </div>
  );
};
