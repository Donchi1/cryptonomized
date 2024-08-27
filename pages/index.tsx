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
import Blog from '@/components/Blog'

export default function Home() {
  const { currentUser } = useSelector((state: RootState) => state.auth)

  return (
    <>
      <Header />
      <div id="particles-js" className="hidden">
        <canvas
          className="particles-js-canvas-el"
          width="720"
          height="1440"
          style={{ width: '100%', height: '100%' }}
        ></canvas>
      </div>

      <section id="home" className="home_bg vh-100 " style={{ backgroundImage: "url(/assets/img/slider-3.jpg)", backgroundPosition: "right", backgroundSize: "cover" }}>
        <div className="container mx-auto" >
          <div className="row">
            <div className="col-lg-7 col-sm-12 col-xs-12 lg:mb-0 mb-4">
              <div className=" hero-text">
                <h2 className="text-6xl  font-bold ">
                  {' '}
                  Welcome to <br /> cryptonomize the way to your future
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

                      <Link href="/register" className="btn_two">
                        Register
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
            {/*- END COL */}
            {/* <div className="col-lg-5 col-sm-12 col-xs-12 text-center mt-8 lg:mt-20">
              <img src='/assets/img/bitcoin1.png' alt="logo" />
            </div> */}
          </div>
        </div>
      </section>

      <TrustedPlatform />
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
            {/*- END COL */}
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
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END ABOUT US CONTENT */}

      {/* START TOKEN SALE */}
      <section id="token_sale" className="token_sale_area section-padding">
        <div className="container mx-auto">
          <div className="section-title text-center">
            <h1>Sale & Values</h1>
            <p>
              We are ready for all our client. Reaching out to people who has
              the vision of establishment is our priority.
            </p>
          </div>
          <div className="row text-center">
            <div
              className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp"
            >
              <div className="single_token single_token_bg_one">
                <h4>Start Time</h4>
                <p>July 30,2021 (10:00 GMT)</p>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp"

            >
              <div className="single_token single_token_bg_two">
                <h4>Tokens for sale</h4>
                <p>900,000 ICC (9%)</p>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp"

            >
              <div className="single_token single_token_bg_three">
                <h4>Acceptable Currency</h4>
                <p>BTC, ETH, LTC</p>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp"

            >
              <div className="single_token single_token_bg_four">
                <h4>End Time</h4>
                <p>Oct 30,2024 (10:00 GMT)</p>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp"

            >
              <div className="single_token single_token_bg_five">
                <h4>Soft Cops</h4>
                <p>$90 M</p>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp"
            >
              <div className="single_token single_token_bg_six">
                <h4>Exchange rate</h4>
                <p>1 BTC = 1940 CNT </p>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp"
            >
              <div className="single_token single_token_bg_seven">
                <h4>Hourly Payout</h4>
                <p>$10000 </p>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-3 col-sm-4 col-xs-12 wow fadeInUp"
            >
              <div className="single_token single_token_bg_eight">
                <h4>Minimal Transction</h4>
                <p>1BTC/1ETH/1LTC</p>
              </div>
            </div>
            {/* END COL */}
          </div>
          {/* END ROW */}
        </div>
        {/* END CONTAINER */}
      </section>
      {/* END TOKEN SALE  */}



      <section className="token_img_area section-padding">
        <div className="container mx-auto">
          <div className="section-title text-center">
            <h1>Trading and Financial Informations</h1>
            <p>We are established and ready to make others wealthy.</p>
          </div>
          <div className="row text-center">
            <div
              className="col-lg-6 col-sm-12 col-xs-12 wow fadeInUp"
            >
              <div className="token-img">
                <img
                  src="/assets/img/02-Chat.webp"
                  className="img-fluid"
                  alt=""
                />
                <h4>Trading Distribution</h4>
              </div>
            </div>
            <div
              className="col-lg-6 col-sm-12 col-xs-12 text-center wow fadeInUp"
            >
              <div className="fund-img">
                <img
                  src="/assets/img/01-Chat.webp"
                  className="img-fluid"
                  alt=""
                />
                <h4>Fund Distribution</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="roadmap_area section-padding">
        <div className="container mx-auto">
          <div className="section-title text-center">
            <h1>Roadmap</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <div className="timeline">
                <div
                  className="time_contain time_left wow fadeInLeft"
                >
                  <div className="time_content">
                    <h2>
                      Cryptocurrency Teachings - <span>July, 2021</span>
                    </h2>
                    <p>
                      We teach all our client that are really to make wealth
                      about cryptocurrency and other related tecnologies.
                    </p>
                  </div>
                </div>
                <div
                  className="time_contain time_right wow fadeInRight"
                >
                  <div className="time_content">
                    <h2>
                      Business Conception - <span>Aug, 2021</span>
                    </h2>
                    <p>
                      We offers users a fully operational long-term rental
                      platform. It plans to leverages blockchain technology to
                      ensure embarrassing hidden seamless.
                    </p>
                  </div>
                </div>
                <div
                  className="time_contain time_left wow fadeInLeft"
                >
                  <div className="time_content">
                    <h2>
                      Legal Review - <span>Sep, 2021</span>
                    </h2>
                    <p>
                      We offers users a fully operational platform. It plans to
                      leverages blockchain technology to ensure embarrassing
                      hidden seamless.
                    </p>
                  </div>
                </div>
                <div
                  className="time_contain time_right wow fadeInRight"
                >
                  <div className="time_content">
                    <h2>
                      Marketing - <span>Oct, 2021</span>
                    </h2>
                    <p>
                      We are opened for marketting and other cryptocurrency
                      related businesses .
                    </p>
                  </div>
                </div>
                <div
                  className="time_contain time_left wow fadeInLeft"
                >
                  <div className="time_content">
                    <h2>
                      Investment and sales - <span>Nov, 2021</span>
                    </h2>
                    <p>
                      We offer you a clean and easy platform for your crypto
                      investment round the whole world.
                    </p>
                  </div>
                </div>
                <div
                  className="time_contain time_right wow fadeInRight"
                >
                  <div className="time_content">
                    <h2>
                      Keep going - <span>Dec, 2021</span>
                    </h2>
                    <p>
                      Invest the little you have now and keep on going till you
                      become wealthy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*- END COL */}
          </div>
          {/*- END ROW */}
        </div>
        {/*- END CONTAINER */}
      </section>
      {/* END ROADMAP */}

      {/* START DOWNLOAD APP */}
      <section id="download" className="download_area section-padding">
        <div className="container mx-auto">
          <div className="row">
            <div
              className="col-lg-7 col-sm-12 col-xs-12 wow fadeInUp"
            >
              <div className="app-text">
                <h2>Install Crptiam app today</h2>
                <p>
                  We offers users a fully operational long-term rental platform.
                  It plans to leverages blockchain technology to ensure seamless
                  rental experience and wants to help tenants unfreeze millions
                  of dollars tied up in rental.
                </p>
                <ul>
                  <li>
                    <span className="ti-download"></span>Download It for Free
                  </li>
                  <li>
                    <span className="ti-package"></span>Install App
                  </li>
                  <li>
                    <span className="ti-user"></span>Create Profile
                  </li>
                  <li>
                    <span className="ti-cup"></span>Enjoy this app
                  </li>
                </ul>
              </div>
              <div className="app_btn">
                <Link
                  href="#"
                  className="btn_one wow bounceIn"
                >
                  <i className="fa fa-apple"></i>App Store
                </Link>
                <Link
                  href="#"
                >
                  <i className="fa fa-play"></i>Google Play
                </Link>
              </div>
            </div>
            {/* END COL */}
            <div
              className="col-lg-5 col-sm-12 col-xs-12 wow fadeInUp"
            >
              <div className="app_img">
                <img
                  src="/assets/img/app-mockup.webp"
                  className="img-fluid"
                  alt=""
                />
              </div>
            </div>
            {/* END COL */}
          </div>
          {/* END ROW */}
        </div>
        {/* END CONTAINER */}
      </section>
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
      {/* START PARTNER */}
      <div className="partner_area section-padding">
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
          {/* END COL */}
        </div>

        {/*- END CONTAINER */}
      </div>
      {/* END PARTNER */}

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
                      How does cryptonomize work?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      Cryptonomize work with the blockchain system, providing
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
                      How do i invest in Cryptonomize?
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
                      How do i invest in Cryptonomize?
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
            {/* END COL  */}
          </div>
          {/*END  ROW  */}
        </div>
        {/* END CONTAINER  */}
      </section>
      {/* END FAQ */}

      {/* START BLOG */}
      <Blog />
      <Footer />
    </>
  )
}
