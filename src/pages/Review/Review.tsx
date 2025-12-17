import { useNavigate } from "react-router-dom";
import { useSession } from "../../app/session/SessionContext";

export default function Review() {
  const nav = useNavigate();
  const { memes } = useSession();

  return (
    <div>
      <h1>Review Memes</h1>
      <p>Rate the memes below.</p>

      {memes.length === 0 && <p>(No memes yet – placeholder)</p>}

      <button onClick={() => nav("/feedback")}>Continue</button>
    </div>
  );
}
