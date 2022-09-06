import React, { createContext } from "react";

interface ThemeI {
    mode: "light" | "dark" | "system";
    setMode: React.Dispatch<React.SetStateAction<"dark" | "light" | "system">>;
}

const theme: ThemeI = {
    mode: "light",
    setMode: () => { }
};

const ThemeContext = createContext(theme);

export default ThemeContext;