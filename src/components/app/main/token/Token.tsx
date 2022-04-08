import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

function Token() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box>
            <Tabs value={value} onChange={handleChange} centered>
                <Link to="generator">
                    <Tab label="Generator" />
                </Link>
                <Link to="manager">
                    <Tab label="Manager" />
                </Link>
            </Tabs>
            <ButtonGroup
                size="large"
                aria-label="large button group"
                variant="text"
            >
                <Button key="one">Generator</Button>
                <Button key="two">Manager</Button>
            </ButtonGroup>
            <Routes>
                <Route path="generator" element={<h1>Gen</h1>} />
                <Route path="manager" element={<h1>Man</h1>} />
            </Routes>
        </Box>
    );
}

export default Token;
