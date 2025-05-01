import React from 'react';
import './TradeStats.css';

const TradeStats = () => {
  return (
    <div className="trade-stats-container">
      <div className="top-row">
        <div className="date-capital">
         
  <label>Sell Dates</label>
  <input type="date" value="2022-04-04" />
  <span>~</span>
  <input type="date" value="2025-03-22" />

        </div>

        <div className="capital-input">
          <label>Initial Total Capital:</label>
          <input type="number" value={0} readOnly />
        </div>

        <input className="search-input" placeholder="Search Trades by Symbol..." />
      </div>

      <div className="stock-name">EASEMYTRIP</div>

      <div className="info-grid">
        <div>
          <label>Status</label>
          <div className="status-tag win">Win</div>
        </div>

        <div>
          <label>Avg Buying Price</label>
          <div className="value">608.00</div>
        </div>

        <div>
          <label>Avg Selling Price</label>
          <div className="value">374.10</div>
        </div>

        <div>
          <label>QNT</label>
          <div className="value">330</div>
        </div>

        <div>
          <label>Days Held</label>
          <div className="value">53</div>
        </div>

        <div>
          <label>P/L</label>
          <div className="profit">23.06% (₹23133.00)</div>
        </div>

        <div>
          <label>Portfolio P/L | Current Balance</label>
          <div className="profit">N/A % | ₹23133.00</div>
        </div>

        <div className="sl-input">
          <label>SL Price</label>
          <input type="text" placeholder="Enter SL"  />
        </div>

        <div>
          <label>RR Ratio</label>
          <div className="value">N/A</div>
        </div>

        <div>
          <label>Risk INR | %</label>
          <div className="value">0.00 | 0.00%</div>
        </div>
      </div>
    </div>
  );
};

export default TradeStats;
