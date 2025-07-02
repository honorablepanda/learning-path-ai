import React, { useState } from "react";
import { useLearningPathCoach } from "../hooks/useLearningPathCoach";

export default function LearningPathSuggestions() {
  const { suggestPaths, loading, error } = useLearningPathCoach();
  const [paths, setPaths] = useState([]);
  const [triggered, setTriggered] = useState(false);

  const generateSuggestions = async () => {
    const suggestions = await suggestPaths();
    setPaths(suggestions);
    setTriggered(true);
  };

  return (
    <div className="mb-6 p-4 bg-blue-50 rounded border">
      <h2 className="font-semibold mb-2">AI Learning Path Suggestions</h2>
      <button
        onClick={generateSuggestions}
        disabled={loading}
        className="bg-blue-700 text-white px-3 py-1 rounded"
      >
        {loading ? "Generating..." : "Generate Suggestions"}
      </button>
      {error && <div className="text-red-600 mt-2">{error}</div>}
      {triggered && !loading && (
        <ul className="list-disc list-inside mt-3 text-sm">
          {paths.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
