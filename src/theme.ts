// src/theme.ts
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      50: "#e0f7fa",
      100: "#b2ebf2",
      500: "#00bcd4",
      600: "#00acc1",
      700: "#0097a7",
    },
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
});
