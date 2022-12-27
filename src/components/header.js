import React from 'react'
import { Link } from 'gatsby'
import * as S from './header.styled'

const Header = () => {
  let isPricing = false;

  if (typeof window !== 'undefined') {
    isPricing = window.location.pathname === '/price' ||
    window.location.pathname === '/price/'
  }

  return (
    <header className="page-header">
      <S.Logo to="/" isPricing={isPricing} >Wlack</S.Logo>
      <S.Links isPricing={isPricing}>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/price">Pricing</Link>
        </li>
        <li>
          <Link to="/security">Security</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about-us">About</Link>
        </li>
      </S.Links>
      <div>
        <S.GetStarted to="/get-started" isPricing={isPricing}>
          Get started
        </S.GetStarted>
      </div>
      <button type="button" className="page-header__burger" name="button" />
    </header>
  )
}

export default Header
