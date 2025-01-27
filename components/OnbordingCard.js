import React from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const OnboardingCard = ({ question, fields, currentCard, totalCards }) => {
  return (
    <Card
      style={{
        display: "flex",
        width: "343px",
        height: "500px",
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
          variant="body2"
          style={{
            color: "#BDBDBD",
          }}
        >
          Question {currentCard} of {totalCards}
        </Typography>
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
          <FormControl variant="standard" key={index} fullWidth margin="normal">
            {field.type === "text" && (
              <TextField
                label={field.label}
                variant="standard"
                fullWidth
                name={field.name}
                value={field.value}
                onChange={field.onChange}
              />
            )}
            {field.type === "select" && (
              <>
                <InputLabel>{field.label}</InputLabel>
                <Select
                  label={field.label}
                  name={field.name}
                  value={field.value}
                  onChange={field.onChange}
                >
                  {field.options.map((option, idx) => (
                    <MenuItem key={idx} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </>
            )}
            {field.type === "checkbox" && (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={field.value}
                    onChange={field.onChange}
                    name={field.name}
                  />
                }
                label={field.label}
              />
            )}
          </FormControl>
        ))}
      </CardContent>
    </Card>
  );
};

export default OnboardingCard;
