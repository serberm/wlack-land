
import React from 'react'
import PropTypes from 'prop-types'
import * as S from './mlayout.styled'

import Header from './header'
import Footer from './footer'
import './layout.css'
import '../css/index2.css'
import '../css/app.css'

const Layout = ({ children }) => {

  let isPricing = false;

  if (typeof window !== 'undefined') {
    isPricing = window.location.pathname === '/price' ||
    window.location.pathname === '/price/'
  }
    
  return (
    <S.App isPricing={isPricing}>
      <Header siteTitle={'wlack'} />
      <main>{children}</main>
      <Footer />
    </S.App>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
