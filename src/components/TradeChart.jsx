import React, { useEffect, useRef } from 'react';
import './TradeChart.css';

const TradeChart = () => {
  const entryChartRef = useRef(null);
  const exitChartRef = useRef(null);

  useEffect(() => {
    // Load TradingView script
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = initializeCharts;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const initializeCharts = () => {
    if (window.TradingView) {
      // Initialize Entry Chart
      new window.TradingView.widget({
        container_id: entryChartRef.current.id,
        autosize: true,
        symbol: 'NSE:EASEMYTRIP',
        interval: 'D',
        timezone: 'Asia/Kolkata',
        theme: 'light',
        style: '1',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        hide_top_toolbar: false,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        details: true,
        studies: [],
        show_popup_button: true,
        popup_width: '1000',
        popup_height: '650',
      });

      // Initialize Exit Chart
      new window.TradingView.widget({
        container_id: exitChartRef.current.id,
        autosize: true,
        symbol: 'NSE:EASEMYTRIP',
        interval: 'D',
        timezone: 'Asia/Kolkata',
        theme: 'light',
        style: '1',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        hide_top_toolbar: false,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        details: true,
        studies: [],
        show_popup_button: true,
        popup_width: '1000',
        popup_height: '650',
      });
    }
  };

  return (
    <div className="trade-charts-container">
      <div className="chart-card">
        <div className="chart-header">
          <h3>Entry Chart</h3>
          <div className="chart-info">
            <span>EASEMYTRIP - 1D - NSE</span>
            <span>013.1 H13.6 L13.1 C13.5 +0.4 (+3.05%)</span>
          </div>
        </div>
        <div id="entry-chart" ref={entryChartRef} className="chart-wrapper" />
      </div>

      <div className="chart-card">
        <div className="chart-header">
          <h3>Exit Chart</h3>
          <div className="chart-info">
            <span>EASEMYTRIP - 1D - NSE</span>
            <span>013.1 H13.6 L13.1 C13.5 +0.4 (+3.05%)</span>
          </div>
        </div>
        <div id="exit-chart" ref={exitChartRef} className="chart-wrapper" />
      </div>
    </div>
  );
};

export default TradeChart;