import React, { useEffect, useRef } from 'react';

const CommoditiesWidget: React.FC = () => {
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
            ["USOIL", "USOIL|12m"],
            ["UKOIL", "UKOIL|12m"],
            ["COCOA", "DJCICC|12m"],
            ["COFFEE", "DJCIKC|12m"],
            ["COPPER", "COPPER|12m"],
            ["CORN", "CORN|12m"],
            ["COTTON", "TT|12m"],
            ["ALUMINIUM", "AM|12m"],
            ["NATURAL GAS", "NATGASUSD|12m"],
            ["SOYABEAN", "SOYBNUSD|12m"],
            ["SUGAR", "SUGARUSD|12m"]
          ],
          chartOnly: false,
          width: "100%",
          height: "400",
          locale: "in",
          colorTheme: "dark",
          gridLineColor: "#2a2e39",
          trendLineColor: "rgba(255, 152, 0, 1)",
          fontColor: "#787b86",
          underLineColor: "rgba(55, 166, 239, 0.15)",
          isTransparent: true,
          autosize: true,
          container_id: "tradingview_commodities_widget"
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
      <div id="tradingview_commodities_widget" style={{ width: '100%', height: '100%' }} ref={containerRef}>
        <iframe
          title="Commodities Overview"
          src="https://s.tradingview.com/embed-widget/symbol-overview/?locale=in#%7B%22symbols%22%3A%5B%5B%22USOIL%22%2C%22USOIL%7C12m%22%5D%2C%5B%22UKOIL%22%2C%22UKOIL%7C12m%22%5D%2C%5B%22COCOA%22%2C%22DJCICC%7C12m%22%5D%2C%5B%22COFFEE%22%2C%22DJCIKC%7C12m%22%5D%2C%5B%22COPPER%22%2C%22COPPER%7C12m%22%5D%2C%5B%22CORN%22%2C%22CORN%7C12m%22%5D%2C%5B%22COTTON%22%2C%22TT%7C12m%22%5D%2C%5B%22ALUMINIUM%22%2C%22AM%7C12m%22%5D%2C%5B%22NATURAL%20GAS%22%2C%22NATGASUSD%7C12m%22%5D%2C%5B%22SOYABEAN%22%2C%22SOYBNUSD%7C12m%22%5D%2C%5B%22SUGAR%22%2C%22SUGARUSD%7C12m%22%5D%5D%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22calc(400px%20-%2032px)%22%2C%22colorTheme%22%3A%22dark%22%2C%22gridLineColor%22%3A%22%232a2e39%22%2C%22fontColor%22%3A%22%23787b86%22%2C%22chartType%22%3A%22area%22%2C%22lineColor%22%3A%22rgba(255%2C%20152%2C%200%2C%201)%22%2C%22topColor%22%3A%22rgba(55%2C%20166%2C%20239%2C%200.15)%22%2C%22isTransparent%22%3Atrue%2C%22page-uri%22%3A%22velocitytd.pro%2F%22%2C%22utm_source%22%3A%22velocitytd.pro%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22symbol-overview%22%7D"
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

export default CommoditiesWidget;
