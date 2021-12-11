import { createContext, useContext, useState } from "react";

export interface LayoutContextProps {
  openDialogNewTask: boolean;
  openMenu: boolean;
  setOpenDialogNewTask: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const LayoutContext = createContext({} as LayoutContextProps);

export const LayoutContextProvider: React.FC = ({ children }) => {
  const [openDialogNewTask, setOpenDialogNewTask] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <LayoutContext.Provider
      value={{ openDialogNewTask, openMenu, setOpenDialogNewTask, setOpenMenu }}
    >
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
