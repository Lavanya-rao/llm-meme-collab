import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the app.</p>

      <p>
        Go to <Link to="/about">About</Link> or <Link to="/contact">Contact</Link>.
      </p>
    </div>
  );
}
