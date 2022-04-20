import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getProfile, updateProfile } from '../../services/profiles';
import { useProfile } from '../../hooks/useProfile';
import styles from './EditProfile.css';

export default function EditProfile() {
  const {
    setShowEditProfile,
    profile,
    setProfile,
    name,
    setName,
    bio,
    setBio,
    birthday,
    setBirthday,
  } = useProfile();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newProfile = await updateProfile({
      name,
      email: profile.email,
      bio,
      birthday,
    });
    await setProfile(newProfile[0]);
    setShowEditProfile(false);
  };

  return (
    <div className={styles.editprofile}>
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
