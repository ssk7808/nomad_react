import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../components/MovieInfo";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(json);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <h1> loading... </h1>
      ) : (
        <div>
          <MovieInfo
            title={movie.title_long}
            coverImg={movie.large_cover_image}
            genres={movie.genres}
            description={movie.description_full}
            runtime={movie.runtime}
            rating={movie.rating}
          />
        </div>
      )}
    </div>
  );
}
export default Detail;
