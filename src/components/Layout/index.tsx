import AddIcon from "@mui/icons-material/Add";
import { Fab, Paper, useTheme } from "@mui/material";
import { Box, BoxProps } from "@mui/system";
import { motion } from "framer-motion";
import { useLayoutContext } from "../../contexts/LayoutContext";
import { DialogAddTask } from "../DialogAddTask";
import { Header } from "../Header";
import { Sidebar } from "../Sidebar";

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
  const { setOpenDialogNewTask, openMenu, heightWithoutLinkBar } =
    useLayoutContext();
  const theme = useTheme();
  const layoutVariant = {
    hidden: { scale: 1, x: 0 },
    visible: { scale: 0.85, x: "70%" },
  };
  const paperVariant = {
    hidden: { borderRadius: 0 },
    visible: { borderRadius: (theme.shape.borderRadius as number) * 8 },
  };
  const sidebarVariant = {
    hidden: { x: "-20vw" },
    visible: { x: 0 },
  };

  return (
    <Box
      {...props}
      sx={{
        ...props.sx,
        backgroundColor: "#020417",
        display: "flex",
        position: "relative",
      }}
    >
      <Box
        component={motion.div}
        variants={sidebarVariant}
        animate={openMenu ? "visible" : "hidden"}
        initial="hidden"
        sx={{ position: "absolute", zIndex: 0, width: "70vw" }}
        transition={{ duration: 1 }}
      >
        <Sidebar />
      </Box>

      <Box
        component={motion.div}
        sx={{ overflow: "hidden", width: "100vw", zIndex: 1 }}
        variants={layoutVariant}
        animate={openMenu ? "visible" : "hidden"}
        initial="hidden"
        transition={{ duration: 1 }}
      >
        <Paper
          sx={{
            backgroundColor: (theme) => theme.palette.background.default,
            minHeight: heightWithoutLinkBar,
          }}
          component={motion.div}
          variants={paperVariant}
          transition={{ duration: 1 }}
        >
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
        </Paper>
      </Box>
    </Box>
  );
};
