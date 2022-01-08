import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProfile } from '../../services/profiles';
import { useProfile } from '../../hooks/useProfile';
import EditProfile from '../../components/EditProfile/EditProfile';
import CreateProfile from '../../components/CreateProfile/CreateProfile';

export default function Profile() {
  const { profile, setProfile, showEditProfile, setShowEditProfile } =
    useProfile();

  useEffect(async () => {
    try {
      const res = await getProfile();
      setProfile(res);
      setShowEdit(false);
    } catch (err) {
      <CreateProfile {...profile} />;
    }
  }, []);

  const handleClick = (e) => {
    setShowEditProfile(true);
  };

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const newBirthday = new Date(profile.birthday).toLocaleDateString(
    'en-Us',
    options
  );

  console.log(newBirthday);
  return (
    <>
      <fieldset>
        <i>{profile.email}</i>
        <legend>{profile.name}</legend>
        <ul>
          <li>{newBirthday}</li>
          <li>{profile.bio}</li>
        </ul>
        <button onClick={handleClick}>Edit</button>
      </fieldset>
      {showEditProfile ? <EditProfile /> : null}
      <p>
        <Link to="/">Back Home</Link>
      </p>
    </>
  );
}
