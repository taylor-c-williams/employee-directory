import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createProfile } from '../../services/profiles';
import { useUser } from '../../hooks/useUser';

export default function CreateProfile({ ...profile }) {
  const user = useUser();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [bio, setBio] = useState();
  const [birthday, setBirthday] = useState();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    createProfile({ name, email, bio, birthday });
    history.push('/profile');
  };
  console.log('create profile profile', profile);
  return (
    <div>
      <fieldset>
        <legend>Create Profile</legend>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input id="name" required onChange={(e) => setName(e.target.value)} />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            required
            onChange={(e) => setBio(e.target.value)}
          />

          <label htmlFor="dob">D.O.B</label>
          <input
            id="dob"
            type="date"
            required
            onChange={(e) => setBirthday(e.target.value)}
          />
          <button>Create!</button>
        </form>
      </fieldset>
    </div>
  );
}
