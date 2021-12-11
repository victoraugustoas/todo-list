import DeleteIcon from "@mui/icons-material/Delete";
import DoneRoundedIcon from "@mui/icons-material/DoneRounded";
import { Button, Divider, Paper, Typography, useTheme } from "@mui/material";
import { Box, BoxProps } from "@mui/system";
import { ForwardRefComponent, HTMLMotionProps, motion } from "framer-motion";
import { useEffect, useState } from "react";

export interface CardTaskProps
  extends BoxProps<
    ForwardRefComponent<HTMLDivElement, HTMLMotionProps<"div">>
  > {
  onDeleteTask: () => void;
  description: string;
  color: string;
}

const CardTask: React.FC<CardTaskProps> = ({
  onDeleteTask,
  description,
  color,
  ...props
}) => {
  const [checked, setChecked] = useState(false);
  const [wantRemove, setWantRemove] = useState(false);
  const [remove, setRemove] = useState(false);
  const theme = useTheme();

  useEffect(() => {
    const timeoutToRemove = setTimeout(() => {
      if (wantRemove) {
        setRemove(true);
        onDeleteTask();
      }
    }, 2500);

    return () => {
      clearTimeout(timeoutToRemove);
    };
  }, [onDeleteTask, wantRemove]);

  return (
    <Box
      {...props}
      sx={{
        ...props.sx,
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
      component={motion.div}
      layout
      animate={remove ? { opacity: 0 } : { opacity: 1 }}
    >
      <Paper
        sx={{
          px: 2,
          py: 2,
          display: "flex",
          alignItems: "center",
          borderRadius: (theme) => theme.shape.borderRadius,
          flex: 1,
        }}
        elevation={0}
        component={motion.div}
        drag="x"
        onDrag={(event: any, info: { offset: { x: number } }) => {
          if (info.offset.x <= -50) {
            setWantRemove(true);
          }
        }}
        animate={
          wantRemove
            ? {
                opacity: 0,
                x: -50,
                transitionEnd: { zIndex: 1 },
              }
            : {
                opacity: 1,
                x: 0,
                transitionEnd: { zIndex: 10 },
              }
        }
        dragConstraints={{ right: 0, left: -120 }}
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
              border: `2px solid ${color}`,
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
                  backgroundColor: color,
                  position: "absolute",
                  top: 0,
                }}
              />
              <Box
                sx={{
                  height: 24,
                  width: 24,
                  borderRadius: "50%",
                  backgroundColor: theme.palette.getContrastText(color),
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
            justifyContent: "center",
            ml: 3,
          }}
        >
          <Typography sx={{ fontWeight: 500 }}>{description}</Typography>
          {checked && (
            <Divider
              sx={{
                position: "absolute",
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#fff" : "#000",
                borderWidth: 0.9,
              }}
              component={motion.div}
              initial={{ width: "0%" }}
              animate={{ width: "calc(100% + 1rem)" }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          )}
        </Box>
      </Paper>
      <Box
        sx={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
        }}
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={
          wantRemove
            ? {
                opacity: 1,
                transitionEnd: { zIndex: 10 },
              }
            : {
                opacity: 0,
                transitionEnd: { zIndex: 1 },
              }
        }
      >
        <Box
          sx={{
            display: "flex",
            color: (theme) =>
              theme.palette.mode === "light"
                ? "#9D9AB4"
                : theme.palette.primary.dark,
            alignItems: "center",
          }}
        >
          <DeleteIcon sx={{ mr: 2 }} />
          <Typography sx={{ fontWeight: 500 }}>A tarefa foi apagada</Typography>
        </Box>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => setWantRemove(false)}
          sx={{
            borderRadius: (theme) => theme.shape.borderRadius,
            fontWeight: 600,
          }}
        >
          desfazer
        </Button>
      </Box>
    </Box>
  );
};

export { CardTask };
