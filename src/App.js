import React, { useState } from 'react';
import ChartsMazeSidebar from './components/Sidebar';
import TradePage from './pages/TradePage';
import TradeHeader from './components/TradeHeader';  

function App() {
  const [activeTab, setActiveTab] = useState('Trades');
  const [collapsed, setCollapsed] = useState(false); 

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          flexShrink: 0,
          height: '100%',
          overflowY: 'auto',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <ChartsMazeSidebar collapsed={collapsed} setCollapsed={setCollapsed} />
      </div>

      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '20px',
        }}
      >
        {/* Move TradeHeader here */}
        <TradeHeader 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          collapsed={collapsed} 
        />
        
        <TradePage 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          collapsed={collapsed} 
        />
      </div>
    </div>
  );
}

export default App;
