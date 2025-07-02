import React from "react";
import SkillGapAnalyzer from "./components/SkillGapAnalyzer";
import LearningPathSuggestions from "./components/LearningPathSuggestions";
import ProgressTracker from "./components/ProgressTracker";

export default function LearningPathCoach() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">📚 Learning Path AI / Upskilling Coach</h1>
      <SkillGapAnalyzer />
      <LearningPathSuggestions />
      <ProgressTracker />
    </div>
  );
}
