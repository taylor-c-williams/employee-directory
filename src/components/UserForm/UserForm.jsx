import { useForm } from '../../hooks/useForm';

export default function UserForm({ label, onSubmit }) {
  const { email, setEmail, password, setPassword } = useForm();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || password.length < 8)
      throw new Error(
        'An E-mail address and password with 8+ characters is required'
      );
    await onSubmit(email, password);
  };
  console.log(email);
  console.log(password);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>{label}</legend>
          <label htmlFor="email">E-Mail Address</label>
          <input
            id="email"
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            minLength="8"
            placeholder="Must be 8+ characters"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>{label}</button>
        </fieldset>
      </form>
    </div>
  );
}
