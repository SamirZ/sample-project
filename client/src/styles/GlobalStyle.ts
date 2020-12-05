import styled, { createGlobalStyle } from "styled-components";

export const AppWrapperOuter = styled.div`
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`

// Application Wrapper CSS
export const AppWrapper = styled.div`
  width: 80vw;
  overflow-y: auto;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  @media (max-width: 1024px) {
    width: 100vw;
  }
`;

// Reset CSS
export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    vertical-align: baseline;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 2rem;
    line-height: 100%;
    background: rgb(228,220,210);
    background: linear-gradient(90deg, rgba(228,220,210,1) 35%, rgba(233,235,238,1) 100%);
    color: #1d2129;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  * {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }
`;
