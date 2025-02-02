import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Footer from "./Footer";
import Header from "./Header";
import { useRouter } from "next/router";
import Login from "./Login";

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
  const isPublicPage = router.pathname.startsWith("/guest");

  const getTitle = () => {
    switch (router.pathname) {
      case "/":
        return "Find right people";
      case "/network":
        return "Network";
      case "/profile":
        return "Profile";
      default:
        return "Page Title";
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div
        style={{
          backgroundColor: isPublicPage ? "#2525A7" : "white",
          minHeight: "100vh",
        }}
      >
        {!isPublicPage && <Header title={getTitle()} />}
        {children}
        {!isPublicPage && <Footer />}
      </div>
    </ThemeProvider>
  );
}
