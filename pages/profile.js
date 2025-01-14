import useSWR, { mutate } from "swr";
import { useState } from "react";
import Image from "next/image";
import { ProfileContainer } from "@/components/ProfileContainer";
import { StyledButton } from "@/components/StyledButton";
import EditProfileForm from "@/components/EditProfileForm";
import { set } from "mongoose";

export default function UserProfile() {
  const { data, error, isLoading } = useSWR("/api/user");
  const [isEditing, setIsEditing] = useState(false);
  if (error) return <p>Failed to load user data</p>;
  if (isLoading) return <p>Loading...</p>;
  const { _id, firstName, lastName, email, linkedin, role, expertise, photo } =
    data;

  function handleEditClick() {
    setIsEditing(true);
  }

  function handleCancelClick() {
    setIsEditing(false);
  }

  async function handleFormSubmit(updateData) {
    const response = await fetch("/api/user", {
      method: "PUT",
      body: JSON.stringify(updateData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      setIsEditing(false);
      mutate("/api/user");
    } else {
      console.error(`Error: ${response.status}`);
    }
  }

  return (
    <>
      {isEditing ? (
        <EditProfileForm
          onCancel={handleCancelClick}
          defaultData={data}
          onSubmit={handleFormSubmit}
        />
      ) : (
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
          <StyledButton onClick={handleEditClick}>Edit</StyledButton>
        </ProfileContainer>
      )}
    </>
  );
}
