import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Paper,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { useState } from "react";
import { useLayoutContext } from "../../contexts/LayoutContext";

export const DialogAddTask: React.FC = () => {
  const { openDialogNewTask, setOpenDialogNewTask } = useLayoutContext();

  const [newTask, setNewTask] = useState({ description: "" });
  const closeDialog = () => setOpenDialogNewTask(false);

  return (
    <Dialog
      open={openDialogNewTask}
      onClose={closeDialog}
      fullScreen
      TransitionComponent={(props) => {
        return (
          <>
            <Box
              component={motion.div}
              style={{ position: "fixed", bottom: 0, right: 0, zIndex: 1400 }}
              initial={{ transform: "scale3d(0,0,0)" }}
              animate={{
                transform: "scale3d(100, 100,1)",
                transitionEnd: { zIndex: 0 },
              }}
              transition={{ duration: 1 }}
            >
              <Paper
                sx={{ height: "2rem", width: "2rem", borderRadius: "50%" }}
              />
            </Box>
            <Box
              sx={{ height: "100%", width: "100%" }}
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {props.children}
            </Box>
          </>
        );
      }}
    >
      <DialogTitle sx={{ display: "flex", justifyContent: "flex-end" }}>
        <IconButton
          onClick={closeDialog}
          color="primary"
          sx={{ border: (theme) => `1px solid ${theme.palette.primary.main}` }}
        >
          <CloseRoundedIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <TextField
          placeholder="Digite a tarefa"
          variant="standard"
          color="primary"
          value={newTask.description}
          fullWidth
          InputProps={{ disableUnderline: true, sx: { fontSize: "1.8rem" } }}
          onChange={({ target }) =>
            setNewTask((old) => ({ ...old, description: target.value }))
          }
        />
      </DialogContent>
    </Dialog>
  );
};
