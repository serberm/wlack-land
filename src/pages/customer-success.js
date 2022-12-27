import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../css/customer.css'
/* eslint-disable react/no-unescaped-entities */

const CustomerSuccess = () => (
  <Layout>
    <SEO title="Wlack | Customer" />
    <div class="uk-section-default uk-section uk-padding-remove-bottom">
      <div class="uk-grid-margin uk-container">
        <div class="tm-grid-expand uk-grid" uk-grid="">
          <div class="uk-grid-item-match uk-flex-middle uk-width-1-2@m uk-first-column">
            <div class="uk-panel uk-width-1-1">
              <h1 class="uk-text-left@m uk-text-center uk-scrollspy-inview ">
                <span class="uk-badge">Customer Success</span>
              </h1>
              <h2 class="uk-heading-xlarge uk-margin-remove-top uk-width-xlarge uk-margin-auto-right@m uk-margin-remove-left@m uk-margin-auto uk-text-left@m uk-text-center uk-scrollspy-inview ">
                {' '}
                Customer Success Services{' '}
              </h2>
              <div
                class="uk-panel uk-text-large uk-margin uk-width-large uk-margin-auto-right@m uk-margin-remove-left@m uk-margin-auto uk-text-left@m uk-text-center uk-scrollspy-inview "
                uk-scrollspy-class=""
              >
                <p>
                  <strong>Strategize. Optimize. Grow.&nbsp;</strong>
                  <br />
                  Our team of dedicated Customer Success Managers are committed
                  to educating and empowering you with the tools to meet your
                  business goals.&nbsp;
                </p>
              </div>
              <div
                class="uk-text-bold uk-width-xlarge@s uk-margin-auto-right@m uk-margin-remove-left@m uk-margin-auto uk-text-left@m uk-text-center uk-scrollspy-inview "
                uk-scrollspy-class=""
              >
                <a
                  class="el-content uk-button uk-button-primary uk-flex-inline uk-flex-center uk-flex-middle"
                  href="/demo"
                >
                  REQUEST A DEMO
                  <span
                    class="uk-margin-small-left uk-icon"
                    uk-icon="arrow-right"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline
                        fill="none"
                        stroke="#000"
                        points="10 5 15 9.5 10 14"
                      ></polyline>
                      <line
                        fill="none"
                        stroke="#000"
                        x1="4"
                        y1="9.5"
                        x2="15"
                        y2="9.5"
                      ></line>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div class="uk-width-1-2@m">
            <div
              class="uk-margin uk-width-2xlarge uk-margin-auto uk-text-center uk-scrollspy-inview "
              uk-scrollspy-class=""
            >
              <img
                decoding="async"
                src="https://customer.io/wp-content/uploads/2021/07/customer_success_animation.svg"
                width="755"
                height="557"
                class="el-image uk-border-rounded entered lazyloaded"
                alt="customer success animation"
                data-lazy-src="/wp-content/uploads/2021/07/customer_success_animation.svg"
                data-ll-status="loaded"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="uk-margin-remove-top tm-grid-expand uk-child-width-1-1 uk-grid-margin uk-grid uk-grid-stack"
        uk-grid=""
      >
        <div class="uk-width-1-1@m uk-first-column">
          <hr class="uk-margin uk-scrollspy-inview " uk-scrollspy-class="" />
        </div>
      </div>
    </div>
  </Layout>
)

export default CustomerSuccess
