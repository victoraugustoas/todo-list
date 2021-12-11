import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Box, BoxProps } from "@mui/system";
import { useLayoutContext } from "../../contexts/LayoutContext";
import { DialogAddTask } from "../DialogAddTask";
import { Header } from "../Header";

export interface LayoutProps extends BoxProps {
  showAddTask?: boolean;
  childrenBoxProps?: BoxProps;
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  showAddTask,
  childrenBoxProps,
  ...props
}) => {
  const { setOpenDialogNewTask } = useLayoutContext();

  return (
    <Box {...props}>
      <Header />
      <Box
        {...childrenBoxProps}
        sx={{ px: 2, ...childrenBoxProps?.sx, position: "relative" }}
      >
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
    </Box>
  );
};
