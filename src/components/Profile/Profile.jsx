import { Link, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProfile } from '../../services/profiles';
import EditProfile from '../EditProfile/EditProfile';

export default function Profile() {
  const history = useHistory();
  const [profile, setProfile] = useState({});

  useEffect(async () => {
    try {
      const res = await getProfile();
      setProfile(res);
    } catch (err) {
      history.push('/createprofile');
    }
  }, []);

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
