import { useState } from "react";

export const useLearningPathCoach = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const suggestPaths = async () => {
    setLoading(true);
    setError(null);
    // Dummy AI call simulation
    return new Promise((resolve) => {
      setTimeout(() => {
        setLoading(false);
        resolve([
          "Complete the Advanced React course on Coursera",
          "Learn TypeScript fundamentals",
          "Build 3 projects with REST APIs",
          "Practice algorithms on LeetCode",
        ]);
      }, 1500);
    });
  };

  return { loading, error, suggestPaths };
};
