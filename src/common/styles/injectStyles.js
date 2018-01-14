import { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

export const injectStyles = () => injectGlobal`
  ${normalize()};

  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600&subset=cyrillic');

  body {
    background-color: #f3f7fa;
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: normal;
    color: #4a4a4a;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
`;
