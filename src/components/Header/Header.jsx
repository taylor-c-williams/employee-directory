import { Link, useHistory } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';
import { signOutUser, signInUser } from '../../services/users';
import styles from './Header.css';
export default function Header() {
  const { user, setUser } = useUser();
  const history = useHistory();

  function logOutButton() {
    signOutUser();
    setUser('');
    history.push('/');
  }
  console.log(user);
  return (
    <section className={styles.main}>
      <Link to="/">Home</Link>
      {user.email ? (
        <span>
          {' '}
          Authenticated as {user.email} ♡{' '}
          {user.last_sign_in_at
            ? `Last sign in at ${user.last_sign_in_at}`
            : null}{' '}
          <button onClick={() => logOutButton()}>Sign Out</button>{' '}
        </span>
      ) : (
        <span>
          Not Signed in!
          <button
            onClick={() => {
              window.location.href = '/login';
            }}
          >
            Log In
          </button>
        </span>
      )}
    </section>
  );
}
