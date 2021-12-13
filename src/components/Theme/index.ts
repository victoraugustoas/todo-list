import { createTheme, PaletteMode } from "@mui/material";
import createPalette from "@mui/material/styles/createPalette";
import { darken } from "@mui/system";

export const getApplicationTheme = (mode: PaletteMode) => {
  const palette = createPalette({
    primary: { main: "#ADBAEB" },
    secondary: { main: "#0767F8" },
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
            color: palette.mode === "dark" ? palette.primary.dark : "#212B55",
          },
        },
      },
      MuiIconButton: {
        variants: [
          {
            props: { size: "withBorder" },
            style: { border: `1px solid ${palette.primary.main}` },
          },
        ],
        styleOverrides: {
          colorPrimary: {
            color: palette.mode === "dark" ? palette.primary.dark : "#212B55",
          },
        },
      },
      MuiCssBaseline: {
        styleOverrides: { "#root": { overflowX: "hidden" } },
      },
    },
  });
};

declare module "@mui/material/IconButton" {
  interface IconButtonPropsSizeOverrides {
    withBorder: true;
  }
}
