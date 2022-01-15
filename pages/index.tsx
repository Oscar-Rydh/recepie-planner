import { Box, IconButton, Container, Typography, Stack } from "@mui/material";
import React from "react";
import { NavBar, NavigationButtons, RecepieCard } from "../components";
import { Refresh } from "@mui/icons-material";

const Index2Page = () => {
  return (
    <Box>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ textAlign: "center", mt: 1 }}>
          <Typography variant="h3" gutterBottom>
            Dagens recept
          </Typography>
        </Box>
        <RecepieCard />
        <IconButton size="large" color="inherit">
          <Refresh fontSize="large" />
        </IconButton>
      </Box>
      <NavigationButtons />
    </Box>
  );
};

export default Index2Page;
