import React from 'react';

const TradingViewCryptoMarketScreener: React.FC = () => {
  return (
    <div className="tradingview-crypto-screener container mx-auto">
      <div className="tradingview-widget-container" style={{ 
        background: 'rgb(30, 39, 57)', 
        borderRadius: '10px',
        overflow: 'hidden',
        height: '490px',
        width: '100%' 
      }}>
        <iframe 
          allowTransparency
          frameBorder="0"
          src="https://www.tradingview-widget.com/embed-widget/crypto-mkt-screener/?locale=en#%7B%22height%22%3A490%2C%22defaultColumn%22%3A%22overview%22%2C%22screener_type%22%3A%22crypto_mkt%22%2C%22displayCurrency%22%3A%22USD%22%2C%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Atrue%2C%22market%22%3A%22crypto%22%2C%22enableScrolling%22%3Atrue%2C%22utm_source%22%3A%22velocitytd.pro%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22cryptomktscreener%22%2C%22page-uri%22%3A%22velocitytd.pro%2F%22%7D"
          title="crypto mkt-screener TradingView widget"
          style={{
            width: '100%',
            height: 'calc(100% - 32px)',
            border: 'none',
            display: 'block'
          }}
        ></iframe>
        {/* <div className="tradingview-widget-copyright">
          <a href="#/markets/cryptocurrencies/prices-all/" rel="noopener" target="_blank">
            <span className="blue-text">Cryptocurrency Markets</span>
          </a>{' '}
          by TradingView
        </div> */}
      </div>

      <style jsx>{`
        .tradingview-crypto-screener {
          background: rgb(30, 39, 57);
          border-radius: 10px;
          overflow: hidden;
          margin: 20px 0;
        }
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
      `}</style>
    </div>
  );
};

export default TradingViewCryptoMarketScreener;
