import { Route, Switch } from 'react-router-dom';
import './styles.css';
import Movies from '../Movies';
import MovieDetails from '../MovieDetails';

const Listing = () => {
  return (
    <Switch>
    <Route path="/movies" exact>
      <Movies />
    </Route>
    <Route path="/movies/:movieId">
      <MovieDetails />
    </Route>
  </Switch>
  );
};

export default Listing;
