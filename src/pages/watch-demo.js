import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import '../css/customer.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div class="uk-section-default uk-section uk-padding-remove-bottom">
      <div class="uk-grid-margin uk-container">
        <h1 class="uk-heading-xlarge uk-margin-medium uk-margin-remove-top uk-text-center">
          {' '}
          See Wlack in Action{' '}
        </h1>

        <div class="uk-margin-medium uk-text-center">
          <div
            class="uk-flex-middle uk-grid-small uk-child-width-auto uk-flex-center uk-grid"
            uk-grid=""
          >
            <div class="el-item uk-first-column">
              <a
                class="el-content uk-button uk-button-default uk-button-large"
                href="/blog/"
              >
                See More Content
              </a>
            </div>

            <div class="el-item">
              <a
                class="el-content uk-button uk-button-default uk-button-large"
                href="/docs/getting-started-overview"
              >
                Read Our Docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
