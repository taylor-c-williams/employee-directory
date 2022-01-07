import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { updateProfile } from '../../services/profiles';

export default function EditProfile({ ...profile }) {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [bio, setBio] = useState();
  const [birthday, setBirthday] = useState();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile({ name, email, bio, birthday });
    alert('saved!');
    history.push('/profile');
  };
  console.log('edit profile profile', profile);

  return (
    <div>
      <fieldset>
        <legend>Edit Profile</legend>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            required
            placeholder={profile.name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            required
            placeholder={profile.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            required
            placeholder={profile.bio}
            onChange={(e) => setBio(e.target.value)}
          />

          <label htmlFor="dob">D.O.B</label>
          <input
            id="dob"
            type="text"
            placeholder={profile.birthday}
            pattern="^(0?[1-9]|1[0-2])/(0?[1-9]|1[0-9]|2[0-9]|3[01])/\d{4}$"
            required
            onChange={(e) => setBirthday(e.target.value)}
          />

          <button>Save!</button>
        </form>
      </fieldset>
    </div>
  );
}
