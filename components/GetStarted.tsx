import React from 'react'

function GetStarted() {
  return (

          <section className="how_to_buy_area section-padding">
          <div className="container">
            <div className="section-title text-center">
              <h1>Get Started in a Few Minutes</h1>
              <p>
                All you need is to get started, all your need to make great wealth
                with your little fund are ready for your consumption.
              </p>
            </div>
            <div className="row text-center">
              <div
                className="col-lg-4 col-sm-12 col-xs-12 wow fadeInUp"
              >
                <div className="single_how_to_buy">
                  <div className="flex justify-center items-center">
                    <img
                      src="/assets/img/man.webp"
                      alt="mage"
                    />
                  </div>
                  <h4>Create Account</h4>
                  <p>
                    All you have to do is to create your account by clicking on
                    the register button, you are all good to go.
                  </p>
                </div>
              </div>
              {/* END COL */}
              <div
                className="col-lg-4 col-sm-12 col-xs-12 wow fadeInUp"
              >
                <div className="single_how_to_buy">
                  <div className="flex justify-center items-center">
                    <img
                      src="/assets/img/bank-2.webp"
                      alt="mage"
                    />
                  </div>
                  <h4>Add a little fund</h4>
                  <p>
                    You have to make your initial investment to activate your
                    account and start receiving your fund.
                  </p>
                </div>
              </div>
              {/* END COL */}
              <div
                className="col-lg-4 col-sm-12 col-xs-12 wow fadeInUp"
  
              >
                <div className="single_how_to_buy">
                  <div className="flex justify-center items-center">
                    <img
                      src="/assets/img/buy.webp"
                      alt="mage"
                    />
                  </div>
                  <h4>Start Making Wealth</h4>
                  <p>
                    At this point all you have to do is to withdraw your fund for
                    your enjoyment
                  </p>
                </div>
              </div>
              {/* END COL */}
            </div>
            {/* END ROW */}
          </div>
        </section>
  )
}

export default GetStarted