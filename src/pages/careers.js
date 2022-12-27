import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../css/index2_security.css'

const Careers = () => (
  <Layout>
    <SEO title="Wlack | Security" />
    <div className="security__wrapper">
      <div className="security">
        <h1>Work with us</h1>
        <h2>How we work</h2>
        <p>
          As a globally distributed, remote-first company, we value synchronous
          and asynchronous work and know that occasionally turning off Slack
          notifications is a good thing! We have flexible working hours so our
          team members can choose a schedule that works best for their lives,
          health, and families. We value learning from our teammates, but we
          also challenge each other to find the best path forward. We’ve learned
          that the best solutions don’t always surface right away, and that’s
          okay!
        </p>
        <h2>Our culture</h2>
        <p>
          We strive to create a fair and inclusive workplace that empowers the
          team to do their best work. Being a remote-first team, it’s important
          to make space for creating connections and sharing experiences
          together. We want DEIBA thinking to affect every part of the company,
          from how we communicate our brand and product to how we design and
          build the product to the people who make wlack a great place to
          work. We believe that expanding our knowledge, skills, and minds in
          creative ways can foster a culture of approaching our professional
          projects in open and fresh new ways. We do this by hosting an annual
          in-person retreat and holding regular team meet-ups to have fun, make
          personal connections, and charge our trust batteries.
        </p>
        <h1>Current Openings</h1>
        <div class="uk-card uk-card-default uk-card-small uk-flex uk-flex-wrap uk-flex-between uk-flex-middle uk-margin-small-bottom">
          <div class="uk-card-body">
            <span class="uk-label uk-text-uppercase uk-padding-remove uk-text-muted uk-background-default">
              Remote{' '}
            </span>
            <h3 class="uk-card-title uk-margin-remove">
              <a class="uk-text-secondary" href="#">
                Senior Backend Engineer
              </a>
            </h3>
          </div>
          <div class="uk-card-body">
            <a href="#" class="uk-button uk-button-primary">
              <span class="uk-text-middle">Apply</span>
              <span uk-icon="arrow-right-2020" class="uk-icon"></span>
            </a>
          </div>
        </div>
        <div class="uk-card uk-card-default uk-card-small uk-flex uk-flex-wrap uk-flex-between uk-flex-middle uk-margin-small-bottom">
          <div class="uk-card-body">
            <span class="uk-label uk-text-uppercase uk-padding-remove uk-text-muted uk-background-default">
              Americas Remote{' '}
            </span>
            <h3 class="uk-card-title uk-margin-remove">
              <a
                href="#"
              >
                Senior Fullstack Engineer{' '}
              </a>
            </h3>
          </div>
          <div class="uk-card-body">
            <a
              href="#"
              class="uk-button uk-button-primary"
            >
              <span class="uk-text-middle">Apply</span>
              <span uk-icon="arrow-right-2020" class="uk-icon"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Careers
