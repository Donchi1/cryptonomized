// Type definitions for TradingView widget
declare global {
  interface Window {
    TradingView: {
      MediumWidget: new (options: any) => any;
      // Add other TradingView widget types as needed
    };
  }
}

export {}; // This file needs to be a module
