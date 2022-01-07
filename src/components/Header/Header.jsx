import { useUser } from '../../hooks/useUser';
import './Header.css';
export default function Header() {
  const { user } = useUser();
  console.log(user);
  return (
    <header>
      {user
        ? `Authenticated as ${user.email} ♡  Last sign in at ${user.last_sign_in_at}`
        : 'Not Signed in!'}
    </header>
  );
}
