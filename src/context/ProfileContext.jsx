import { createContext, useState } from 'react';
import { getProfile } from '../services/profiles';

const ProfileContext = createContext();
const ProfileProvider = ({ children }) => {
  const [showEditProfile, setShowEditProfile] = useState(false);
  const currentProfile = getProfile();
  const [profile, setProfile] = useState({ ...currentProfile });
  const [name, setName] = useState(currentProfile.name);
  const [bio, setBio] = useState(currentProfile.bio);
  const [birthday, setBirthday] = useState(currentProfile.birthday);

  return (
    <ProfileContext.Provider
      value={{
        showEditProfile,
        setShowEditProfile,
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
