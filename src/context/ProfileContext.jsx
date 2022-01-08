import { createContext, useState } from 'react';
import { getProfile } from '../services/profiles';

const ProfileContext = createContext();
const ProfileProvider = ({ children }) => {
  const currentProfile = getProfile();
  const [profile, setProfile] = useState({ ...currentProfile });
  const [name, setName] = useState(currentProfile.name);
  const [bio, setBio] = useState(currentProfile.bio);
  const [birthday, setBirthday] = useState(currentProfile.birthday);

  return (
    <ProfileContext.Provider
      value={{
        profile,
        setProfile,
        name,
        setName,
        bio,
        setBio,
        birthday,
        setBirthday,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
export { ProfileProvider, ProfileContext };
