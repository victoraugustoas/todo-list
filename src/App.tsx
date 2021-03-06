import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import React from "react";
import { getApplicationTheme } from "./components/Theme";
import { LayoutContextProvider } from "./contexts/LayoutContext";
import { Homepage } from "./pages/home";

export const App: React.FC = () => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = getApplicationTheme(prefersDarkMode ? "dark" : "light");

  return (
    <ThemeProvider theme={theme}>
      <LayoutContextProvider>
        <CssBaseline />

        <Homepage />
      </LayoutContextProvider>
    </ThemeProvider>
  );
};
