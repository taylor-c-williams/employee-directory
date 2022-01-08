import { Link } from 'react-router-dom';

import styles from './Splash.css';
export default function Splash() {
  return (
    <section className={styles.splash}>
      <p>
        Leverage agile frameworks to provide a robust synopsis for high level
        overviews. Iterative approaches to corporate strategy foster
        collaborative thinking to further the overall value proposition.
        Organically grow the holistic world view of disruptive innovation via
        workplace diversity and empowerment.
      </p>
      <fieldset>
        <Link to="/login">Login</Link>
        ||
        <Link to="/signup">Sign Up</Link>
      </fieldset>
      <Link to="/createprofile">create profile</Link>
      <Link to="/profile">profile</Link>
    </section>
  );
}
