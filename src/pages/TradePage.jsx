import React from 'react';
import TradeStats from '../components/TradeStats';
import TradeChart from '../components/TradeChart';
import RuleSelectors from '../components/RuleSelectors';
import TradeAnalysis from '../components/TradeAnalysis';

const TradePage = ({ activeTab, setActiveTab, collapsed }) => {
  return (
    <>
      {activeTab === 'Trades' ? (
        <>
          <TradeStats />
          <TradeChart />
          <RuleSelectors />
        </>
      ) : (
        <TradeAnalysis />
      )}
    </>
  );
};

export default TradePage;
