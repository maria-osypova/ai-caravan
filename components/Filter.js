import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "@mui/material";

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const expertises = [
  "All",
  "Data",
  "AI",
  "Engineering",
  "Business",
  "Product",
  "Marketing",
  "Operations",
  "Investments",
];

export default function Filter({ onExpertiseSelect }) {
  const [selectedExpertiseTag, setSelectedExpertiseTag] = useState("All");

  const handleExpertiseClick = (expertise) => {
    setSelectedExpertiseTag(expertise);
    onExpertiseSelect(expertise);
  };

  return (
    <FilterContainer>
      {expertises.map((expertise) => (
        <Button
          key={expertise}
          onClick={() => handleExpertiseClick(expertise)}
          variant={
            selectedExpertiseTag === expertise ? "contained" : "outlined"
          }
          sx={{
            flexShrink: 0,
            minWidth: "100px",
          }}
        >
          {expertise}
        </Button>
      ))}
    </FilterContainer>
  );
}
