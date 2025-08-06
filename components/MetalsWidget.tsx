import React, { useEffect, useRef } from 'react';

const MetalsWidget: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptAddedRef = useRef(false);

  useEffect(() => {
    // Only add script once
    if (scriptAddedRef.current) return;
    
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      if (window.TradingView && containerRef.current) {
        new window.TradingView.MediumWidget({
          symbols: [
            ["GOLD", "XAUUSD|12m"],
            ["SILVER", "XAGUSD|12m"],
            ["PLATINUM", "XPTUSD|12m"],
            ["GOLD/EURO", "XAUEUR|12m"],
            ["SILVER/EURO", "XAGEUR|12m"],
            ["GOLD/AUD", "XAUAUD|12m"],
            ["SILVER/AUD", "XAGAUD|12m"],
            ["GOLD/GBP", "XAUGBP|12m"],
            ["SILVER/GBP", "XAGGBP|12m"],
            ["GOLD/JPY", "XAUJPY|12m"],
            ["SILVER/JPY", "XAGJPY|12m"]
          ],
          chartOnly: false,
          width: "100%",
          height: "400",
          locale: "in",
          colorTheme: "dark",
          gridLineColor: "#2a2e39",
          trendLineColor: "rgba(230, 145, 56, 1)",
          fontColor: "#787b86",
          underLineColor: "rgba(55, 166, 239, 0.15)",
          isTransparent: true,
          autosize: true,
          container_id: "tradingview_metals_widget"
        });
      }
    };
    
    document.body.appendChild(script);
    scriptAddedRef.current = true;
    
    return () => {
      // Cleanup function to remove script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="tradingview-widget-container" style={{ width: '100%', height: '400px' }}>
      <div id="tradingview_metals_widget" style={{ width: '100%', height: '100%' }} ref={containerRef}>
        <iframe
          title="Metals Overview"
          src="https://s.tradingview.com/embed-widget/symbol-overview/?locale=in#%7B%22symbols%22%3A%5B%5B%22GOLD%22%2C%22XAUUSD%7C12m%22%5D%2C%5B%22SILVER%22%2C%22XAGUSD%7C12m%22%5D%2C%5B%22PLATINUM%22%2C%22XPTUSD%7C12m%22%5D%2C%5B%22GOLD%2FEURO%22%2C%22XAUEUR%7C12m%22%5D%2C%5B%22SILVER%2FEURO%22%2C%22XAGEUR%7C12m%22%5D%2C%5B%22GOLD%2FAUD%22%2C%22XAUAUD%7C12m%22%5D%2C%5B%22SILVER%2FAUD%22%2C%22XAGAUD%7C12m%22%5D%2C%5B%22GOLD%2FGBP%22%2C%22XAUGBP%7C12m%22%5D%2C%5B%22SILVER%2FGBP%22%2C%22XAGGBP%7C12m%22%5D%2C%5B%22GOLD%2FJPY%22%2C%22XAUJPY%7C12m%22%5D%2C%5B%22SILVER%2FJPY%22%2C%22XAGJPY%7C12m%22%5D%5D%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22calc(400px%20-%2032px)%22%2C%22colorTheme%22%3A%22dark%22%2C%22gridLineColor%22%3A%22%232a2e39%22%2C%22fontColor%22%3A%22%23787b86%22%2C%22chartType%22%3A%22area%22%2C%22lineColor%22%3A%22rgba(230%2C%20145%2C%2056%2C%201)%22%2C%22topColor%22%3A%22rgba(55%2C%20166%2C%20239%2C%200.15)%22%2C%22isTransparent%22%3Atrue%2C%22page-uri%22%3A%22velocitytd.pro%2F%22%2C%22utm_source%22%3A%22velocitytd.pro%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22symbol-overview%22%7D"
          style={{
            margin: '0 !important',
            padding: '0 !important',
            width: '100%',
            height: 'calc(100% - 32px)',
            border: 'none',
            backgroundColor: 'transparent',
          }}
        />
      </div>
    </div>
  );
};

export default MetalsWidget;
