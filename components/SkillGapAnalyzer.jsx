import React, { useState } from "react";

export default function SkillGapAnalyzer() {
  const [resumeText, setResumeText] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [analysis, setAnalysis] = useState(null);

  const analyzeGap = () => {
    // Dummy logic to find missing skills
    const resumeSkills = resumeText.toLowerCase().split(/\W+/);
    const jobSkills = jobDesc.toLowerCase().split(/\W+/);
    const missing = jobSkills.filter((skill) => skill && !resumeSkills.includes(skill));
    setAnalysis(missing.length > 0 ? missing : ["No missing skills detected!"]);
  };

  return (
    <div className="mb-6 p-4 bg-gray-50 rounded border">
      <h2 className="font-semibold mb-2">Skill Gap Analyzer</h2>
      <textarea
        rows={4}
        placeholder="Paste your resume text here"
        className="w-full border p-2 rounded mb-2"
        value={resumeText}
        onChange={(e) => setResumeText(e.target.value)}
      />
      <textarea
        rows={4}
        placeholder="Paste job description here"
        className="w-full border p-2 rounded mb-2"
        value={jobDesc}
        onChange={(e) => setJobDesc(e.target.value)}
      />
      <button
        onClick={analyzeGap}
        className="bg-blue-700 text-white px-3 py-1 rounded"
        disabled={!resumeText || !jobDesc}
      >
        Analyze Skill Gap
      </button>
      {analysis && (
        <div className="mt-3 p-2 bg-white border rounded text-sm">
          <b>Missing Skills:</b>
          <ul className="list-disc list-inside">
            {analysis.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
