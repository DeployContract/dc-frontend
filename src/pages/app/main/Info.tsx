import React from "react";
import {
    Stack,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    DialogContentText,
    ToggleButton,
    ToggleButtonGroup,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Icon from "../../../components/icon/Icon";
import ThemeContext from "../../../theme";

function Info() {
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);
    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.down("md"));
    const { mode, setMode } = React.useContext(ThemeContext);

    const unRegister = () =>
        navigator.serviceWorker.getRegistrations().then((res) =>
            res.forEach((registration) => {
                registration.unregister();
            })
        );

    const updateHandler = () => {
        caches.keys().then(async (keys) => {
            for (let name of keys) await caches.delete(name);
        });
    };

    const changeModalOpen = () => setModalOpen(!modalOpen);

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
                <CardActions>
                    <Button size="small" onClick={changeModalOpen}>
                        Update
                    </Button>
                </CardActions>
            </Card>
            <Dialog
                open={modalOpen}
                fullScreen={mobileScreen}
                onClose={changeModalOpen}
            >
                <DialogTitle>App Update</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure ? If yes Reload after upload
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={changeModalOpen}>
                        Back
                    </Button>
                    <Button
                        autoFocus
                        onClick={() => {
                            updateHandler();
                            unRegister();
                        }}
                    >
                        Update
                    </Button>
                </DialogActions>
            </Dialog>
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
