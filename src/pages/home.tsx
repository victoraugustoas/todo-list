import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { useState } from "react";
import { CardTask } from "../components/cardTask";
import AddIcon from "@mui/icons-material/Add";
import { Layout } from "../components/Layout";

const Homepage: React.FC = () => {
  const [tasks, setTasks] = useState([
    { id: 1, description: "daily meeting with team" },
    { id: 2, description: "daily meeting with team" },
    { id: 3, description: "daily meeting with team" },
    { id: 4, description: "Create the app" },
  ]);

  return (
    <Layout showAddTask >
      <Typography>Tarefas de hoje</Typography>

      <Box
        component={motion.div}
        sx={{ display: "flex", flexDirection: "column" }}
        layout
      >
        {tasks.map((task, idx) => (
          <CardTask
            sx={{ mb: 1 }}
            description={task.description}
            key={task.id}
            color="#DD0CF1"
            onDeleteTask={() => {
              setTasks((old) => {
                let cloned = [...old];
                cloned.splice(idx, 1);
                return cloned;
              });
            }}
          />
        ))}
      </Box>
    </Layout>
  );
};

export { Homepage };
