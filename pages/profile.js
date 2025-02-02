import useSWR, { mutate } from "swr";
import { useState } from "react";
import Image from "next/image";
import EditProfileForm from "@/components/EditProfileForm";
import { Button, Container, Grid, Typography, Box } from "@mui/material";

export default function UserProfile() {
  const { data, error, isLoading } = useSWR("/api/user");
  const [isEditing, setIsEditing] = useState(false);
  if (error) return <p>Failed to load user data</p>;
  if (isLoading) return <p>Loading...</p>;
  const {
    _id,
    firstName,
    lastName,
    email,
    linkedin,
    role,
    expertise,
    photo,
    level,
    company,
    city,
    goal,
    unemployed,
  } = data;

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
        <Container maxWidth="md">
          <Box sx={{ my: 4 }}>
            <Typography variant="h4" gutterBottom>
              Profile
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Image
                  src={photo || "/images/default-avatar.jpg"}
                  alt="Profile Photo"
                  width={95}
                  height={92}
                  style={{
                    borderRadius: "24px",
                  }}
                />
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">{firstName}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body1">{lastName}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">{email}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">Experience</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>Role:</strong> {role}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>Level:</strong> {level}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>Expertise:</strong> {expertise}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>Company Name:</strong> {company}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="h6">Additional Information</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>City:</strong> {city}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>LinkedIn:</strong> {linkedin}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1">
                  <strong>Primary Goal:</strong> {goal}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "#2525A7",
                    color: "white",
                    borderRadius: "32px",
                    marginBottom: "74px",
                  }}
                  onClick={handleEditClick}
                >
                  EDIT
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
      )}
    </>
  );
}
