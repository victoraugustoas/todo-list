import { createTheme, PaletteMode } from "@mui/material";
import createPalette from "@mui/material/styles/createPalette";
import { darken } from "@mui/system";

export const getApplicationTheme = (mode: PaletteMode) => {
  const palette = createPalette({
    primary: { main: "#ADBAEB" },
    mode,
    ...(mode === "dark"
      ? { background: { paper: darken("#FFF", 0.87) } }
      : { background: { default: "#F9FAFF" } }),
  });

  return createTheme({
    palette,
    typography: { fontFamily: ["Montserrat", "open-sans"].join(", ") },
    components: {
      MuiButton: {
        styleOverrides: {
          outlinedPrimary: {
            color: palette.mode === "dark" ? palette.primary.dark : "#020417",
          },
        },
      },
    },
  });
};