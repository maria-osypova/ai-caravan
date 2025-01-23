import React from "react";
import OnboardingForm from "@/components/OnboardingForm";

const onbordingQuestions = [
  "What is your full name?",
  "What is your email?",
  "What is your current role and level?",
  "Your company name?",
  "What is your main goal in joining this community?",
  "What is your city?",
  "What is your LinkedIn?",
];

const Onboarding = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 16px",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "343px",
          marginBottom: "24px",
          backgroundColor: "transparent",
          padding: "24px 24px 0 24px",
        }}
      >
        <span>Sign Up</span>
        <span>AI Caravan</span>
      </div>
      <OnboardingForm />
    </div>
  );
};

export default Onboarding;
