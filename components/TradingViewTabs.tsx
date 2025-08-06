import React, { useState } from 'react';

const TradingViewTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('forex');

  const tabs = [
    { id: 'forex', label: 'Forex' },
    { id: 'metals', label: 'Metals' },
    { id: 'cfds', label: 'CFDs' },
    { id: 'index', label: 'Indices' },
    { id: 'stocks', label: 'Stocks' },
  ];

  const getIframeSrc = (tabId: string) => {
    const baseUrl = 'https://s.tradingview.com/embed-widget';
    const commonParams = 'locale=en&isTransparent=true&colorTheme=dark';
    
    switch(tabId) {
      case 'forex':
        return `${baseUrl}/forex-cross-rates/?${commonParams}&currencies=EUR,USD,JPY,GBP,CHF,AUD,CAD,NZD,CNY`;
      case 'metals':
        return `${baseUrl}/symbol-overview/?${commonParams}&symbols=${encodeURIComponent('["GOLD|12m","SILVER|12m","PLATINUM|12m","PALLADIUM|12m"]')}`;
      case 'cfds':
        return `${baseUrl}/symbol-overview/?${commonParams}&symbols=${encodeURIComponent('["OIL_USD|12m","NATURAL_GAS|12m","COPPER|12m","COFFEE|12m"]')}`;
      case 'index':
        return `${baseUrl}/symbol-overview/?${commonParams}&symbols=${encodeURIComponent('["US30|12m","US500|12m","US100|12m","STOXX50|12m"]')}`;
      case 'stocks':
        return `${baseUrl}/symbol-overview/?${commonParams}&symbols=${encodeURIComponent('["NASDAQ:AAPL","NASDAQ:MSFT","NASDAQ:GOOGL","NASDAQ:AMZN"]')}`;
      default:
        return '';
    }
  };

  return (
    <div className="tradingview-tabs bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      <div className="flex border-b border-gray-700">
        {tabs.map(tab => (
          <button
            key={tab.id}
            className={`px-4 py-3 text-sm font-medium transition-colors duration-200 ${
              activeTab === tab.id 
                ? 'text-blue-400 border-b-2 border-blue-400' 
                : 'text-gray-400 hover:text-gray-200'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      <div className="h-[500px] w-full">
        <iframe
          src={getIframeSrc(activeTab)}
          className="w-full h-full"
          frameBorder="0"
          allowTransparency
          scrolling="no"
          title="TradingView Widget"
        ></iframe>
      </div>
      
      <style jsx global>{`
        .tradingview-widget-copyright {
          display: none !important;
        }
      `}</style>
    </div>
  );
};

export default TradingViewTabs;
