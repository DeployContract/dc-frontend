import * as React from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Stack, Container } from "@mui/material";
import Button from "@mui/material/Button";
import Generator from "./Generator";
import Manager from "./Manager";

function Token() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
        alert(newValue);
    };

    return (
        <Container maxWidth="md">
            <Stack
                direction="row"
                justifyContent="center"
                spacing={2}
                sx={{
                    position: "sticky",
                    bottom: 0,
                    borderBottom: 1,
                    borderColor: "divider",
                }}
            >
                <Link to="generator">
                    <Button
                        size="large"
                        sx={{
                            borderRadius: 0,
                            borderBottom: 4,
                        }}
                    >
                        Generator
                    </Button>
                </Link>
                <Link to="manager">
                    <Button
                        size="large"
                        sx={{ borderRadius: 0, borderBottom: 4 }}
                    >
                        Manager
                    </Button>
                </Link>
            </Stack>
            <Routes>
                <Route path="generator" element={<Generator />} />
                <Route path="manager" element={<Manager />} />
            </Routes>
        </Container>
    );
}

export default Token;
