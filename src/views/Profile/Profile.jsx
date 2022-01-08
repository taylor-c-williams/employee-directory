import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProfile, updateProfile } from '../../services/profiles';
import { useProfile } from '../../hooks/useProfile';
import EditProfile from '../../components/EditProfile/EditProfile';
import CreateProfile from '../../components/CreateProfile/CreateProfile';

export default function Profile() {
  const { profile, setProfile } = useProfile();
  const [showEdit, setShowEdit] = useState(false);

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
    setShowEdit(true);
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
      {showEdit ? <EditProfile /> : null}
      <p>
        <Link to="/">Back Home</Link>
      </p>
    </>
  );
}
