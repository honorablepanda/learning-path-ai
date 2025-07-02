import React, { useState } from "react";
import { mockUserProgress } from "../mock/mockUserSkills";

export default function ProgressTracker() {
  const [progress, setProgress] = useState(mockUserProgress);

  const toggleCompleted = (skill) => {
    setProgress((prev) =>
      prev.map((item) =>
        item.skill === skill ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div className="mb-6 p-4 bg-green-50 rounded border">
      <h2 className="font-semibold mb-2">Skill Progress Tracker</h2>
      <ul className="list-disc list-inside text-sm max-h-48 overflow-auto">
        {progress.map(({ skill, completed }) => (
          <li key={skill} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={completed}
              onChange={() => toggleCompleted(skill)}
            />
            <span className={completed ? "line-through text-gray-500" : ""}>
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
