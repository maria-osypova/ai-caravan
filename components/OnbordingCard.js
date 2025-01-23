import React from "react";
import { Card, CardContent, Typography, TextField } from "@mui/material";

const OnboardingCard = ({ question, fields }) => {
  return (
    <Card
      style={{
        display: "flex",
        width: "343px",
        height: "490px",
        padding: "32px 24px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "3px 24px",
        flexShrink: 0,
        borderRadius: "16px",
        background: "#FAFAFA",
        margin: "0 auto",
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          component="h2"
          style={{
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "28px",
            letterSpacing: "0.15px",
          }}
        >
          {question}
        </Typography>
        {fields.map((field, index) => (
          <TextField
            key={index}
            label={field.label}
            variant="standard"
            fullWidth
            name={field.name}
            value={field.value}
            onChange={field.onChange}
            style={{ display: field.disabled ? "none" : "block" }}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default OnboardingCard;
