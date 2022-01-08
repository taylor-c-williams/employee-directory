import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { updateProfile } from '../../services/profiles';
import { useProfile } from '../../hooks/useProfile';

export default function EditProfile() {
  const { profile, name, setName, bio, setBio, birthday, setBirthday } =
    useProfile();

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile({ name, email: profile.email, bio, birthday });
    alert('saved!');
    history.push('/profile');
  };

  console.log('edit', profile);
  return (
    <div>
      <fieldset>
        <legend>Edit Profile</legend>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            required
            defaultValue={profile.name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="bio">Bio</label>
          <textarea
            id="bio"
            required
            defaultValue={profile.bio}
            onChange={(e) => setBio(e.target.value)}
          />

          <label htmlFor="dob">D.O.B</label>
          <input
            id="dob"
            type="date"
            required
            defaultValue={profile.birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />

          <button>Save!</button>
        </form>
      </fieldset>
    </div>
  );
}
