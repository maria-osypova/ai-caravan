import React from "react";
import { Button, Typography, Box } from "@mui/material";
import Link from "next/link";
import { styled } from "@mui/system";

const DynamicTextContainer = styled("div")({
  position: "relative",
  height: "51.348px",
  overflow: "hidden",
  display: "inline-block",
  marginTop: "10px",
});

const DynamicTextList = styled("ul")({
  margin: 0,
  padding: 0,
  listStyle: "none",
  animation: "change 10s infinite",
  "@keyframes change": {
    "0%, 12.66%, 100%": { transform: "translate3d(0,0,0)" },
    "16.66%, 29.32%": { transform: "translate3d(0,-25%,0)" },
    "33.32%, 45.98%": { transform: "translate3d(0,-50%,0)" },
    "49.98%, 62.64%": { transform: "translate3d(0,-75%,0)" },
    "66.64%, 79.3%": { transform: "translate3d(0,-50%,0)" },
    "83.3%, 95.96%": { transform: "translate3d(0,-25%,0)" },
  },
});

const DynamicTextItem = styled("li")({
  lineHeight: "51.348px",
  margin: 0,
});

const Welcome = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      textAlign="center"
      position="relative"
    >
      <Typography
        variant="h5"
        component="h2"
        style={{
          color: "white",
          fontSize: "44px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "116.7%",
          letterSpacing: "-1.5px",
        }}
      >
        Find your
      </Typography>
      <Typography
        variant="h5"
        component="h2"
        style={{
          color: "white",
          fontSize: "44px",
          fontStyle: "normal",
          fontWeight: 600,
          lineHeight: "116.7%",
          letterSpacing: "-1.5px",
        }}
      >
        <DynamicTextContainer>
          <DynamicTextList>
            <DynamicTextItem>AI expert</DynamicTextItem>
            <DynamicTextItem>data expert</DynamicTextItem>
            <DynamicTextItem>new job in AI</DynamicTextItem>
            <DynamicTextItem>co-founder</DynamicTextItem>
          </DynamicTextList>
        </DynamicTextContainer>
      </Typography>
      <Box
        position="absolute"
        bottom="24px"
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        gap="8px"
      >
        <Button
          variant="contained"
          color="secondary"
          style={{
            width: "168px",
            height: "56px",
            backgroundColor: "black",
            color: "white",
            borderRadius: "32px",
            fontWeight: "fontWeightMedium",
          }}
          component={Link}
          href="/guest/login"
        >
          Log in
        </Button>
        <Button
          variant="contained"
          color="secondary"
          style={{
            width: "168px",
            height: "56px",
            backgroundColor: "white",
            color: "black",
            borderRadius: "32px",
            fontWeight: "fontWeightMedium",
          }}
          component={Link}
          href="/guest/onboarding"
        >
          Sign up
        </Button>
      </Box>
    </Box>
  );
};

export default Welcome;
