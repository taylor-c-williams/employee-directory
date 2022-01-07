import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Splash from '../../components/Splash/Splash';
import Profile from '../../components/Profile/Profile';
import Auth from '../../components/Auth/Auth';
import ConfirmEmail from '../../components/ConfirmEmail/ConfirmEmail';

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
          <Route exact path="/confirm-email">
            <ConfirmEmail />
          </Route>
          {/* <PrivateRoute exact path="/profile"> */}
          <Route exact path="/profile">
            <Profile />
          </Route>
          {/* </PrivateRoute> */}
        </Switch>
      </Router>
    </>
  );
}
