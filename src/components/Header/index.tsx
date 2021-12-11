import DragHandleIcon from "@mui/icons-material/DragHandle";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import { useLayoutContext } from "../../contexts/LayoutContext";

export const Header: React.FC = () => {
  const { setOpenMenu } = useLayoutContext();

  return (
    <AppBar elevation={0} color="transparent" position="static">
      <Toolbar variant="dense">
        <IconButton color="primary" onClick={() => setOpenMenu((old) => !old)}>
          <DragHandleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
