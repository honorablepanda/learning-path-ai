import React from "react";
import SkillGapAnalyzer from "./components/SkillGapAnalyzer";
import LearningPathSuggestions from "./components/LearningPathSuggestions";
import ProgressTracker from "./components/ProgressTracker";

export default function LearningPathCoach() {
  return (
    <div style={{ maxWidth: 700, margin: "auto", padding: 20, fontFamily: "Arial, sans-serif" }}>
      <h1>📚 Learning Path AI / Upskilling Coach</h1>
      <SkillGapAnalyzer />
      <LearningPathSuggestions />
      <ProgressTracker />
    </div>
  );
}
