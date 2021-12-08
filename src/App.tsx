import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Homepage } from "./pages/home";

export const App: React.FC = () => {
  return (
    <ThemeProvider
      theme={createTheme({
        palette: {
          background: { default: "#F9FAFF" },
        },
        typography: {
          fontFamily: ["Montserrat", "open-sans"].join(", "),
        },
      })}
    >
      <CssBaseline />

      <Homepage />
    </ThemeProvider>
  );
};
