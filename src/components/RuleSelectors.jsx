import React, { useState } from "react";
import "./RuleSelectors.css"; // External CSS

const dummyOptions = [
  "Rule 1: MACD crossover",
  "Rule 2: RSI overbought",
  "Rule 3: Moving average break",
  "Rule 4: Price action",
];

const RuleDropdown = ({ label }) => {
  const [selectedRule, setSelectedRule] = useState("");

  return (
    <div className="rule-group">
      <label className="rule-label">{label}</label>
      <select
        className="rule-select"
        value={selectedRule}
        onChange={(e) => setSelectedRule(e.target.value)}
      >
        <option value="">Select a rule</option>
        {dummyOptions.map((rule, idx) => (
          <option key={idx} value={rule}>
            {rule}
          </option>
        ))}
      </select>
      <p className="rule-hint">{selectedRule ? selectedRule : "No rules selected"}</p>
    </div>
  );
};

const RuleSelectors = () => {
  return (
    <div className="selectors-wrapper">
      <div className="selectors-column">
        <RuleDropdown label="SITUATIONAL AWARENESS" />
        <RuleDropdown label="ENTRY TRIGGER" />
      </div>
      <div className="selectors-column">
        <RuleDropdown label="RISK MANAGEMENT" />
        <RuleDropdown label="EXIT TRIGGER" />
      </div>
    </div>
  );
};

export default RuleSelectors;
