import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import { Divider, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { useState } from "react";

const CardTask: React.FC = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Paper
      sx={{
        px: 2,
        py: 2,
        display: "flex",
        alignItems: "center",
        borderRadius: (theme) => theme.shape.borderRadius,
      }}
      elevation={0}
      onClick={() => setChecked(!checked)}
    >
      <Box
        component={motion.div}
        sx={{ position: "relative" }}
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      >
        <Box
          sx={{
            height: 24,
            width: 24,
            border: "2px solid #076AFF",
            borderRadius: "50%",
          }}
        />
        {checked && (
          <>
            <Box
              sx={{
                height: 24,
                width: 24,
                borderRadius: "50%",
                backgroundColor: "#076AFF",
                position: "absolute",
                top: 0,
              }}
            />
            <Box
              sx={{
                height: 24,
                width: 24,
                borderRadius: "50%",
                backgroundColor: "#fff",
                position: "absolute",
                top: 0,
              }}
              component={motion.div}
              animate={{ scale: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            />
            <Box
              component={motion.div}
              sx={{
                position: "absolute",
                top: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                height: "100%",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.25, ease: "easeOut", delay: 0.75 }}
            >
              <DoneRoundedIcon sx={{ color: "#fff", fontSize: "1.2rem" }} />
            </Box>
          </>
        )}
      </Box>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          ml: 2,
        }}
      >
        <Typography sx={{ fontWeight: 500 }}>
          Daily meeting with team
        </Typography>
        {checked && (
          <Divider
            sx={{
              position: "absolute",
              backgroundColor: "#000",
              borderWidth: 0.9,
            }}
            component={motion.div}
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        )}
      </Box>
    </Paper>
  );
};

export { CardTask };
