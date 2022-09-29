// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

// 2. Add your color mode config
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  styles: {
    global: props => ({
      body: {
        bg: mode('#E9E7EF', '#17151F')(props),
      },
    }),
  },
});

export default theme;
