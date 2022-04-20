import { Link, useHistory } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';
import { signUpUser, signInUser } from '../../services/users';
import UserForm from '../UserForm/UserForm';
import styles from './Auth.css';

export default function Auth({ isSigningUp = false }) {
  const history = useHistory();
  const { setUser } = useUser();

  const formSubmit = async (email, password) => {
    try {
      if (isSigningUp) {
        signUpUser(email, password);
        history.push('/confirm-email');
      } else {
        const res = await signInUser(email, password);
        setUser(res);
        history.push('/profile');
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <div className={styles.auth}>
      <UserForm
        label={isSigningUp ? 'Sign Up' : 'Sign In'}
        onSubmit={formSubmit}
      />
      <Link to="/">Back Home</Link>
      {isSigningUp ? (
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      ) : (
        <p>
          Need an account? <Link to="/signup">Sign Up!</Link>
        </p>
      )}
    </div>
  );
}
