import "../styles/globals.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3b7d47",
    },
    secondary: {
      main: "#bd3f20",
    },
  },
});

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ height: "100vh" }}>
        <Component {...pageProps} />
      </Box>
    </ThemeProvider>
  );
}
