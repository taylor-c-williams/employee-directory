import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';

export default function ConfirmEmail() {
  const { email } = useForm();
  return (
    <div>
      Success! An email has been sent to {email}
      <p>
        <Link to="/">Back Home</Link>
      </p>
    </div>
  );
}
