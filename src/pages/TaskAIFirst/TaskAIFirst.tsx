import { useNavigate } from "react-router-dom";
import { useSession } from "../../app/session/SessionContext";

export default function TaskAIFirst() {
  const nav = useNavigate();
  const { setCaptionIdeas } = useSession();

  return (
    <div>
      <h1>Task – AI First</h1>

      <p>
        You are shown an AI-generated meme. Improve the caption to make it
        funnier or more relatable.
      </p>

      {/* Placeholder for AI meme */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: 16,
          marginBottom: 16,
        }}
      >
        <p><strong>AI Meme (placeholder)</strong></p>
        <img
          src="https://via.placeholder.com/300x300"
          alt="AI meme"
        />
        <p>When the AI writes your meme...</p>
      </div>

      <textarea
        placeholder="Write your improved caption here..."
        style={{ width: "100%", minHeight: 80 }}
      />

      <button
        onClick={() => {
          // later: save improved caption properly
          setCaptionIdeas(["Improved caption"]);
          nav("/review");
        }}
      >
        Continue
      </button>
    </div>
  );
}
