import { createContext, useContext, useState } from "react";
import { useHeight } from "../hooks/height";

export interface LayoutContextProps {
  heightWithoutLinkBar: number;
  openDialogNewTask: boolean;
  openMenu: boolean;
  setOpenDialogNewTask: React.Dispatch<React.SetStateAction<boolean>>;
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const LayoutContext = createContext({} as LayoutContextProps);

export const LayoutContextProvider: React.FC = ({ children }) => {
  const height = useHeight();

  const [openDialogNewTask, setOpenDialogNewTask] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <LayoutContext.Provider
      value={{
        openDialogNewTask,
        openMenu,
        heightWithoutLinkBar: height,
        setOpenDialogNewTask,
        setOpenMenu,
      }}
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
