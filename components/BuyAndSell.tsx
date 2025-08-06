import React from 'react'

function BuyAndSell() {
  return (
    <section id="buy_sell" className="buy_sell_area section-padding">
    <div className="container">
      <div className="section-title text-center">
        <h1>
          How to Buy and Sell Cryptocurrency or equityrise transaction
          meduims
        </h1>
        <p>
          There are so many platforms to buy and sell crypo.Go for the one
          that suits your demand. equityrise provides this meduims for
          financial or crypto transactions. You can check our FAQ for more
          information.
        </p>
      </div>
      <div className="row">
        <div
          className="col-lg-4 col-sm-12 col-xs-12 wow fadeInUp"

        >
          <div className="buy_sell_list">
            <img
              src="/assets/img/bank.webp"
              alt="mage"
            />
            <h4>Bank Transfers</h4>
            <p>
              You can buy cryptocurrency through bank transfer as well as
              equityrise investment depending on your country
              requirements.
            </p>
          </div>
          <div className="buy_sell_list">
            <img
              src="/assets/img/wallet.webp"
              alt="mage"
            />
            <h4>Online Wallets</h4>
            <p>
              You can buy crypto as well as equityrise investment through
              your online wallet.This is our recomended means of investment.
            </p>
          </div>
        </div>
        {/*- END COL */}
        <div
          className="col-lg-4 col-sm-12 col-xs-12 wow fadeInDown"
        >
          <div className="portfolio_list_img">
            <img
              src="/assets/img/about-one.webp"
              className="img-fluid"
              alt=""
            />
          </div>
        </div>
        {/*- END COL */}
        <div
          className="col-lg-4 col-sm-12 col-xs-12 wow fadeInUp"
        >
          <div className="buy_sell_list">
            <img
              src="/assets/img/cash.webp"
              alt="mage"
            />
            <h4>Cash Payment</h4>
            <p>
              You can buy cryptocurrency as well as equityrise investment
              by cash. This is very hard but the safest for purchase and
              investment .
            </p>
          </div>
          <div className="buy_sell_list">
            <img
              src="/assets/img/debit.webp"
              alt="mage "
            />
            <h4>Debit/Credit Cards</h4>
            <p>
              You can easy purchase cryptocurrency as well as our investment
              with your debit card. This is also our recommended depending
              your location.{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default BuyAndSell