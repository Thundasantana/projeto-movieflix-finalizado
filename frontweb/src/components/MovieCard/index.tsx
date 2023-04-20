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
      <div className="card-title">
        <h6>{movie.title}</h6>
      </div>
      <div className="card-bottom-container">
        <p>{movie.year}</p>
      </div>
      <div className="card-subtitulo">
        <p>{movie.subTitle}</p>
      </div>
    </div>
  );
};

export default MovieCard;
