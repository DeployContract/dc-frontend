import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

function Dashboard() {
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
