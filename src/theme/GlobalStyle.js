import {createGlobalStyle} from 'styled-components';
import styledReset from 'styled-reset';

export default createGlobalStyle`
  ${styledReset}
  html {
    font-size: 16px;
    box-sizing: border-box;
  }
  
  *, *::before, *::after{
    box-sizing: border-box;
  }
  body {
    margin: 0;
    color: ${(props) => props.theme.fontColor.body};
    font-size: ${(props) => props.theme.fontSize.body};
    font-family: ${(props) => props.theme.fontFamily.primary};
    line-height: 1.6;
  }
  h1 {
    font-size: ${(props) => props.theme.fontSize.h1};
    font-weight: bold;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: ${(props) => props.theme.fontSize.h2};
    font-weight: bold;
    margin-bottom: 1rem;
  }
  h3 {
    font-size: ${(props) => props.theme.fontSize.h3};
    font-weight: bold;
    margin-bottom: 1rem;
  }
  h4 {
    font-size: ${(props) => props.theme.fontSize.h4};
    font-weight: bold;
    margin-bottom: 1rem;
  }
  strong {
    font-weight: bold;
  }
`;
