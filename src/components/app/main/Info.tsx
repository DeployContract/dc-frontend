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
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import Icon from "../../common/Icon";

function Info() {
    const [modalOpen, setModalOpen] = React.useState<boolean>(false);
    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.down("md"));

    const unRegister = () =>
        navigator.serviceWorker.getRegistrations().then((res) =>
            res.forEach((registration) => {
                registration.unregister();
            })
        );

    const updateHandler = () => {
        caches.keys().then((keys) => {
            for (let name of keys) caches.delete(name);
        });
    };

    const changeModalOpen = () => setModalOpen(!modalOpen);

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
        </Stack>
    );
}

export default Info;
