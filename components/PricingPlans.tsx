import React from 'react';
import Link from 'next/link';

interface Plan {
  name: string;
  price: string;
  features: string[];
  min: string;
  max: string;
  return: string;
  duration: string;
}

const PricingPlans: React.FC = () => {
  const plans: Plan[] = [
    {
      name: 'BASIC',
      price: '$500',
      min: '500$',
      max: '1000$',
      return: '100%',
      duration: '3DAYS',
      features: [
        `MINIMUM - 500$`,
        `MAXIMUM - 1000$`,
        `TOTAL RETURN-100%`,
        `DURATION - 3DAYS`
      ]
    },
    {
      name: 'PREMIUM',
      price: '$2,000',
      min: '2000$',
      max: '7000$',
      return: '1000%',
      duration: '5DAYS',
      features: [
        `MINIMUM - 2000$`,
        `MAXIMUM - 7000$`,
        `TOTAL RETURN - 1000%`,
        `DURATION - 5DAYS`
      ]
    },
    {
      name: 'GOLD',
      price: '$10,000',
      min: '10000$',
      max: '28000$',
      return: '100%',
      duration: '7DAYS',
      features: [
        `MINIMUM - 10000$`,
        `MAXIMUM - 28000$`,
        `TOTAL RETURN - 100%`,
        `DURATION- 7DAYS`
      ]
    }
  ];

  return (
    <section className="pt-100 pb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5">
            <div className="section-header text-center wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.3s">
              <div className="section-subtitle">Our Packages</div>
              <h2 className="section-title">Choose Your Preferred Trading Packages</h2>
            </div>
          </div>
        </div>
        
        <div className="row gy-4 justify-content-center">
          <div className="col-lg-10">
            <div className="row gy-4 justify-content-center">
              {plans.map((plan, index) => (
                <div key={plan.name} className="col-xl-4 col-md-6 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay={`${0.3 + index * 0.2}s`}>
                  <div className="package-card">
                    <h4 className="package-card__name">{plan.name}</h4>
                    <div className="package-card__price">{plan.price}</div>
                    <ul className="package-card__feature-list mt-4">
                      {plan.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <a href="#" className="btn btn-outline--base chooseBtn">
                        Choose Plan
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pt-100 {
          padding-top: 100px;
        }
        .pb-100 {
          padding-bottom: 100px;
        }
        .container {
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
        }
        .row {
          display: flex;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px;
        }
        .justify-content-center {
          justify-content: center !important;
        }
        .col-lg-5 {
          flex: 0 0 41.666667%;
          max-width: 41.666667%;
        }
        .col-lg-10 {
          flex: 0 0 83.333333%;
          max-width: 83.333333%;
        }
        .col-xl-4 {
          flex: 0 0 33.333333%;
          max-width: 33.333333%;
        }
        .col-md-6 {
          flex: 0 0 50%;
          max-width: 50%;
        }
        .text-center {
          text-align: center !important;
        }
        .package-card {
          background: #1a1e2e;
          border-radius: 10px;
          padding: 40px 30px;
          height: 100%;
          transition: all 0.3s ease;
          border: 1px solid #2a2f45;
          position: relative;
          z-index: 1;
          overflow: hidden;
        }
        .package-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        .package-card__name {
          font-size: 24px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 10px;
        }
        .package-card__price {
          font-size: 36px;
          font-weight: 700;
          color: #2962ff;
          margin-bottom: 20px;
        }
        .package-card__feature-list {
          list-style: none;
          padding: 0;
          margin: 0 0 20px 0;
        }
        .package-card__feature-list li {
          color: #b2b5be;
          margin-bottom: 10px;
          position: relative;
          padding-left: 25px;
        }
        .package-card__feature-list li:before {
          content: '✓';
          color: #2962ff;
          position: absolute;
          left: 0;
        }
        .btn-outline--base {
          border: 1px solid #2962ff;
          color: #2962ff;
          background: transparent;
          padding: 10px 25px;
          border-radius: 5px;
          font-weight: 500;
          transition: all 0.3s ease;
          display: inline-block;
          text-decoration: none;
        }
        .btn-outline--base:hover {
          background: #2962ff;
          color: #fff;
          transform: translateY(-2px);
        }
        .section-subtitle {
          color: #2962ff;
          font-weight: 600;
          margin-bottom: 10px;
          text-transform: uppercase;
          font-size: 16px;
          letter-spacing: 1px;
        }
        .section-title {
          color: #fff;
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 0;
          line-height: 1.4;
        }
        @media (max-width: 768px) {
          .col-md-6, .col-xl-4 {
            flex: 0 0 100%;
            max-width: 100%;
          }
          .col-lg-5 {
            flex: 0 0 100%;
            max-width: 100%;
          }
          .col-lg-10 {
            flex: 0 0 100%;
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default PricingPlans;
