import {
  createContext,
  useState,
  useMemo,
  type PropsWithChildren,
  useContext,
} from "react";

type MenuContextType = {
  activeMenu: { id: number; label: string };
  setActiveMenu: React.Dispatch<
    React.SetStateAction<{ id: number; label: string }>
  >;
};

const MenuContext = createContext<MenuContextType | undefined>(undefined);

const MenuContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState<{ id: number; label: string }>({
    id: 0,
    label: "",
  });

  const contextValue = useMemo(
    () => ({ activeMenu, setActiveMenu }),
    [activeMenu],
  );

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
};

const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuContextProvider");
  }
  return context;
};

export { MenuContextProvider, useMenuContext };
export default MenuContext;
