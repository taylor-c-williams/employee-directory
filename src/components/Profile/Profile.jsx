import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProfile } from '../../services/profiles';
import CreateProfile from '../CreateProfile/CreateProfile';
import EditProfile from '../EditProfile/EditProfile';

export default function Profile() {
  const [profile, setProfile] = useState(false);

  useEffect(async () => {
    try {
      const res = await getProfile();
      setProfile(res);
    } catch (err) {
      console.log(err);
    }
  }, []);

  console.log(profile);
  return (
    <>
      profile component
      {profile ? <EditProfile /> : <CreateProfile />}
      <p>
        <Link to="/">Back Home</Link>
      </p>
    </>
  );
}
