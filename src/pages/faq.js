import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../css/index2_faq.css'
/* eslint-disable react/no-unescaped-entities */

const FAQ = () => (
  <Layout>
    <SEO title="Wlack | FAQ" />
    <div className="faq__wrapper">
      <header className="faq__header">
        <div className>
          <h1>Frequently Asked Questions </h1>
          <p>
            We regularly answer the same questions for our users. Here, we'll
            call out the most common questions to help you get a better
            understanding of Wlack.
          </p>
        </div>
        <img src='/assets/img/index2-img/faq.png' alt="" />
      </header>
      <ul className="faq__questions">
        <li>
          <p>When will Wlack be available?</p>
        </li>
        <li>
          <p>What do I need to get started?</p>
        </li>
        <li>
          <p>Where will I be able to use Wlack?</p>
        </li>
        <li>
          <p>
            Is Wlack available in my country? What countries is Wlack
            available in?
          </p>
        </li>
        <li>
          <p>How will you keep my information safe?</p>
        </li>
      </ul>
    </div>
  </Layout>
)

export default FAQ
