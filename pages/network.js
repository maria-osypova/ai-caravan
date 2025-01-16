import styled from "styled-components";
import useSWR from "swr";
import Card from "@/components/Card";
import Filter from "@/components/Filter";
import { useState } from "react";

const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  margin: 0 0;
  width: 100%;
`;

export default function UserProfiles() {
  const [selectedExpertise, setSelectedExpertise] = useState("All");
  const { data, error, isLoading } = useSWR(
    `/api/users?expertise=${encodeURIComponent(selectedExpertise)}`
  );

  if (error) return <p>Failed to load users data</p>;
  if (isLoading) return <p>Loading...</p>;
  if (data.length === 0) return <p>No profiles to show</p>;

  return (
    <>
      <Filter onExpertiseSelect={setSelectedExpertise} />
      <ListContainer>
        {data.map((user) => (
          <li key={user._id}>
            <Card
              photo={user.photo}
              firstName={user.firstName}
              lastName={user.lastName}
              role={user.role}
              linkedin={user.linkedin}
              expertise={user.expertise}
            />
          </li>
        ))}
      </ListContainer>
    </>
  );
}
