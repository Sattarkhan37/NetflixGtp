import React, { useEffect } from "react";
import Header from "./Header";
import { API_OPTIONS } from "../utils/constants";

const Browse = () => {
  const getNowPlayingMovie = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS,
    );
    const json = await data.json();
    console.log(json);
  };
  useEffect(() => {
    getNowPlayingMovie();
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;
