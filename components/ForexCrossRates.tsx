import React from 'react';

const ForexCrossRates: React.FC = () => {
  return (
    <div className="tradingview-widget-container" style={{ width: '100%', height: '400px' }}>
      <style jsx global>{`n        .tradingview-widget-copyright {
          font-size: 13px !important;
          line-height: 32px !important;
          text-align: center !important;
          vertical-align: middle !important;
          font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif !important;
          color: #B2B5BE !important;
        }

        .tradingview-widget-copyright .blue-text {
          color: #2962FF !important;
        }

        .tradingview-widget-copyright a {
          text-decoration: none !important;
          color: #B2B5BE !important;
        }

        .tradingview-widget-copyright a:visited {
          color: #B2B5BE !important;
        }

        .tradingview-widget-copyright a:hover .blue-text {
          color: #1E53E5 !important;
        }

        .tradingview-widget-copyright a:active .blue-text {
          color: #1848CC !important;
        }

        .tradingview-widget-copyright a:visited .blue-text {
          color: #2962FF !important;
        }
      `}</style>
      
      <iframe
        scrolling="no"
        allowTransparency
        frameBorder="0"
        src="https://www.tradingview-widget.com/embed-widget/forex-cross-rates/?locale=in#%7B%22width%22%3A%22100%25%22%2C%22height%22%3A400%2C%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22colorTheme%22%3A%22light%22%2C%22utm_source%22%3A%22velocitytd.pro%22%2C%22utm_medium%22%3A%22widget%22%2C%22utm_campaign%22%3A%22forex-cross-rates%22%2C%22page-uri%22%3A%22velocitytd.pro%2F%22%7D"
        title="forex cross-rates TradingView widget"
        style={{
          userSelect: 'none',
          boxSizing: 'border-box',
          display: 'block',
          height: '100%',
          width: '100%',
          border: 'none',
          backgroundColor: 'transparent',
        }}
      />
    </div>
  );
};

export default ForexCrossRates;
