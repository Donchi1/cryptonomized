import React from 'react'
import Link from 'next/link'

import { useSelector } from 'react-redux'
import Footer from '@/components/Footer'
import Plans from '@/components/Plans'
import Teams from '@/components/Teams'
import { RootState } from '@/redux/store'
import Header from '@/components/Header'
import TrustedPlatform from './TrustedPlatform'
import BuyAndSell from '@/components/BuyAndSell'
import GetStarted from '@/components/GetStarted'
import LatestDeposits from '@/components/LatestDeposits'
import LatestWithdrawals from '@/components/LatestWithdrawals'
import TradingViewTickerTape from '@/components/TradingViewTickerTape'
import TradingViewCryptoMarketScreener from '@/components/TradingViewCryptoMarketScreener'
import ForexCrossRates from '@/components/ForexCrossRates'
import MetalsWidget from '@/components/MetalsWidget'
import CommoditiesWidget from '@/components/CommoditiesWidget'
import Particle from '@/components/Particle'

export default function Home() {
  const { currentUser } = useSelector((state: RootState) => state.auth)

  return (
    <>
      <TradingViewTickerTape />
      <Header />

      <section id="home" className="home_bg vh-100 relative" style={{ backgroundImage: "url(/assets/img/slider-3.jpg)", backgroundPosition: "right", backgroundSize: "cover" }}>
      <div className="absolute inset-0">
      <Particle />
      </div>
        <div className="container mx-auto" >
          <div className="row">
            <div className="col-lg-7 col-sm-12 col-xs-12 lg:mb-0 mb-4">
              <div className=" hero-text">
                <h2 className="text-6xl  font-bold ">
                  {' '}
                  Welcome to <br /> equityrise the way to your future
                  investments.
                </h2>
                <p className="mt-2 text-lg">
                  The future of investment is here. A platform for launching
                  your stable Cryptocurrency investments.
                </p>
                <div className="home_btn">
                  {currentUser ? (
                    <Link href="/user/dashboard" className="btn_one">
                      Dashboard
                    </Link>
                  ) : (
                    <>
                      <Link href="/login" className="btn_one">
                        Get Started
                      </Link>

                      <Link href="/register" className="btn_two bg-white text-black border-0">
                        Register
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* <div className="col-lg-5 col-sm-12 col-xs-12 text-center mt-8 lg:mt-20">
              <img src='/assets/img/bitcoin1.png' alt="logo" />
            </div> */}
          </div>
        </div>
      </section>

      <TrustedPlatform />
      <TradingViewCryptoMarketScreener />
      <BuyAndSell />

      <GetStarted />

      {/* START ABOUT US CONTENT */}
      <section id="about" className="about_area section-padding">
        <div className="container mx-auto">
          <div className="row">
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInLeft"

            >
              <div className="about-img">
                <img
                  src="/assets/img/about-two.webp"
                  className="img-fluid"
                  alt="about-mage"
                />
              </div>
            </div>
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInRight"
            >
              <div className="about-text">
                <h2>
                  Build the future <br />
                  of finance
                </h2>
                <p className="about-bold">
                  All you need to be wealthy are all set out for you.
                </p>
                <p>
                  We stand out as one unique platform, providing a mean of
                  global investment to low and high income earners who has the
                  mindset of investment for their future estsblishments.
                </p>
              </div>
              <div className="about_btn">
                <Link href="/about" className=" btn_one">
                  Get More
                </Link>
              </div>
            </div>
          </div>
        </div>

      </section>

      <div className="container mx-auto flex flex-col items-center lg:flex-row gap-4">
        <LatestDeposits />
        <LatestWithdrawals />
      </div>

      <section id="team" className="team_member section-padding">
        <div className="container mx-auto">
          <div className="section-title text-center">
            <h1>Our Plans</h1>
            <p>
              We have flexible investment plans. Invest today and enjoy your wealth.
            </p>
          </div>
          <div className="row gap-0 lg:gap-8">
            <div className="col-lg-3 col-sm-6 col-xs-12  wow fadeInUp">
              <Plans head="Basic" initiald="200" initialw="4,000" />
            </div>
            <div className="col-lg-3 col-sm-6  col-xs-12 wow fadeInUp">
              <Plans head="Junior" initiald="500" initialw="7,900" />
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp">
              <Plans head="Advance" initiald="800" initialw="12,600" />
            </div>
            <div className="col-lg-3 col-sm-6 col-xs-12 wow fadeInUp">
              <Plans head="Ultimate" initialw="22,440" initiald="1,000" />
            </div>
          </div>
        </div>
      </section>

      <Teams />
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
      {/* <div className="partner_area section-padding">
        <div className="container mx-auto">
          <div className="section-title text-center">
            <h1>Partners & Supporters</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form.
            </p>
          </div>
          <div className="row text-center">

            <div className="partner-logo col-lg-3 col-12">
              <img
                src="/assets/img/1.webp"
                alt="partner-mage"
              />
            </div>

            <div className="partner-logo col-lg-3 col-12">
              <img
                src="/assets/img/2.webp"
                alt="partner-mage"
              />
            </div>

            <div className="partner-logo col-lg-3 col-12">
              <img
                src="/assets/img/3.webp"
                alt="partner-mage"
              />
            </div>

            <div className="partner-logo col-lg-3 col-12">
              <img
                src="/assets/img/4.webp"
                alt="partner-mage"
              />
            </div>

            <div className="partner-logo col-lg-3 col-12">
              <img
                src="/assets/img/5.webp"
                alt="partner-mage"
              />
            </div>

            <div className="partner-logo col-lg-3 col-12">
              <img
                src="/assets/img/6.webp"
                alt="partner-mage"
              />
            </div>

            <div className="partner-logo col-lg-3 col-12">
              <img
                src="/assets/img/1.webp"
                alt="partner-mage"
              />
            </div>

            <div className="partner-logo col-lg-3 col-12">
              <img
                src="/assets/img/2.webp"
                alt="partner-mage"
              />
            </div>
          </div>
        </div>
      </div> */}

      {/* START FAQ */}
      <section id="faq" className="faq1-area section-padding">
        <div className="container mx-auto">
          <div className="section-title text-center">
            <h1>Frequently Asked Questions</h1>
            <p>
              We are proud to be a awesome team. They are really awesome people
              with their good knowledge.
            </p>
          </div>
          <div className="row justify-content-center">
            <div
              className="col-lg-7 col-sm-12 col-xs-12 wow fadeInLeft"
            >
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What is cryptocurrency?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      Development look even slightly believable.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      What are the best cryptocurrency for buy?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      There are so many cryptocurrencies, getting one depends on
                      your requirement and market value for transaction.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      How to buy cryptocurrency?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      There are many legit platforms out there in the market for
                      your crypto purchase. You can purchase from a vendor or
                      make auto card payment for crypto purchase. You can sale
                      your crypto on coinbase, paxful, coinmama, localbitcoins,
                      moonpay etc.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      How does equityrise work?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      equityrise work with the blockchain system, providing
                      you a global means of crypto investment and securing your
                      information and fund through our secured encrypted system.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFourX">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFourX"
                      aria-expanded="false"
                      aria-controls="collapseFourX"
                    >
                      How to sell cryptocurrency?
                    </button>
                  </h2>
                  <div
                    id="collapseFourX"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFourX"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      There are so many platforms out there to sale your
                      cryptocurrency. Selling of crypto is mostly determined by
                      the type of crypto. You can sale your crypto on coinbase,
                      paxful, coinmama, localbitcoins, moonpay etc
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      How do i invest in equityrise?
                    </button>
                  </h2>

                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      There is no long way or hidden system of investment.You
                      just have to Register, Login and start your investment
                      process.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseSeven"
                      aria-expanded="false"
                      aria-controls="collapseSeven"
                    >
                      How much do i need to start online Investment?
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      There are so many platforms out there to sale your
                      cryptocurrency. Selling of crypto is mostly determined by
                      the type of crypto. You can sale your crypto on coinbase,
                      paxful, coinmama, localbitcoins, moonpay etc
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSeven">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEight"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      How do i invest in equityrise?
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      There is no long way or hidden system of investment.You
                      just have to Register, Login and start your investment
                      process.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END COL  */}
            <div
              className="col-lg-5 col-sm-12 col-xs-12 wow fadeInRight"
            >
              <div className="faq-img">
                <img
                  src="/assets/img/faq-1.webp"
                  className="img-fluid"
                  alt="faq mage"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Blog /> */}
      <Footer />
    </>
  )
}
