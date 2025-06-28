import { useState } from "react";
import axios from "axios";
import Link from "next/link";

export default function Dashboard() {
  const [topic, setTopic] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const getExplanation = async () => {
    setLoading(true);
    setResult("");
    try {
      const res = await axios.post("/api/groq", { topic });
      setResult(res.data.reply);
    } catch (err) {
      setResult("❌ Error fetching explanation.");
    } finally {
      setLoading(false);
    }
  };

  const getStudyPlan = async () => {
  setLoading(true);
  setResult("");
  try {
    const res = await axios.post("/api/gemini", {
      prompt: `Create a detailed study plan to learn ${topic} as a beginner.`,
    });
    setResult(res.data.reply);
  } catch (err) {
    setResult("❌ Error fetching study plan.");
  } finally {
    setLoading(false);
  }
};
const [summary, setSummary] = useState("");

const summarizeResult = async () => {
  try {
    const res = await axios.post("/api/summarize", {
  text: result.slice(0, 800), // truncate to 800 characters
});

    setSummary(res.data.summary);
  } catch {
    setSummary("❌ Error generating summary.");
  }
};


  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-4 py-10">
      <h1 className="text-4xl font-bold mb-6">📚 EduMorph Dashboard</h1>
      
      <input
        type="text"
        className="w-full max-w-md p-3 rounded bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter a topic (e.g., Photosynthesis)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />

      <button
        onClick={getExplanation}
        disabled={loading || !topic}
        className="mt-4 px-6 py-2 bg-green-600 hover:bg-green-700 rounded disabled:opacity-50"
      >
        {loading ? "Loading..." : "Get AI Explanation"}
      </button>

        <button
  onClick={getStudyPlan}
  disabled={loading || !topic}
  className="mt-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded disabled:opacity-50"
>
  {loading ? "Loading..." : "Generate Study Plan"}
</button>

      {result && (
        <div className="bg-gray-800 mt-6 p-4 rounded max-w-2xl w-full whitespace-pre-line">
          {result}
        </div>
      )}
    </div>
  );
}

