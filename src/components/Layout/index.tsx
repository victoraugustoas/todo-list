import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Box, BoxProps } from "@mui/system";
import { useLayoutContext } from "../../contexts/LayoutContext";
import { DialogAddTask } from "../DialogAddTask";

export interface LayoutProps extends BoxProps {
  showAddTask?: boolean;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  showAddTask,
  ...props
}) => {
  const { setOpenDialogNewTask } = useLayoutContext();

  return (
    <Box {...props} sx={{ px: 2, ...props.sx, position: "relative" }}>
      {children}
      <Box sx={{ position: "fixed", bottom: "2rem", right: "2rem" }}>
        <Fab
          onClick={() => setOpenDialogNewTask(true)}
          color="secondary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </Box>
      <DialogAddTask />
    </Box>
  );
};
