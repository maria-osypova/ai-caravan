import React, { useState } from "react";
import OnboardingCard from "./OnbordingCard";
import { LinearProgress, Button } from "@mui/material";

const onboardingQuestions = [
  {
    question: "What is your full name?",
    fields: [
      { label: "First Name", name: "firstName", type: "text", disabled: false },
      { label: "Last Name", name: "lastName", type: "text", disabled: false },
    ],
  },
  {
    question: "What is your email?",
    fields: [{ label: "Email", name: "email", type: "text", disabled: false }],
  },
];

const OnboardingForm = () => {
  const [currentOnboardingCard, setCurrentOnboardingCard] = useState(0);
  const [newUserData, setNewUserData] = useState({});

  const handleInputChange = (name, value) => {
    setNewUserData((prevNewUserData) => ({
      ...prevNewUserData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (currentOnboardingCard < onboardingQuestions.length - 1) {
      setCurrentOnboardingCard(currentOnboardingCard + 1);
    } else {
      console.log("Form submitted:", newUserData);
    }
  };

  const handleBack = () => {
    if (currentOnboardingCard > 0) {
      setCurrentOnboardingCard(currentOnboardingCard - 1);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 16px",
        minHeight: "100vh",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          maxWidth: "343px",
          minHeight: "400px",
          justifyContent: "space-between",
        }}
      >
        <OnboardingCard
          question={onboardingQuestions[currentOnboardingCard].question}
          fields={onboardingQuestions[currentOnboardingCard].fields.map(
            (field) => ({
              ...field,
              value: newUserData[field.name] || "",
              onChange: (event) =>
                handleInputChange(field.name, event.target.value),
            })
          )}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "343px",
            marginTop: "32px",
            marginBottom: "46px",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={handleBack}
            disabled={currentOnboardingCard === 0}
            style={{
              flex: 1,
              marginRight: "10px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "32px",
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            style={{
              flex: 2,
              backgroundColor: "white",
              color: "black",
              borderRadius: "32px",
            }}
          >
            {currentOnboardingCard < onboardingQuestions.length - 1
              ? "Next"
              : "Submit"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingForm;
