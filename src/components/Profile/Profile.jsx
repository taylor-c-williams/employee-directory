import { Link } from 'react-router-dom';
export default function Profile() {
  return (
    <>
      profile component
      {/* <fieldset>{hasProfile ? <EditProfile /> : <CreateProfile />}</fieldset> */}
      <p>
        <Link to="/">Back Home</Link>
      </p>
    </>
  );
}
