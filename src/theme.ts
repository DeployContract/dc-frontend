import React, { createContext } from "react";

interface ThemeI {
    mode: "light" | "dark";
    setMode: React.Dispatch<React.SetStateAction<"dark" | "light">>;
}

const theme: ThemeI = {
    mode: "light",
    setMode: () => {}
};

const ThemeContext = createContext(theme);

export default ThemeContext;