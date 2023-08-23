import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: "#f0f9ff",
      100: "#e0f2fe",
      200: "#bae6fd",
      300: "#7dd3fc",
      400: "#38bdf8",
      500: "#0ea5e9",
      600: "#0284c7",
      700: "#0369a1",
      800: "#075985",
      900: "#0c4a6e",
    },
    // Redefining only one shade, rest of the color will remain same.
    amber: {
      400: "#d97706",
    },
  },
  components: {
    Button: {
      baseStyle: (props) => {
        return {
          _light: { backgroundColor: "primary.100" },
          _dark: { backgroundColor: "primary.900" },
          fontWeight: "normal",
        };
      },
      defaultProps: {
        fontSize: 24,
        fontWeight: 600,
      },
    },
    Heading: {
      baseStyle: (props) => {
        return {
          _light: { color: "#0B0D14" },
          _dark: { color: "#fff" },
        };
      },
      defaultProps: {
        fontSize: 26,
      },
    },
    View: {
      baseStyle: (props) => {
        return {
          _light: { backgroundColor: "blue.50" },
          _dark: { backgroundColor: "#222222" },
        };
      },
    },
    Input: {
      baseStyle: (props) => {
        return {
          _light: { color: "#000", placeholderTextColor: "gray.500" },
          _dark: { color: "#fff", placeholderTextColor: "gray.50" },
        };
      },
    }
  },
  config: {
    // Changing initialColorMode to 'dark'
    initialColorMode: "light",
  },
});
