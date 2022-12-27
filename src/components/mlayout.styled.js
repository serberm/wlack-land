
import styled from 'styled-components'

// eslint-disable-next-line
export const App = styled.div`
  ${props =>
    props.isPricing &&
    `
    :before {
      content: '';
      display: block;
      width: 100%;
      height: 550px;
      background: url("/assets/img/index2-img/price-bg.png");
      background-size: contain;
      background-position: center;
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
    }
  `}
`
