import styled from 'styled-components'
import { Link } from 'gatsby'

export const Links = styled.ul`
  display: flex;
  font-weight: 600;
  font-size: 15px;
  color: #7f7f7f;
  margin-left: 56px;
  color: ${props => (props.isPricing ? '#e1cdff' : '#7f7f7f')} !important;
  a:hover {
    color: ${props => (props.isPricing ? '#fff' : '#000')} !important;
  }
  a:active {
    color: ${props => (props.isPricing ? '#fff' : '#000')} !important;
  }
  a::after {
    content: '';
    display: inline-block;
    width: 0;
    height: 2px;
    background: ${props => (props.isPricing ? '#fff' : '#69a9ff')} !important;
    position: absolute;
    bottom: 0;
    left: 0;
    transition: width 0.2s ease-in-out;
  }
`

export const Logo = styled(Link)`
  width: 171px;
  height: 28px;
  font-weight: 600;
  font-size: 32px;
`

export const GetStarted = styled(Link)`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  :active {
    opacity: 0.6;
  }
  ${props =>
    props.isPricing
      ? `
    color: #6515dd !important;
    background: #fff !important;
    :after {
      background-image: url('assets/icons/arrow-right-purple.svg') !important;
    }
  `
      : `
    color: #fff !important;
    background: #69a9ff !important;
    :after {
      background-image: url('assets/icons/arrow-right.svg') !important;
    }
  `}
`

export const More = styled.button``
