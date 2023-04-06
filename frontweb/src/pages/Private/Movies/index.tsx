import { Route, Switch } from 'react-router-dom';
import ListMovie from './ListMovie';

const Movies = () => {
  return (
    <Switch>
      <Route path="/private/movies" exact>
        <ListMovie />
      </Route>
    </Switch>
  );
};

export default Movies;
