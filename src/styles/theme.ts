"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b31616",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: "var(--font-roboto)",
  },
});

export default theme;
