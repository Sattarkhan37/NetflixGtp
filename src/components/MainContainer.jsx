import { useSelector } from "react-redux";
import { VideoTitle } from "./VideoTitle";
import { VideoBackground } from "./VideoBackground";

function MainContainer() {
  const movies = useSelector((store) => store.movies?.NowPlayingMovies);
  if (!movies) return null;
  const mainMOvie = movies[0];
  console.log("movies:", mainMOvie);
  const { original_title, overview } = mainMOvie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground />
    </div>
  );
}

export default MainContainer;
