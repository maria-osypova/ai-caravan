import React from "react";
import {
  TextField,
  Button,
  MenuItem,
  Grid,
  Typography,
  Box,
} from "@mui/material";

export default function EditProfileForm({ onSubmit, onCancel, defaultData }) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 600, mx: "auto", p: 3, marginBottom: "74px" }}
    >
      <input type="hidden" name="_id" value={defaultData?._id} />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Basic Information</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Photo URL"
            name="photo"
            defaultValue={defaultData?.photo}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            defaultValue={defaultData?.firstName}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            defaultValue={defaultData?.lastName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            defaultValue={defaultData?.email}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Experience</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Role"
            name="role"
            defaultValue={defaultData?.role}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            label="Level"
            name="level"
            defaultValue={defaultData?.level}
          >
            {[
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
            ].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            label="Expertise"
            name="expertise"
            defaultValue={defaultData?.expertise}
          >
            {[
              "AI",
              "Data",
              "Engineering",
              "Business",
              "Product",
              "Marketing",
              "Operations",
              "Investments",
            ].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Company Name"
            name="company"
            defaultValue={defaultData?.company}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6">Additional Information</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="City"
            name="city"
            defaultValue={defaultData?.city}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="LinkedIn"
            name="linkedin"
            defaultValue={defaultData?.linkedin}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            select
            label="Primary Goal"
            name="goal"
            defaultValue={defaultData?.goal}
          >
            {[
              "A new job opportunity",
              "Career growth support and mentorship",
              "Onboarding to local ecosystem",
              "New connections and friends",
              "Finding a co-founder",
              "Seeking investment for startup",
              "Seeking a project to invest in",
              "Hiring talent",
              "Exploring AI & Data",
            ].map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant="contained"
            color="secondary"
            onClick={onCancel}
            style={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "32px",
            }}
          >
            Cancel
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            type="submit"
            style={{
              backgroundColor: "#2525A7",
              color: "white",
              borderRadius: "32px",
            }}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
