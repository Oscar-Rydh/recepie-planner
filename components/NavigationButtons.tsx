import { Stack, Container } from "@mui/material";
import { NavigationButton } from ".";

export const NavigationButtons = () => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        bottom: "10%",
      }}
    >
      <Stack direction="row" spacing={2}>
        <NavigationButton />
        <NavigationButton />
        <NavigationButton />
      </Stack>
    </Container>
  );
};
