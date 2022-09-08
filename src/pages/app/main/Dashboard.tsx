import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

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
                <Link to="/app/token/generator">
                    <Button variant="contained">New Token</Button>
                </Link>
            </Stack>
        </Box>
    );
}

export default Dashboard;
