import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Avatar,
  Button,
  Box,
} from "@mui/material";
import useSWR from "swr";
import Filter from "@/components/Filter";
import { useState } from "react";
import { styled } from "@mui/system";
import Image from "next/image";

const RoundtableCard = styled(Card)`
  display: flex;
  width: 343px;
  padding: 20px 16px;
  justify-content: space-between;
  align-items: flex-start;
  border-radius: 16px;
  border: 2px solid rgba(40, 39, 168, 0.12);
  background: linear-gradient(97deg, #2525a7 0%, #4747d7 100%);
`;

const DateText = styled(Typography)`
  color: #c5cae9;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 166%;
  letter-spacing: 0.4px;
`;

const TitleText = styled(Typography)`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.15px;
`;

const JoinButton = styled(Button)`
  display: flex;
  padding: 7px 12px 6px 12px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 32px;
  margin-top: 16px;
  color: white;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: 0.46px;
  text-transform: uppercase;
  border: 1px solid white;
  background: transparent;
`;

const ProfileCard = styled(Card)`
  display: flex;
  width: 343px;
  padding: 20px 16px;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #eee;
  background: transparent;
  border-radius: 0px;
  box-shadow: none;
`;

const ProfileAvatar = styled(Avatar)`
  width: 68px;
  height: 68px;
  margin-right: 12px;
`;

const ProfileInfo = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProfileName = styled(Typography)`
  color: black;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 143%;
  letter-spacing: 0.15px;
`;

const ProfileRole = styled(Typography)`
  color: #616161;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 128.571%;
  letter-spacing: 0.17px;
`;

const ChatButton = styled(Button)`
  display: flex;
  padding: 4px 6px 4px 10px;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: 32px;
  border: 1px solid #eee;
  background: transparent;
  color: black;
  box-shadow: none;
`;

export default function UserProfiles() {
  const [selectedExpertise, setSelectedExpertise] = useState("All");
  const { data, error, isLoading } = useSWR(
    `/api/users?expertise=${encodeURIComponent(selectedExpertise)}`
  );

  return (
    <Container>
      <Filter onExpertiseSelect={setSelectedExpertise} />
      <RoundtableCard>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box>
            <DateText>24 Feb 2025 Berlin</DateText>
            <Box mt={1}>
              <TitleText>
                First Round Table
                <br />
                AI & Data People
              </TitleText>
            </Box>
          </Box>
          <JoinButton
            variant="contained"
            color="primary"
            href="https://luma.com"
          >
            JOIN IN LUMA
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
            >
              <path
                d="M8 1.5C8.33667 4.66379 10.8362 7.16333 14 7.5C10.8362 7.83667 8.33667 10.3362 8 13.5C7.66333 10.3362 5.16379 7.83667 2 7.5C5.16379 7.16333 7.66333 4.66379 8 1.5Z"
                fill="white"
              />
            </svg>
          </JoinButton>
        </Box>
        <Image
          src="/images/roundtable-Illustration.png"
          alt="Roundtable Illustration"
          width={92}
          height={102}
        />
      </RoundtableCard>
      {error ? (
        <Typography>No relevant profiles found</Typography>
      ) : isLoading ? (
        <Typography>Loading...</Typography>
      ) : data.length === 0 ? (
        <Typography>No relevant profiles found</Typography>
      ) : (
        <Grid container spacing={2} sx={{ paddingBottom: "80px" }}>
          {data.map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user._id}>
              <ProfileCard>
                <ProfileAvatar
                  src={user.photo}
                  alt={`${user.firstName} ${user.lastName}`}
                />
                <ProfileInfo>
                  <ProfileName>{`${user.firstName} ${user.lastName}`}</ProfileName>
                  <ProfileRole>{`${user.role} at ${user.company}`}</ProfileRole>
                </ProfileInfo>
                <ChatButton
                  variant="contained"
                  color="primary"
                  href="https://ai-caravan.slack.com"
                >
                  CHAT
                  <Image
                    src="/images/slack_icon.png"
                    alt="Chat Icon"
                    width={12}
                    height={12}
                  />
                </ChatButton>
              </ProfileCard>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
}
