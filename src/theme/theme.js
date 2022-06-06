import breakpoints from './parts/breakpoints';
import {blue, green, gray, red, text} from './parts/colors';
import {fontSize, fontFamily} from './parts/fonts';

const theme = {
  colors: {
    blue,
    green,
    red,
    gray
  },
  primary: blue,
  secondary: green,
  shape: {
    borderColor: gray[300],
    borderRadius: '0.25rem'
  },
  fontSize,
  fontFamily,
  fontColor: {
    body: text
  },
  breakpoints,
  button: {
    primary: {
      normal: {
        backgroundColor: blue.normal,
        borderColor: blue.normal,
        text: 'white'
      },
      hover: {
        backgroundColor: blue.dark,
        borderColor: blue.dark,
        text: 'white'
      },
      active: {
        backgroundColor: blue.dark,
        borderColor: blue.dark,
        text: 'white'
      },
      disabled: {
        backgroundColor: blue.normal,
        borderColor: blue.normal,
        text: 'white'
      }
    },
    danger: {
      normal: {
        backgroundColor: red.normal,
        borderColor: red.normal,
        text: 'white'
      },
      hover: {
        backgroundColor: red.dark,
        borderColor: red.dark,
        text: 'white'
      },
      active: {
        backgroundColor: red.dark,
        borderColor: red.dark,
        text: 'white'
      },
      disabled: {
        backgroundColor: red.normal,
        borderColor: red.normal,
        text: 'white'
      }
    }
  }
};

export default theme;
