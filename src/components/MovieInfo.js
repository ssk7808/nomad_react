import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function MovieInfo({ coverImg, genres, rating, runtime, title, description }) {
  return (
    <div>
      <button>
        <Link to={`/`}> Home </Link>
      </button>
      <h1>{title}</h1>
      <img src={coverImg} />
      <h3>Rating: {rating}</h3>
      <h3>Runtime: {runtime} min </h3>
      <ul>
        {genres.map((gen) => (
          <li key={gen}>{gen}</li>
        ))}
      </ul>
      <p>{description}</p>
    </div>
  );
}

MovieInfo.propTypes = {
  coverImg: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MovieInfo;
