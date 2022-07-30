import { createContext } from "react";
import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "dark"
    }
})

const ThemeContext = createContext(theme);

export default ThemeContext;