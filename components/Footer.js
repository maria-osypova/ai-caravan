import React from "react";
import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";
import { Explore, People, AccountCircle } from "@mui/icons-material";
import { useRouter } from "next/router";

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
          icon={<Explore />}
          onClick={() => router.push("/")}
          sx={{
            color: currentPath === "/" ? "#2525A7" : "#000",
            textTransform: "uppercase",
            display: "flex",
            padding: "9px 16px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            height: "100%",
          }}
        />
        <BottomNavigationAction
          label="NETWORK"
          value="/network"
          icon={<People />}
          onClick={() => router.push("/network")}
          sx={{
            color: currentPath === "/network" ? "#2525A7" : "#000",
            textTransform: "uppercase",
            display: "flex",
            padding: "9px 16px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            height: "100%",
          }}
        />
        <BottomNavigationAction
          label="PROFILE"
          value="/profile"
          icon={<AccountCircle />}
          onClick={() => router.push("/profile")}
          sx={{
            color: currentPath === "/profile" ? "#2525A7" : "#000",
            textTransform: "uppercase",
            display: "flex",
            padding: "9px 16px",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "8px",
            height: "100%",
          }}
        />
      </BottomNavigation>
    </Paper>
  );
};

export default Footer;
