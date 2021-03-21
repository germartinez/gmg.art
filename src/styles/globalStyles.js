import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    background: #000;
    width: 100%;
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
    color: #fff;
  }

  a {
    color: #fff;
  }
`
export default GlobalStyles
