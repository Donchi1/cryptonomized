import React from 'react';

const TradingViewTickerTape: React.FC = () => {
  return (
    <div className="tradingview-ticker-tape">
      <div className="tradingview-widget-container" style={{ 
        background: 'rgb(35, 39, 51)', 
        overflow: 'hidden', 
        height: '104px', 
        width: '100%' 
      }}>
        <iframe 
          scrolling="no" 
          allowTransparency 
          frameBorder="0" 
          src="https://www.tradingview-widget.com/embed-widget/ticker-tape/?locale=en#%7B%22symbols%22%3A%5B%7B%22title%22%3A%22S%26P%20500%22%2C%22proName%22%3A%22OANDA%3ASPX500USD%22%7D%2C%7B%22title%22%3A%22Nasdaq%20100%22%2C%22proName%22%3A%22OANDA%3ANAS100USD%22%7D%2C%7B%22title%22%3A%22EUR%2FUSD%22%2C%22proName%22%3A%22FX_IDC%3AEURUSD%22%7D%2C%7B%22title%22%3A%22BTC%2FUSD%22%2C%22proName%22%3A%22BITSTAMP%3ABTCUSD%22%7D%2C%7B%22title%22%3A%22ETH%2FUSD%22%2C%22proName%22%3A%22BITSTAMP%3AETHUSD%22%7D%5D%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22displayMode%22%3A%22adaptive%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A76%2C%22utm_source%22%3A%22velocitytd.pro%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22ticker-tape%22%2C%22page-uri%22%3A%22velocitytd.pro%2F%22%7D" 
          title="ticker tape TradingView widget" 
          style={{ 
            userSelect: 'none', 
            boxSizing: 'border-box', 
            display: 'block', 
            height: '72px', 
            width: '100%' 
          }}
        ></iframe>
        {/* <div className="tradingview-widget-copyright">
          <a href="https://www.tradingview.com/" rel="noopener" target="_blank">
            <span className="blue-text">Ticker Tape</span>
          </a>{' '}
          by TradingView
        </div> */}
      </div>

      <style jsx>{`
        .tradingview-widget-copyright {
          font-size: 13px !important;
          line-height: 32px !important;
          text-align: center !important;
          vertical-align: middle !important;
          font-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif !important;
          color: #b2b5be !important;
        }
        .tradingview-widget-copyright .blue-text {
          color: #2962ff !important;
        }
        .tradingview-widget-copyright a {
          text-decoration: none !important;
          color: #b2b5be !important;
        }
        .tradingview-widget-copyright a:visited {
          color: #b2b5be !important;
        }
        .tradingview-widget-copyright a:hover .blue-text {
          color: #1e53e5 !important;
        }
        .tradingview-widget-copyright a:active .blue-text {
          color: #1848cc !important;
        }
        .tradingview-widget-copyright a:visited .blue-text {
          color: #2962ff !important;
        }
      `}</style>
    </div>
  );
};

export default TradingViewTickerTape;