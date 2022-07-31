import { createContext } from "react";
import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "light"
    }
})

const ThemeContext = createContext(theme);

export default ThemeContext;