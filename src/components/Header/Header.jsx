import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';
import { signOutUser, getUser } from '../../services/users';
import './Header.css';
export default function Header() {
  const { user, setUser } = useUser();
  const history = useHistory();

  function logOutButton() {
    signOutUser();
    setUser('');
    history.push('/');
  }

  console.log('user', user);
  return (
    <header>
      <Link to="/">Home</Link>
      {user.email ? (
        <span>
          {' '}
          `Authenticated as ${user.email} ♡`
          <button onClick={() => logOutButton()}>
            Sign OUUUUUTTTT BiASTCH
          </button>
        </span>
      ) : (
        'Not Signed in!'
      )}
      {user.last_sign_in_at ? `Last sign in at ${user.last_sign_in_at}` : null}
    </header>
  );
}
