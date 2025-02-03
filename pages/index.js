import { useState } from "react";
import useSWR from "swr";
import { Box, Button, Card, CardContent, Typography } from "@mui/material";
import Filter from "@/components/Filter";

const ProfileCard = ({ user, onSkip, onLike }) => (
  <Card
    sx={{
      width: 343,
      height: 560,
      borderRadius: 2,
      background: `url(${user.photo}) lightgray 50% / cover no-repeat`,
      boxShadow:
        "0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: 2,
      paddingBottom: 9,
      position: "relative",
      overflow: "hidden",
    }}
  >
    <Box
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: "100px",
        background: "linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)",
        borderRadius: "16px",
      }}
    />
    <CardContent
      sx={{ color: "white", paddingBottom: "16px", position: "relative" }}
    >
      <Box mb={2} display="flex" justifyContent="space-between">
        <Box>
          <Typography variant="h5">{`${user.firstName} ${user.lastName}`}</Typography>
          <Typography variant="body2">{`${user.role} at ${user.company}`}</Typography>
        </Box>
        <Typography variant="body2" sx={{ alignSelf: "flex-end" }}>
          {user.city}
        </Typography>
      </Box>
      <Box
        mb={2}
        sx={{
          display: "flex",
          padding: "12px 16px",
          alignItems: "center",
          gap: "16px",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.50)",
          background: "rgba(255, 255, 255, 0.30)",
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "166%",
            letterSpacing: "0.4px",
          }}
        >
          {`Looking for ${user.goal.toLowerCase()}`}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between" mb={2} gap={1}>
        <Button
          variant="contained"
          color="secondary"
          onClick={onSkip}
          style={{
            backgroundColor: "#212121",
            color: "white",
            borderRadius: "32px",
            height: "56px",
            width: "150px",
            display: "flex",
            padding: "15px 22px",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flex: "1 0 0",
          }}
          startIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M19.25 6.41L17.84 5L12.25 10.59L6.66 5L5.25 6.41L10.84 12L5.25 17.59L6.66 19L12.25 13.41L17.84 19L19.25 17.59L13.66 12L19.25 6.41Z"
                fill="white"
              />
            </svg>
          }
        >
          <Typography fontWeight="bold">SKIP</Typography>
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={onLike}
          style={{
            backgroundColor: "white",
            color: "#2525A7",
            borderRadius: "32px",
            height: "56px",
            width: "150px",
            display: "flex",
            padding: "15px 22px",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            flex: "1 0 0",
          }}
          endIcon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
            >
              <path
                d="M12.75 21.175L11.3 19.855C6.15 15.185 2.75 12.105 2.75 8.32501C2.75 5.24501 5.17 2.82501 8.25 2.82501C9.99 2.82501 11.66 3.63501 12.75 4.91501C13.84 3.63501 15.51 2.82501 17.25 2.82501C20.33 2.82501 22.75 5.24501 22.75 8.32501C22.75 12.105 19.35 15.185 14.2 19.865L12.75 21.175Z"
                fill="#2525A7"
              />
            </svg>
          }
        >
          <Typography fontWeight="bold">LIKE</Typography>
        </Button>
      </Box>
    </CardContent>
  </Card>
);

export default function UserProfiles() {
  const [selectedExpertise, setSelectedExpertise] = useState("All");
  const { data, error, isLoading } = useSWR(
    `/api/users?expertise=${encodeURIComponent(selectedExpertise)}`
  );
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredData = data?.filter(
    (user) => user._id !== "677ea475319b1d27d240f8dc"
  );

  const handleSkip = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredData.length);
  };

  const handleLike = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredData.length);
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Filter onExpertiseSelect={setSelectedExpertise} />
      {error ? (
        <p>No relevant profiles found</p>
      ) : isLoading ? (
        <p>Loading...</p>
      ) : filteredData.length === 0 ? (
        <p>No relevant profiles found</p>
      ) : (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          flex={1}
          pb={9}
        >
          <ProfileCard
            user={filteredData[currentIndex]}
            onSkip={handleSkip}
            onLike={handleLike}
          />
        </Box>
      )}
    </Box>
  );
}
