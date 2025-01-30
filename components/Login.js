import { useSession, signIn } from "next-auth/react";
import { Box, Button, Typography, Link } from "@mui/material";

export default function Login() {
  const { data: session } = useSession();

  return (
    <Box
      sx={{
        display: "flex",
        width: "343px",
        padding: "32px 24px",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: "10px",
        backgroundColor: "white",
        borderRadius: "16px",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: "black",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "133.4%",
        }}
      >
        Log In
      </Typography>
      <Typography variant="body1">
        Don’t have an account? <Link href="/guest/onboarding">Sign Up</Link>
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={() => signIn("github")}
        sx={{
          borderRadius: "9999px",
          width: "100%",
          border: "2px solid #E2E8F0",
          backgroundColor: "#FFF",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginTop: "16px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clipPath="url(#clip0_8773_1357)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.9642 0C5.34833 0 0 5.5 0 12.3042C0 17.7432 3.42686 22.3472 8.18082 23.9767C8.77518 24.0992 8.9929 23.712 8.9929 23.3862C8.9929 23.101 8.97331 22.1232 8.97331 21.1045C5.64514 21.838 4.95208 19.6378 4.95208 19.6378C4.41722 18.2118 3.62473 17.8452 3.62473 17.8452C2.53543 17.0915 3.70408 17.0915 3.70408 17.0915C4.91241 17.173 5.54645 18.3545 5.54645 18.3545C6.61592 20.2285 8.33926 19.699 9.03257 19.373C9.13151 18.5785 9.44865 18.0285 9.78539 17.723C7.13094 17.4377 4.33812 16.3785 4.33812 11.6523C4.33812 10.3078 4.81322 9.20775 5.56604 8.35225C5.44727 8.04675 5.03118 6.7835 5.68506 5.09275C5.68506 5.09275 6.69527 4.76675 8.97306 6.35575C9.94827 6.08642 10.954 5.9494 11.9642 5.94825C12.9744 5.94825 14.0042 6.091 14.9552 6.35575C17.2332 4.76675 18.2434 5.09275 18.2434 5.09275C18.8973 6.7835 18.481 8.04675 18.3622 8.35225C19.1349 9.20775 19.5904 10.3078 19.5904 11.6523C19.5904 16.3785 16.7976 17.4172 14.1233 17.723C14.5592 18.11 14.9353 18.8433 14.9353 20.0045C14.9353 21.6545 14.9158 22.9788 14.9158 23.386C14.9158 23.712 15.1337 24.0992 15.7278 23.977C20.4818 22.347 23.9087 17.7432 23.9087 12.3042C23.9282 5.5 18.5603 0 11.9642 0Z"
              fill="#24292F"
            />
          </g>
          <defs>
            <clipPath id="clip0_8773_1357">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <Typography variant="button" sx={{ color: "#000" }}>
          Login with GitHub
        </Typography>
      </Button>
    </Box>
  );
}
