import * as React from "react";
import { Typography, Box, TextField, Stack, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function Deployer() {
    return (
        <Stack spacing={2} sx={{ py: 3 }}>
            <Typography>Deploy your contract Now:</Typography>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Network</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={age}
                    label="Network"
                    // onChange={handleChange}
                >
                    <MenuItem value={10}>Ethereum MainNet</MenuItem>
                    <MenuItem value={20}>Binance Smart CAhin</MenuItem>
                    <MenuItem value={30}>Polygon</MenuItem>
                </Select>
            </FormControl>
            <Typography>Fee: 0.001 ETH + Gas fee</Typography>
            <Button
                variant="contained"
                // onClick=
                sx={{ mt: 1, mr: 1 }}
            >
                Deploy Now
            </Button>
        </Stack>
    );
}

export default Deployer;
