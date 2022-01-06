import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Splash from '../../components/Splash/Splash';
import Profile from '../../components/Profile/Profile';
import Auth from '../../components/Auth/Auth';

export default function Home() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Splash />
          </Route>
          <Route exact path="/login">
            <Auth />
          </Route>
          <Route exact path="/signup">
            <Auth isSigningUp />
          </Route>
          <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
}
