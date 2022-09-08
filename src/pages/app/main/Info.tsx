import React from "react";
import {
    Stack,
    Typography,
    Card,
    CardContent,
    ToggleButton,
    ToggleButtonGroup,
} from "@mui/material";
import Icon from "../../../components/icon/Icon";
import { ThemeContext } from "../../../theme";

function Info() {
    const { mode, setMode } = React.useContext(ThemeContext);

    const changeTheme = (
        _event: React.MouseEvent<HTMLElement>,
        newMode: "dark" | "light" | "system"
    ) => {
        if (newMode !== null) {
            setMode(newMode);
        }
    };

    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
            <Icon style={{ width: "10rem" }} />
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h3">DeContract</Typography>
                    <Typography variant="h5">Version: 0.0.1</Typography>
                </CardContent>
            </Card>
            <ToggleButtonGroup
                color="primary"
                value={mode}
                exclusive
                onChange={changeTheme}
                aria-label="Platform"
            >
                <ToggleButton value="dark">Dark</ToggleButton>
                <ToggleButton value="system">System</ToggleButton>
                <ToggleButton value="light">Light</ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    );
}

export default Info;
