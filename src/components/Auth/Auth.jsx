import { Link } from 'react-router-dom';
import UserForm from '../UserForm/UserForm';

export default function Auth({ isSigningUp = false }) {
  return (
    <div>
      <UserForm label={isSigningUp ? 'Sign Up' : 'Sign In'} />

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
