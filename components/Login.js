import { useSession, signIn, signOut } from "next-auth/react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Login() {
  const { data: session } = useSession();

  if (session) {
    return (
      <Box>
        <Typography variant="body1">
          Signed in as {session.user.email}
        </Typography>
        <Button variant="contained" color="primary" onClick={() => signOut()}>
          Sign out
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="body1">Not signed in</Typography>
      <Button variant="contained" color="primary" onClick={() => signIn()}>
        Sign in
      </Button>
    </Box>
  );
}
