import { Link } from 'react-router-dom';
import './styles.css';

const Listing = () => {

  return (
    <div className="movie-container">
      <h2>Tela Listagem de filmes</h2>
      <div className="movie">
        <ul>
          <Link to="/movies/1">
            <li>Acessar / Movies/1</li>
          </Link>
          <Link to="/movies/2">
            <li>Acessar / Movies/2</li>
          </Link>
          
        </ul>
      </div>
    </div>
  );
};

export default Listing;
