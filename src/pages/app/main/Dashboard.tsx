import React from "react";
import {
    Box,
    Button,
    Stack,
    Typography,
    Card,
    CardContent,
    Grid,
    CardActions,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    useTheme,
    useMediaQuery,
    Chip,
} from "@mui/material";

interface Project {
    name: string;
    description: string;
}

function Dashboard() {
    const theme = useTheme();

    return (
        <Box>
            <Stack
                direction="row"
                spacing={2}
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography variant="h5">Dashboard</Typography>
                <Button variant="contained">New Token</Button>
            </Stack>
        </Box>
    );
}

export default Dashboard;
