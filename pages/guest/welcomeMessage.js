import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Typography, Box } from "@mui/material";

const WelcomeMessage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/network");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      textAlign="center"
    >
      <Typography
        variant="h5"
        component="h4"
        style={{
          color: "white",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "116.7%",
          letterSpacing: "-1.5px",
        }}
      >
        Welcome to AI Caravan Community
      </Typography>
    </Box>
  );
};

export default WelcomeMessage;
