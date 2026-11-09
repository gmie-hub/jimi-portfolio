import { extendTheme } from "@chakra-ui/react";

export const palette = {
  ink: "#0A0A0C",
  surface: "#121216",
  surfaceHi: "#18181D",
  line: "rgba(255,255,255,0.08)",
  lineHi: "rgba(255,255,255,0.16)",
  text: "#EDEDEF",
  muted: "#9A9AA5",
  faint: "#5E5E68",
  accent: "#C6F432",
  accentInk: "#0A0A0C",
};

const theme = extendTheme({
  config: { initialColorMode: "dark", useSystemColorMode: false },
  fonts: {
    heading: `"DM Sans", system-ui, sans-serif`,
    body: `"DM Sans", system-ui, sans-serif`,
  },
  colors: {
    accent: {
      50: "#F8FDE6",
      100: "#EEFBBF",
      200: "#E2F98F",
      300: "#D5F75F",
      400: "#C6F432",
      500: "#B2DE1F",
      600: "#8CB016",
      700: "#66810F",
      800: "#415209",
      900: "#1D2504",
    },
  },
  styles: {
    global: {
      html: { scrollBehavior: "smooth", background: palette.ink },
      body: {
        bg: palette.ink,
        color: palette.text,
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      },
      "::selection": { background: palette.accent, color: palette.accentInk },
    },
  },
});

export default theme;
