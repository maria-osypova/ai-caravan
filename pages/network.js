import styled from "styled-components";
import useSWR from "swr";
import Card from "@/components/Card";
import Filter from "@/components/Filter";
import { useState } from "react";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0;
  width: 85%;
  flex: 1;
  overflow-y: auto;
  padding-bottom: 74px;
`;

export default function UserProfiles() {
  const [selectedExpertise, setSelectedExpertise] = useState("All");
  const { data, error, isLoading } = useSWR(
    `/api/users?expertise=${encodeURIComponent(selectedExpertise)}`
  );

  return (
    <PageContainer>
      <Filter onExpertiseSelect={setSelectedExpertise} />
      {error ? (
        <p>No relevant profiles found</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : data.length === 0 ? (
        <p>No relevant profiles found</p>
      ) : (
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
      )}
    </PageContainer>
  );
}
