import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./Footer";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2525A7",
    },
  },
  typography: {
    fontFamily: "IBM Plex Sans, sans-serif",
  },
});

export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
