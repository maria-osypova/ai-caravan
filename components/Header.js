import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header = ({ title }) => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar>
        <Typography
          variant="h5"
          sx={{
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 580,
            lineHeight: "133.4%",
          }}
        >
          {title}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
