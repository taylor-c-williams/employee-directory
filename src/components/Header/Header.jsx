import { Link, useHistory } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';
import { signOutUser, signInUser } from '../../services/users';
import './Header.css';
export default function Header() {
  const { user, setUser } = useUser();
  const history = useHistory();

  function logOutButton() {
    signOutUser();
    setUser('');
    history.push('/');
  }

  function logInButton() {
    <Link to="/login">Log In</Link>;
  }

  console.log('user', user);
  return (
    <header>
      <Link to="/">Home</Link>
      {user.email ? (
        <span>
          {' '}
          Authenticated as ${user.email} ♡{' '}
          {user.last_sign_in_at
            ? `Last sign in at ${user.last_sign_in_at}`
            : null}{' '}
          <button onClick={() => logOutButton()}>Sign Out</button>{' '}
        </span>
      ) : (
        <span>
          Not Signed in!
          <button onClick={() => logInButton()}>Log In</button>
        </span>
      )}
    </header>
  );
}
