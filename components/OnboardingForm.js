import React, { useState } from "react";
import { useRouter } from "next/router";
import OnboardingCard from "./OnbordingCard";
import { Button } from "@mui/material";

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
  {
    question: "What is your current role and level?",
    fields: [
      { label: "Role", name: "role", type: "text", disabled: false },
      {
        label: "Level",
        name: "level",
        type: "select",
        options: [
          "Junior",
          "Mid-Level",
          "Senior",
          "Lead",
          "Principal",
          "Head of",
          "Director",
          "Vice President",
          "C-Level",
          "Founder",
          "Investor / Venture Capitalist",
        ],
      },
      {
        label: "What best describes your area of expertise?",
        name: "expertise",
        type: "select",
        options: [
          "AI",
          "Data",
          "Engineering",
          "Business",
          "Product",
          "Marketing",
          "Operations",
          "Investments",
        ],
      },
    ],
  },
  {
    question: "Your company name?",
    fields: [
      { label: "Company name", name: "company", type: "text", disabled: false },
      {
        label: "I am currently between jobs",
        name: "unemployed",
        type: "checkbox",
        disabled: false,
      },
    ],
  },
  {
    question: "What is your main goal in joining this community?",
    fields: [
      {
        label: "Primary goal",
        name: "goal",
        type: "select",
        options: [
          "A new job opportunity",
          "Career growth support and mentorship",
          "Onboarding to local ecosystem",
          "New connections and friends",
          "Finding a co-founder",
          "Seeking investment for startup",
          "Seeking a project to invest in",
          "Hiring talent",
          "Exploring AI & Data",
        ],
      },
    ],
  },
  {
    question: "What is your city?",
    fields: [
      { label: "City name", name: "city", type: "text", disabled: false },
    ],
  },
  {
    question: "What is your LinkedIn?",
    fields: [
      { label: "Link", name: "linkedin", type: "text", disabled: false },
    ],
  },
];

const OnboardingForm = () => {
  const router = useRouter();
  const [currentOnboardingCard, setCurrentOnboardingCard] = useState(0);
  const [newUserData, setNewUserData] = useState({});

  const handleInputChange = (name, value) => {
    setNewUserData((prevNewUserData) => ({
      ...prevNewUserData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (name, checked) => {
    setNewUserData((prevNewUserData) => ({
      ...prevNewUserData,
      [name]: checked,
    }));
  };

  const handleNext = async () => {
    if (currentOnboardingCard < onboardingQuestions.length - 1) {
      setCurrentOnboardingCard(currentOnboardingCard + 1);
    } else {
      try {
        const response = await fetch("/api/user", {
          method: "POST",
          body: JSON.stringify(newUserData),
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (response.ok) {
          const data = await response.json();
          console.log("Form submitted:", data);
          router.push("/guest/welcomeMessage");
        } else {
          console.error(`Error: ${response.status}`);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  const handleBack = () => {
    if (currentOnboardingCard > 0) {
      setCurrentOnboardingCard(currentOnboardingCard - 1);
    }
  };

  const allFieldsFilled = onboardingQuestions[
    currentOnboardingCard
  ].fields.every((field) => {
    if (field.name === "company" || field.name === "unemployed") {
      return newUserData["company"]?.trim() !== "" || newUserData["unemployed"];
    }
    return newUserData[field.name] && newUserData[field.name].trim() !== "";
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "0 16px",
        minHeight: "400px",
      }}
    >
      <OnboardingCard
        question={onboardingQuestions[currentOnboardingCard].question}
        fields={onboardingQuestions[currentOnboardingCard].fields.map(
          (field) => ({
            ...field,
            value: newUserData[field.name] || "",
            onChange: (event) =>
              field.type === "checkbox"
                ? handleCheckboxChange(field.name, event.target.checked)
                : handleInputChange(field.name, event.target.value),
          })
        )}
        currentCard={currentOnboardingCard + 1}
        totalCards={onboardingQuestions.length}
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
          disabled={!allFieldsFilled}
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
  );
};

export default OnboardingForm;
