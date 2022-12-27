import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../css/customer.css'

const Contact = () => (
  <Layout>
    <SEO title="Wlack | Contact" />
    <div class="uk-section-default">
      <div
        data-src="https://customer.io/wp-content/uploads/2021/07/landscape_2-1.svg"
        uk-img=""
        class="uk-background-norepeat uk-background-cover uk-background-bottom-center uk-section"
        uk-height-viewport="offset-top: true;"
        style={{minHeight: 'calc(100vh - 80px)', backgroundImage:'url("https://customer.io/wp-content/uploads/2021/07/landscape_2-1.svg")'}}
      >
        <div class="uk-container">
          <div class="uk-grid-margin uk-container">
            <div class="tm-grid-expand uk-grid-column-large uk-grid" uk-grid="">
              <div class="uk-width-1-2@m uk-first-column"></div>

              <div class="uk-dark uk-width-1-2@m">
                <div
                  class="uk-card uk-card-default uk-card-body uk-margin-remove-first-child uk-margin"
                  id="page#1"
                >
                  <h3 class="el-title uk-card-title uk-margin-small-top uk-margin-remove-bottom">
                    {' '}
                    Request a Demo{' '}
                  </h3>

                  <div class="el-content uk-panel uk-margin-top">
                    <form
                      class="uk-grid-small uk-grid"
                      id="demoForm"
                      uk-grid=""
                      autocomplete="on"
                    >
                      <div class="uk-width-1-2@s uk-first-column">
                        <label class="uk-form-label" for="first-name">
                          First Name *
                        </label>{' '}
                        <input
                          class="uk-input uk-form-small"
                          id="first-name"
                          name="first-name"
                          type="text"
                          placeholder=""
                          required=""
                        />
                      </div>
                      <div class="uk-width-1-2@s">
                        <label class="uk-form-label" for="last-name">
                          Last Name *
                        </label>{' '}
                        <input
                          class="uk-input uk-form-small"
                          id="last-name"
                          name="last-name"
                          type="text"
                          placeholder=""
                          required=""
                        />
                      </div>
                      <div class="uk-width-1-2@s uk-grid-margin uk-first-column">
                        <label class="uk-form-label" for="email">
                          Company Email *
                        </label>{' '}
                        <input
                          class="uk-input uk-form-small"
                          name="email"
                          id="email"
                          type="email"
                          pattern="^.+@((?!hotmail)(?!gmail)(?!EMAIL)(?!GMAIL)(?!ymail)(?!googlemail)(?!live)(?!gmx)(?!yahoo)(?!outlook)(?!msn)(?!icloud)(?!facebook)(?!aol)(?!zoho)(?!mail)(?!yandex)(?!hushmail)(?!lycox)(?!lycosmail)(?!inbox)(?!myway)(?!aim)(?!fastmail)(?!goowy)(?!juno)(?!shortmail)(?!atmail)(?!protonmail).)+\..+$"
                          placeholder=""
                          required=""
                          oninvalid="this.setCustomValidity('Oops! You forgot to add your company email 😅')"
                          oninput="this.setCustomValidity('')"
                        />
                      </div>
                      <div class="uk-width-1-2@s uk-grid-margin">
                        <label class="uk-form-label" for="organization">
                          Company Name *
                        </label>{' '}
                        <input
                          id="organization"
                          name="organization"
                          class="uk-input uk-form-small"
                          type="text"
                          placeholder=""
                          required=""
                        />
                      </div>
                      <div class="uk-width-1-1 uk-grid-margin uk-first-column">
                        <label class="uk-form-label" for="tel">
                          Phone *
                        </label>{' '}
                        <input
                          class="uk-input uk-form-small"
                          id="tel"
                          name="tel"
                          type="text"
                          placeholder=""
                          required=""
                        />
                      </div>
                      <div class="uk-width-1-1 uk-grid-margin uk-first-column">
                        <label class="uk-form-label" for="contacts_estimate">
                          Number of Contacts *
                        </label>{' '}
                        <select
                          class="uk-select uk-form-small"
                          id="contacts_estimate"
                          name="contacts_estimate"
                          required=""
                        >
                          <option value="" disabled="" selected="">
                            Choose one…
                          </option>
                          <option value="0 - 15,000">0 – 15,000</option>
                          <option value="15,000 - 50,000">
                            15,000 – 50,000
                          </option>
                          <option value="50,000 - 250,000">
                            50,000 – 250,000
                          </option>
                          <option value="250000 - 500,000">
                            250,000 – 500,000
                          </option>
                          <option value="500,000+">500,000+</option>
                        </select>
                      </div>
                      <div class="uk-width-1-1 uk-grid-margin uk-first-column">
                        <label class="uk-form-label" for="industry">
                          industry *
                        </label>
                        <select
                          class="uk-select uk-form-small"
                          id="industry"
                          name="industry"
                          required=""
                        >
                          <option value="" disabled="" selected="">
                            Choose one…
                          </option>
                          <option value="Consumer &amp; Business Services">
                            Consumer &amp; Business Services
                          </option>
                          <option value="EdTech">EdTech</option>
                          <option value="FinTech">FinTech</option>
                          <option value="Fitness &amp; Wellness">
                            Fitness &amp; Wellness
                          </option>
                          <option value="Gaming">Gaming</option>
                          <option value="Goods">Goods</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Insurance">Insurance</option>
                          <option value="Media &amp; Entertainment">
                            Media &amp; Entertainment
                          </option>
                          <option value="Real Estate">Real Estate</option>
                          <option value="SaaS">SaaS</option>
                          <option value="Travel &amp; Mobility">
                            Travel &amp; Mobility
                          </option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div class="uk-width-1-1 uk-grid-margin uk-first-column">
                        <label class="agency-checkbox">
                          <input
                            class="uk-radio"
                            type="radio"
                            name="business_type"
                            value="business"
                            checked=""
                          />{' '}
                          I’m evaluating for my business
                        </label>
                        <label class="agency-checkbox uk-margin-left">
                          <input
                            class="uk-radio"
                            type="radio"
                            name="business_type"
                            value="agency"
                          />{' '}
                          I’m with a marketing agency
                        </label>
                      </div>
                      <div class="uk-width-1-1 uk-grid-margin uk-first-column">
                        <label class="uk-form-label" for="comments">
                          Anything Else?
                        </label>
                        <textarea
                          class="uk-textarea uk-form-small"
                          rows="1"
                          placeholder=""
                          id="comments"
                          name="comments"
                        ></textarea>
                      </div>
                      <div class="uk-width-1-1 uk-grid-margin uk-first-column">
                        <button class="uk-button uk-button-large uk-button-primary uk-width-1-1">
                          Request a Demo
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact
