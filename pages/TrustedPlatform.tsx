import React from 'react'

function TrustedPlatform() {
  return (
    <section className="about_us section-padding">
    <div className="container">
      <div className="section-title text-center">
        <h1>The most trusted cryptocurrency platform</h1>
        <p>
          We are confident in whom we are. We give you all you need as we
          promise. No hidden information or fees.
        </p>
      </div>
      <div className="row">
        <div
          className="col-lg-4 col-sm-12 col-xs-12 wow fadeInUp"
        >
          <div className="single_about">
            <img
              src="/assets/img/secure.png"
              alt="mage"
            />

            <h3>Secure storage</h3>
            <p>
              We provide you with a secure means of fund storage. Our
              storage system is strong and reliable to secure our client
              fund from scammers and other online fraudlant activities.
            </p>
          </div>
        </div>

        <div
          className="col-lg-4 col-sm-12 col-xs-12 wow fadeInUp"
        >
          <div className="single_about">
            <img
              src="/assets/img/insurance.webp"
              alt="mage"
            />

            <h3>Protected by insurance</h3>
            <p>
              You are protected by our insurance. We our yealy crypto
              insurance payment making sure all the transactions done our
              our platform get a little or no charge.
            </p>
          </div>
        </div>

        <div
          className="col-lg-4 col-sm-12 col-xs-12 wow fadeInUp"
        >
          <div className="single_about">
            <img
              src="/assets/img/industry.webp"
              alt="mage"
            />

            <h3>Fund Growth</h3>
            <p>
              We make sure your fund get increments prior to your choosen
              investment plan or current investment statistic.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default TrustedPlatform