import React from "react";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Explore, People, AccountCircle } from "@mui/icons-material";
import { useRouter } from "next/router";
import Link from "next/link";

const Footer = () => {
  const router = useRouter();
  const currentPath = router.pathname;
  return (
    <Paper
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        width: "100%",
        height: "74px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderTop: "1px solid var(--grey-100, #F5F5F5)",
        background: "#FFF",
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={currentPath}
        style={{ width: "100%", height: "100%" }}
      >
        <BottomNavigationAction
          label="EXPLORE"
          value="/"
          icon={
            <Link href="/" legacyBehavior passHref>
              <a style={{ textDecoration: "none", color: "inherit" }}>
                <Explore />
              </a>
            </Link>
          }
          sx={{
            color: currentPath === "/" ? "#2525A7" : "#000",
            textTransform: "uppercase",
            display: "flex",
            padding: "9px 16px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        />
        <BottomNavigationAction
          label="NETWORK"
          value="/network"
          icon={
            <Link href="/network" legacyBehavior passHref>
              <a style={{ textDecoration: "none", color: "inherit" }}>
                <People />
              </a>
            </Link>
          }
          sx={{
            color: currentPath === "/network" ? "#2525A7" : "#000",
            textTransform: "uppercase",
            display: "flex",
            padding: "9px 16px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        />
        <BottomNavigationAction
          label="PROFILE"
          value="/profile"
          icon={
            <Link href="/profile" legacyBehavior passHref>
              <a style={{ textDecoration: "none", color: "inherit" }}>
                <AccountCircle />
              </a>
            </Link>
          }
          sx={{
            color: currentPath === "/profile" ? "#2525A7" : "#000",
            textTransform: "uppercase",
            display: "flex",
            padding: "9px 16px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
          }}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
