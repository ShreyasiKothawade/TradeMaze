import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import "./TradeAnalysis.css";

const COLORS = {
  good: "#006400",
  bad: "#8B0000",
  neutral: "#AAAAAA",
};

const SituationalData = [
  { name: "Strong Sector", value: 70, color: COLORS.good },
  { name: "Uptrend Market+ Strong Sector", value: 10, color: COLORS.good },
  { name: "Bad Fundamentals", value: 10, color: COLORS.bad },
  { name: "Uptrend Market", value: 10, color: COLORS.good },
];

const EntryTriggerData = [
  { name: "Emotional Buy", value: 30, color: COLORS.bad },
  { name: "Low Cheat Entry", value: 20, color: COLORS.good },
  { name: "VCP Buy", value: 20, color: COLORS.good },
  { name: "Horizontal BO+ Tightness Breakout", value: 10, color: COLORS.good },
  { name: "Horizontal BO", value: 10, color: COLORS.good },
  { name: "Tightness Breakout", value: 10, color: COLORS.good },
];

const TradePieChart = ({ title, good, bad, unknown, data }) => (
  <div className="chart-container">
    <h3>{title}</h3>
    <div className="legend">
      <span style={{ color: COLORS.good }}>Good {good}%</span>
      <span style={{ color: COLORS.bad }}>Bad {bad}%</span>
      <span>Unknown {unknown}%</span>
    </div>
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={90}
          dataKey="value"
          label={({ percent }) => `${(percent * 100).toFixed(1)}%`}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
    <div className="center-label"><br/><br/>10<br />Total Trades</div>
    <ul className="legend-list">
      {data.map((entry, index) => (
        <li key={index}>
          <span
            className="legend-color"
            style={{ backgroundColor: entry.color }}
          ></span>
          {entry.name} - {entry.value.toFixed(1)}%
        </li>
      ))}
    </ul>
  </div>
);

const TradeAnalysis = () => (
  <div className="trade-analysis-wrapper">
    <TradePieChart
      title="Situational Awareness Analysis"
      good={90}
      bad={10}
      unknown={0}
      data={SituationalData}
    />
    <TradePieChart
      title="Entry Trigger Analysis"
      good={70}
      bad={30}
      unknown={0}
      data={EntryTriggerData}
    />
  </div>
);

export default TradeAnalysis;
