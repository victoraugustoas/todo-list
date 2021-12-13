import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import CategoryIcon from "@mui/icons-material/Category";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  Avatar,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { useLayoutContext } from "../../contexts/LayoutContext";

export const Sidebar: React.FC = () => {
  const name = "Victor Augusto";
  const { setOpenMenu } = useLayoutContext();

  return (
    <Box sx={{ mx: 4, my: 6 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            borderRadius: "50%",
            border: (theme) => `3px solid #9D9AB4`,
            height: "26vw",
            width: "26vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Avatar
            src="https://avatars.githubusercontent.com/u/38368198?v=4"
            sx={{ height: "22vw", width: "22vw" }}
          />
        </Box>

        <IconButton
          onClick={() => setOpenMenu((old) => !old)}
          size="withBorder"
        >
          <ArrowBackIosRoundedIcon sx={{ color: "#fff" }} />
        </IconButton>
      </Box>
      <Typography
        sx={{ color: "#fff", fontSize: "1.8rem", fontWeight: "bold", mt: 4 }}
      >
        {name
          .split(/(\s+)/)
          .slice(0, 3)
          .map((name) => (name === " " ? <br /> : name))}
      </Typography>

      <List
        sx={{
          color: "#fff",
          mt: 2,
          "& .MuiListItemIcon-root": { minWidth: 0, marginRight: 2 },
          "& .MuiListItemButton-root": { pl: 0 },
        }}
      >
        <ListItemButton>
          <ListItemIcon>
            <CategoryIcon sx={{ color: "#9D9AB4" }} />
          </ListItemIcon>
          <ListItemText
            primary="Categorias"
            primaryTypographyProps={{ fontWeight: "medium" }}
          />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <SettingsIcon sx={{ color: "#9D9AB4" }} />
          </ListItemIcon>
          <ListItemText
            primary="Ajustes"
            primaryTypographyProps={{ fontWeight: "medium" }}
          />
        </ListItemButton>
      </List>
    </Box>
  );
};
