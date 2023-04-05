import { Route, Switch } from 'react-router-dom';
import ListMovie from './ListMovie';
import './styles.css';

const Listing = () => {
  return (
    <Switch>
      <Route path="/page/listing" exact>
        <ListMovie />
      </Route>
    </Switch>
  );
};

export default Listing;
