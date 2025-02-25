import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface SettingsContextType {
  darkMode: boolean;
  setDarkMode: Dispatch<SetStateAction<boolean>>;
}

// Create the context with a default value
const SettingsContext = createContext<SettingsContextType | undefined>(undefined);

interface SettingsContextProviderProps {
  children: ReactNode;
}

const SettingsContextProvider: React.FC<SettingsContextProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <SettingsContext.Provider
      value={{
        darkMode, setDarkMode
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsContextProvider };
