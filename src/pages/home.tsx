import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { CardTask } from "../components/cardTask";

const Homepage: React.FC = () => {
  return (
    <Box sx={{ px: 2 }}>
      <Typography>Tarefas de hoje</Typography>

      <CardTask />
    </Box>
  );
};

export { Homepage };
