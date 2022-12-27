import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../css/normalize.css'
import "../css/index2.css"

const Home = () => (
  <Layout>
    <SEO title="Home" />
    <div>
      <div className="first-block">
        <h1>Hire communities for feedback.</h1>
        <p>
          Save time with instant user research. Create feedback-driven
          decisions.
        </p>
        <a href="https://discord.gg/m6AvHWZE">
          Continue with Discord
        </a>
        <img src={'/assets/img/index2-img/user-left1.png'} alt="" />
        <img src={'/assets/img/index2-img/user-left2.png'} alt="" />
        <img src={'/assets/img/index2-img/user-left3.png'} alt="" />
        <img src={'/assets/img/index2-img/user-left4.png'} alt="" />
        <img src={'/assets/img/index2-img/user-left5.png'} alt="" />
        <img src={'/assets/img/index2-img/user-right1.png'} alt="" />
        <img src={'/assets/img/index2-img/user-right2.png'} alt="" />
        <img src={'/assets/img/index2-img/user-right3.png'} alt="" />
        <img src={'/assets/img/index2-img/user-right4.png'} alt="" />
        <img src={'/assets/img/index2-img/user-right5.png'} alt="" />
      </div>
      {/* first block end */}
      {/* second block */}
      <div className="second-block">
        <h2>Fast. Covenient. Effortless.</h2>
        <div className="second-block__wrapper">
          <ul className="second-block__tabs">
            <li>
              Over 20
              <br />
              Communities
            </li>
            <li>
              Ask, Interview
              <br />
              &amp; Learn
            </li>
            <li className="active">
              Third Party
              <br />
              Integrations
            </li>
            <li>
              API
              <br />
              Support
            </li>
            <li>
              Export Your
              <br />
              Data
            </li>
          </ul>
          <div className="second-block__slider">
            <img
              src={'assets/img/index2-img/second-block-img.png'}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* second block end */}
      {/* third block */}
      <div className="third-block__wrapper">
        <div className="third-block">
          <h3>A better way to learn</h3>
          <p>Here are some ways we can help you gain valuable insights.</p>
          <div className="third-block__row">
            <ul>
              <li className="caption calendar">Finding problems</li>
              <li>
                Works with your Google, Works with your Google, Works with your
                Google, Works with your Google, Works with your Google, Works
                with your Google, <br />
              </li>
            </ul>
            <ul>
              <li className="caption control">Finding solutions</li>
              <li>
                Set buffer times between <br />
                meetings, prevent last minute <br />
                meetings, create secret event <br />
                types, and more
              </li>
            </ul>
            <ul>
              <li className="caption flexible">Generate ideas</li>
              <li>
                Supports 1-on-1, round robin <br />
                and collective availability <br />
                meetings
              </li>
            </ul>
          </div>
          <div className="third-block__row">
            <ul>
              <li className="caption timezone">Understand culture</li>
              <li>
                Works with your Google, <br />
                Outlook, Office 365 or iCloud <br />
                calendar so you’re never <br />
                double booked
              </li>
            </ul>
            <ul>
              <li className="caption apps">Create content</li>
              <li>
                Set buffer times between <br />
                meetings, prevent last minute <br />
                meetings, create secret event <br />
                types, and more
              </li>
            </ul>
            <ul>
              <li className="caption team">Capture interests.</li>
              <li>
                Supports 1-on-1, round robin <br />
                and collective availability <br />
                meetings
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* third block end */}
      {/* fourth block */}
      <div className="fourth-block">
        <div className="fourth-block__wrapper">
          <h4>
            Understand diversity and
            <br />
            be what people need
          </h4>
          <p>
            Every community is different. Engage and <br /> convert users into
            fans.
          </p>
          <a href="https://discord.gg/m6AvHWZE">
            Explore Communities
          </a>
        </div>
      </div>
      {/* fourth block end */}
      {/* fifth block */}
      <div className="fifth-block">
        <h5>Secure. Scalable. Efficient.</h5>
        <div className="fifth-block__info">
          <div className="info-block">
            <p>
              Secure your privacy and data
              <br />
              with Wlack
            </p>
            <span>
              With Wlack, your data is secured beyond global security and
              privacy standards.
            </span>
          </div>
          <div className="info-block">
            <p>
              Automate your research
              <br />
              and feedback collection
            </p>
            <span>
              Use our tools to automate all your campaigns, so you can turn
              hours of research into minutes.
            </span>
          </div>
          <div className="info-block">
            <p>
              Scalable pricing to help you run more research at lower cost.
              <br />
            </p>
            <span>
              Get more research done, so you can generate more value and save
              cost.
            </span>
          </div>
        </div>
      </div>
      {/* fifth block end */}
      {/* sixth block */}
      <div className="sixth-block">
        <div className="sixth-block__wrapper">
          <h6>Optimize your output</h6>
          <p>Experience the best way to do research.</p>
          <a href="https://discord.gg/m6AvHWZE">Discord</a>
        </div>
      </div>
      {/* sixth block end */}
    </div>
  </Layout>
)

export default Home
