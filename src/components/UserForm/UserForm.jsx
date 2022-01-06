import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../hooks/useUser';
import { signUpUser, signInUser } from '../../services/users';

export default function UserForm({ label }) {
  const history = useHistory();
  const { setUser } = useUser();
  const [emailInput, setEmailInput] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
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
  console.log(emailInput);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>{label}</legend>
          <label htmlFor="email">E-Mail Address</label>
          <input
            id="email"
            type="email"
            required
            onChange={(e) => setEmailInput(e.target.value)}
          />
          <input id="password" type="password" minLength="8" />
        </fieldset>
      </form>
    </div>
  );
}
