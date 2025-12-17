import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSession } from "../../app/session/SessionContext";

export default function TaskHumanFirst() {
  const nav = useNavigate();
  const { topic, templates, setCaptionIdeas } = useSession();

  const [ideas, setIdeas] = useState(["", "", ""]);

  const canContinue = useMemo(
    () => ideas.every((x) => x.trim().length >= 3),
    [ideas]
  );

  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
      <section>
        <h2>Task</h2>
        <p>Create 3 meme caption ideas for the topic.</p>
        <h3>Topic</h3>
        <pre>{topic ? `${topic.title}\n${topic.description}` : "No topic selected"}</pre>
      </section>

      <section>
        <h2>Templates</h2>
        <p>(Show selectable template cards here)</p>
        <pre>{templates.length ? `${templates.length} templates selected` : "No templates"}</pre>
      </section>

      <section>
        <h2>Your caption ideas</h2>
        {ideas.map((v, i) => (
          <div key={i} style={{ marginBottom: 8 }}>
            <label>Idea {i + 1}</label>
            <input
              value={v}
              onChange={(e) => {
                const next = [...ideas];
                next[i] = e.target.value;
                setIdeas(next);
              }}
              style={{ width: "100%" }}
            />
          </div>
        ))}

        <button
          disabled={!canContinue}
          onClick={() => {
            setCaptionIdeas(ideas.map((x) => x.trim()));
            nav("/review");
          }}
        >
          Continue
        </button>
      </section>
    </div>
  );
}
