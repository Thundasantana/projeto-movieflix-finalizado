import { Movie } from 'type/movie';
import './styles.css';

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="base-card movie-card">
      <div className="card-top-container">
        <img src={movie.imgUrl} alt={movie.title} />
      </div>
      <div className="card-title-container">
        <h6>{movie.title}</h6>
      </div>
      <div className="card-year-container">
        <p>{movie.year}</p>
      </div>
      <div className="card-subtitulo-container">
        <p>{movie.subTitle}</p>
      </div>
    </div>
  );
};

export default MovieCard;
