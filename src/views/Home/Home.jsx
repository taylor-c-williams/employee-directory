import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from '../../components/PrivateRoute/PrivateRoute';
import Splash from '../../components/Splash/Splash';
import Profile from '../../components/Profile/Profile';
import LogIn from '../../components/LogIn/LogIn';
import SignUp from '../../components/SignUp/SignUp';
export default function Home() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Splash />
          </Route>
          <Route exact path="/login">
            <LogIn />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute>
        </Switch>
      </Router>
    </>
  );
}
