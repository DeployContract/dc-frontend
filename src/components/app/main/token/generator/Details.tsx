import * as React from "react";
import { Box, Typography, TextField, Stack } from "@mui/material";

function Details() {
    return (
        <Stack spacing={3} sx={{ py: 3 }}>
            <Typography>
                The ERC-20 introduces a standard for Fungible Tokens, in other
                words, they have a property that makes each Token be exactly the
                same (in type and value) of another Token.
            </Typography>
            <Box>
                <TextField
                    required
                    id="filled-required"
                    label="Token Name"
                    defaultValue="My Test Token"
                    variant="outlined"
                    fullWidth
                />
                <Typography>Choose a name for your token.</Typography>
            </Box>
            <Box>
                <TextField
                    required
                    id="filled-required"
                    label="Token Symbol"
                    defaultValue="TST"
                    variant="outlined"
                    fullWidth
                />
                <Typography>
                    Choose a symbol for your token (usually 3-5 chars).
                </Typography>
            </Box>
            <Box>
                <TextField
                    required
                    id="filled-required"
                    label="Decimals"
                    defaultValue="18"
                    variant="outlined"
                    fullWidth
                />
                <Typography>
                    Insert the decimal precision of your token. If you don't
                    know what to insert, use 18.
                </Typography>
            </Box>
            <Box>
                <TextField
                    required
                    id="filled-required"
                    label="Total Supply"
                    defaultValue="21000000"
                    variant="outlined"
                    fullWidth
                />
                <Typography variant="caption" component="span">
                    Insert the maximum number of tokens available. By default
                    all tokens Will be put in your account.
                </Typography>
            </Box>
        </Stack>
    );
}

export default Details;
