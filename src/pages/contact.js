import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import '../css/index2_contact.css'
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unescaped-entities */
// import 'public/css/index2_contact.css';

const Contact = () => (
  <Layout>
    <SEO title="Wlack | Contact" />
    <div className="contact__wrapper">
      <h1>Give us a shout.</h1>
      <div className="contact">
        <form className="contact__form" method="post">
          <p>We're always here for you and your team</p>
          <div className="input-wrapper category">
            <legend>Category</legend>
            <input type="checkbox" id="category" name defaultValue />
            <label htmlFor="category">General Inquiries</label>
          </div>
          <div className="input-wrapper">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name placeholder="Enter your Name" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="email">Work Email</label>
            <input
              type="email"
              id="email"
              name
              placeholder="hello@wlack.com"
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="message" />
            <input
              type="text"
              id="message"
              name
              placeholder="Enter your message"
            />
          </div>
          <button type="submit" name="button">
            Send a message
          </button>
        </form>
        <div className="contact__help">
          <ul>
            <li className="caption">Sale</li>
            <li>
              Let us show you what Clubhouse can do for your team. Get in touch
              at <a href="mailto:sales@wlack.com">sales@wlack.com.</a>{' '}
            </li>
          </ul>
          <ul>
            <li className="caption">Customer Support</li>
            <li>
              For any product or technical questions, reach us at
              <a href="mailto:suupport@wlack.com">
                support@wlack.com.
              </a>{' '}
              <br />
              Or, check out our Help Center.
            </li>
          </ul>
          <ul>
            <li className="caption">Media and press</li>
            <li>
              Excited by the Clubhouse story and want to share it with your
              audience? For press inquiries, <br />
              contact:{' '}
              <a href="mailto:press@wlack.com">press@wlack.com.</a>
            </li>
          </ul>
          <ul>
            <li className="caption">General Inquiries</li>
            <li>
              For anything else on your mind, including partnership ideas, say
              hello: <br />
              <a href="mailto:hello@wlack.com">hello@wlack.com.</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
)

export default Contact
