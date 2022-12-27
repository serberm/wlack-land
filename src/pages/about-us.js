import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../css/index2_about-us.css'

const AboutUs = () => (
  <Layout>
    <SEO title="Wlack | About us" />
    <div className="about-us__wrapper">
      <header className="about-us__header">
        <h1>About Us</h1>
        <div class="">
          <h3 class="uk-margin-remove-top"> Who we are </h3>
          <div class="uk-panel uk-margin ">
            <p>
              Wlack is a messaging platform that allows marketers to take
              an idea and turn it into a powerful automated message campaign.
              The world never stops growing and changing, and neither should
              your data. Our powerful logic based tools help you capture every
              edge case and connect to the real people in your audience. Built
              for flexibility, designed for usability, and affordable for
              everyone.
            </p>
          </div>
          <h3> How we got started </h3>
          <div class="uk-panel uk-margin ">
            <p>
              There are a hundred tools to see customer behaviours, but data is
              only as useful as what you can do with it. Wlack was founded
              to fill the gap and help you act on your data to turn customer
              intent into conversion all in one place. By consolidating
              analytics and messaging we do the work so your team can better
              connect with your audience without needing a team of engineers.
            </p>
          </div>
          <h3> What you can achieve </h3>
          <div class="uk-panel uk-margin-remove-vertical ">
            <p>
              An understanding of where and how you can improve your message
              strategy. Building logical campaigns, looking at trends, and
              recognizing reactions will ultimately create a better customer
              experience.
            </p>
          </div>
        </div>
      </header>
      <div className="about-us">
        <div className="about-us__info">
          <h2>Offices</h2>
          <ul>
            <li>United States</li>
          </ul>
          <ul>
            <p>Social</p>
            <li className="caption">We are here</li>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="https://github.com/wlack">Github</a>
            </li>
            <li>
              <a href="https://discord.gg/m6AvHWZE">Discord</a>
            </li>
          </ul>
        </div>
        <img
          src="/assets/img/index2-img/map.png"
          width={450}
          height={450}
          alt=""
        />
      </div>
    </div>
  </Layout>
)

export default AboutUs
