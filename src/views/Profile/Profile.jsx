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

  console.log('profile component', profile);
  return (
    <>
      <fieldset>
        <i>{profile.email}</i>
        <legend>{profile.name}</legend>
        <ul>
          <li>{profile.birthday}</li>
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
