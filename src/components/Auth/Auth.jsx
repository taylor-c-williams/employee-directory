import { Link, useHistory } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';
import { signUpUser, signInUser, getUser } from '../../services/users';
import UserForm from '../UserForm/UserForm';

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
    <div>
      <UserForm
        label={isSigningUp ? 'Sign Up' : 'Sign In'}
        onSubmit={formSubmit}
      />

      {isSigningUp ? (
        <p>
          Already have an account? <Link to="/login">Log In</Link>
        </p>
      ) : (
        <p>
          Need an account? <Link to="/signup">Sign Up!</Link>
        </p>
      )}

      <Link to="/">Back Home</Link>
    </div>
  );
}
