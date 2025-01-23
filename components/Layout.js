import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./Footer";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const isPublicPage = router.pathname.startsWith("/public");

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          backgroundColor: isPublicPage ? "#2525A7" : "white",
          minHeight: "100vh",
        }}
      >
        {children}
        {!isPublicPage && <Footer />}
      </div>
    </ThemeProvider>
  );
}
