import React from 'react'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'
import Testimonial from '@/components/Testimonial'
import Teams from '@/components/Teams'
import Header from '@/components/Header'
import TrustedPlatform from './TrustedPlatform'
import BuyAndSell from '@/components/BuyAndSell'
import GetStarted from '@/components/GetStarted'
import TradingViewTickerTape from '@/components/TradingViewTickerTape'
import TradingViewCryptoMarketScreener from '@/components/TradingViewCryptoMarketScreener'
import ForexCrossRates from '@/components/ForexCrossRates'
import MetalsWidget from '@/components/MetalsWidget'
import CommoditiesWidget from '@/components/CommoditiesWidget'

export default function About() {
  return (
    <>
    <TradingViewTickerTape />
      <Header />

      <div id="slider-section" className="footer-bg homepage-3">
        <Hero pageName="About-Us" />

        <section className=" pt-8 ">
          <section className="container mx-auto  text-white text-lg italic leading-3 tracking-wide ">
            <div className="row">
              <div className="col-sm-12 col-lg-6">
                <img src='/assets/img/ceo.jpg' alt="" className="lg:w-[400px] rounded-sm sm:w-[500px]" />

              </div>
              <div className="sm:mt-4 col-sm-12 col-lg-6">
                <h2 className=" text-2xl text-white mb-8 sm:mt-4">
                  Our <span>Mission</span>
                </h2>

                <p className="mb-4 ">
                  <span className="font-extrabold text-2xl">W</span>e stand out as
                  one unique platform, providing a mean of global investment to
                  low and high income earners who has the mindset of investment
                  for their future estsblishments.
                </p>
                <p>
                  We are here to make sure people make the best out of their
                  little income for a better and healthy living. We make sure you
                  stand out in our working place, making proper use of your little
                  without stress and complains. Invest or work with us today and
                  never regret.
                </p>
                <h2 className=" text-2xl text-white mb-8 mt-8">
                  Our <span>Vision</span>
                </h2>

                <p className="mb-4 ">
                  <span className="font-extrabold text-2xl">O</span>ur vision is
                  to make sure all income earners high and low invest for the
                  future and make proper us of the internet by providing a simple
                  and easy means of global investment and accessibility in our
                  platform.
                </p>
              </div>
            </div>
          </section>
        </section>


        <TrustedPlatform />
        <BuyAndSell />
        <GetStarted />
        <TradingViewCryptoMarketScreener />
        <Teams />
        <Testimonial />
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
