import useSWR from "swr";
import styled from "styled-components";
import Image from "next/image";

const ProfileContainer = styled.div`
  padding: 16px;
  margin: 0 auto;
  background-color: #f9f9f9;
  font-family: Arial, sans-serif;

  @media (min-width: 768px) {
    max-width: 600px;
    padding: 24px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  }
`;

export default function UserProfile() {
  const { data, error, isLoading } = useSWR("/api/user");

  if (error) return <p>Failed to load user data</p>;
  if (isLoading) return <p>Loading...</p>;

  const { firstName, lastName, email, linkedin, role, expertise, photo } = data;

  return (
    <ProfileContainer>
      <Image
        src={photo}
        alt={`${firstName} ${lastName}`}
        width={100}
        height={100}
        style={{ borderRadius: "50%" }}
      />
      <p>{firstName}</p>
      <p>{lastName}</p>
      <p>{email}</p>
      <p>{linkedin}</p>
      <p>{role}</p>
      <p>{expertise}</p>
    </ProfileContainer>
  );
}
