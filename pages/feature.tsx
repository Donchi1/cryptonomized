import React from 'react'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Link from "next/link"
import Header from '@/components/Header'
import TrustedPlatform from './TrustedPlatform'
import BuyAndSell from '@/components/BuyAndSell'
import GetStarted from '@/components/GetStarted'
import Blog from '@/components/Blog'
import TradingViewTickerTape from '@/components/TradingViewTickerTape'
import ForexCrossRates from '@/components/ForexCrossRates'
import MetalsWidget from '@/components/MetalsWidget'
import CommoditiesWidget from '@/components/CommoditiesWidget'
import TradingViewCryptoMarketScreener from '@/components/TradingViewCryptoMarketScreener'

export default function Features() {
  return (
    <>
    <TradingViewTickerTape />
      <Header />
      <div>
        <Hero pageName="Features" />
        <TrustedPlatform />
        <TradingViewCryptoMarketScreener />
        <BuyAndSell />
        <GetStarted />
        {/* <Blog /> */}
        <div className="container mx-auto">
        <div className="section-title text-center">
          <h1>Trading Information</h1>
          <p>
           Multi fold trading opportunities for you. Trading is available for you to make profit.
          </p>
        </div>
        <ForexCrossRates />
        <MetalsWidget />
        <CommoditiesWidget />
      </div>
        <Footer />
      </div>
    </>
  )
}
