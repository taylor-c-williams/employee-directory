import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';

export default function Home() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/">
            <Splash />
          </Route>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
}
