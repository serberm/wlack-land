import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../css/index2_price.css'

const Pricing = () => {
  const isPricing = false

  return (
    <Layout>
      <SEO title="Wlack | Pricing" />
      <div className="price">
        <h1>Wlack Pricing Table</h1>
        <p>
          Improve your data pipelines today with our <br />
          No credit card required
        </p>
        <div className="payment-type">
          <input
            type="checkbox"
            id="monthly"
            name="payment-type"
            defaultValue="Annual"
          />
          <label htmlFor="monthly">Monthly</label>
          <span>Annual</span>
        </div>
        {/* plans list */}
        <div className="plans-list">
          <div className="plan" style={{ width: '32.5%' }}>
            <p>Lite</p>
            <span>$0 / mo</span>
            <ul>
              <li>10,000 message searchable archive</li>
              <li>5GB total storage</li>
              <li>5 external integrations</li>
              <li>Free native apps for iOS, Android &amp; Mac Desktop</li>
            </ul>
            <a href="#">Select plan</a>
          </div>
          <div className="plan" style={{ width: '32.5%' }}>
            <p>Standard</p>
            <span>$8 / mo</span>
            <ul>
              <li>Fully searchable archive with unlimited messages</li>
              <li>10GB storage per user, shareable across team</li>
              <li>Unlimited external integrations</li>
              <li>Free native apps for iOS, Android &amp; Mac Desktop</li>
              <li>Simple usage statistics</li>
              <li>Premium support</li>
            </ul>
            <a href="#">Select plan</a>
          </div>
          <div className="plan" style={{ width: '32.5%' }}>
            <p>Plus</p>
            <span>$15 / mo</span>
            <ul>
              <li>Fully searchable archive with unlimited messages</li>
              <li>20GB storage per user, shareable across team</li>
              <li>Unlimited external integrations</li>
              <li>Free native apps for iOS, Android &amp; Mac Desktop</li>
              <li>Detailed usage statistics, reporting &amp; analysis</li>
              <li>Priority support</li>
            </ul>
            <a href="#">Select plan</a>
          </div>
        </div>
        {/* plans list */}
        {/* about plans */}
        <div className="about-plans">
          <h2>About plans</h2>
          <p>
            All subscriptions are recurring but can be cancelled at any time.
            All sales are final and no refunds will be available. Adding or
            removing team members during the term of a subscription will cause a
            one-time pro-rated credit or charge on your account.
          </p>
        </div>
        {/* about plans end */}
      </div>
    </Layout>
  )
}

export default Pricing
