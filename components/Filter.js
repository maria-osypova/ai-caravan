import styled from "styled-components";
import { Button } from "@mui/material";

const FilterContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
`;

const expertiseTags = [
  "AI&Data",
  "Engineering",
  "Business",
  "Product",
  "Marketing",
  "Operations",
  "Investments",
];

export default function Filter() {
  return (
    <FilterContainer>
      {expertiseTags.map((tag) => (
        <Button key={tag}>{tag}</Button>
      ))}
    </FilterContainer>
  );
}
