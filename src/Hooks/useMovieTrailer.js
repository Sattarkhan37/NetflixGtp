import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();
  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieID +
        "/videos?language=en-US",
      API_OPTIONS,
    );
    const json = await data.json();
    console.log("Video", json);
    const filterData = json.results.filter((v) => v.type === "Trailer");
    const trailer = filterData.length === 0 ? filterData[0] : json.results[0];
    console.log(trailer);
    // setTrailId(trailer.key);
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    if (!movieID) return;
    getMovieVideo();
  }, [movieID]);
};
export default useMovieTrailer;
