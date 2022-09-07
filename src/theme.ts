import { ThemeOptions } from "@mui/material";
import React, { createContext } from "react";

type ThemeColor = "light" | "dark" | "system";

interface ThemeMode {
    mode: ThemeColor;
    setMode: React.Dispatch<React.SetStateAction<"dark" | "light" | "system">>;
}

const theme: ThemeMode = {
    mode: "light",
    setMode: () => { }
};

const ThemeContext = createContext(theme);

// Pass The Default Theme
const defaultTheme: ThemeOptions = {
};

export type { ThemeColor };
export { ThemeContext, defaultTheme };