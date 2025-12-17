import { useNavigate } from "react-router-dom";

export default function Feedback() {
  const nav = useNavigate();

  return (
    <div>
      <h1>Feedback</h1>
      <textarea placeholder="Your feedback..." />

      <br />
      <button onClick={() => nav("/done")}>Submit</button>
    </div>
  );
}
