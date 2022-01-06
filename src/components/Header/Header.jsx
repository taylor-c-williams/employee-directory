import { useUser } from '../../hooks/useUser';
import './Header.css';
export default function Header() {
  const { user } = useUser();
  return (
    <header>
      {user ? `Signing as  ${user}` : 'Not Signed in!'} This is a header
      component!
    </header>
  );
}
