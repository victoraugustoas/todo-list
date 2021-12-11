import { createContext, useContext, useState } from "react";

export interface LayoutContextProps {
  openDialogNewTask: boolean;
  setOpenDialogNewTask: React.Dispatch<React.SetStateAction<boolean>>;
}

const LayoutContext = createContext({} as LayoutContextProps);

export const LayoutContextProvider: React.FC = ({ children }) => {
  const [openDialogNewTask, setOpenDialogNewTask] = useState(true);

  return (
    <LayoutContext.Provider value={{ openDialogNewTask, setOpenDialogNewTask }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayoutContext = () => {
  const context = useContext(LayoutContext);
  if (Object.values(context).length === 0) {
    throw new Error(
      "useLayoutContext não pode ser utilizado fora de um LayoutContextProvider"
    );
  }
  return context;
};
