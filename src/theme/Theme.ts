import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { mode, Styles } from "@chakra-ui/theme-tools";

interface MyTheme extends ThemeConfig {
  styles?: {
    global?: Styles;
  };
  fonts?: {
    heading?: string;
    body?: string;
  };
}

const config: MyTheme = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  styles: {
    global: () => ({
      body: {
        bg: mode("#E9E7EF", "#17151F"),
      },
      "&::-webkit-scrollbar": {
        width: "10px",
        backgroundColor: "#F5F5F5",
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: "inset 0 0 6px rgba(0,0,0,0.3)",
        backgroundColor: "#F5F5F5",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "#A1A1A1",
      },
    }),
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
});

export default theme;
