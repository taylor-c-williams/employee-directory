import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProfile } from '../../services/profiles';
import EditProfile from '../EditProfile/EditProfile';
import CreateProfile from '../CreateProfile/CreateProfile';

export default function Profile() {
  const history = useHistory();
  const [profile, setProfile] = useState({});

  useEffect(async () => {
    try {
      const res = await getProfile();
      setProfile(res);
    } catch (err) {
      <CreateProfile {...profile} />;
    }
  }, []);
  console.log('profile', profile);
  return (
    <>
      profile component
      <EditProfile />
      <p>
        <Link to="/">Back Home</Link>
      </p>
    </>
  );
}
