import * as React from "react";
import { Box, Typography, TextField, Stack, Grid } from "@mui/material";

function Details() {
    return (
        <Stack spacing={2} sx={{ py: 3 }} style={{ textAlign: "justify" }}>
            <Typography>
                The ERC-20 introduces a standard for Fungible Tokens, in other
                words, they have a property that makes each Token be exactly the
                same (in type and value) of another Token.
            </Typography>
            <Grid container>
                <Grid item sm={12} md={6}>
                    <Box sx={{ p: 1 }}>
                        <TextField
                            required
                            id="filled-required"
                            label="Token Name"
                            defaultValue="My Test Token"
                            variant="outlined"
                            fullWidth
                        />
                        <Typography variant="caption" sx={{ lineHeight: 1 }}>
                            Choose a name for your token.
                        </Typography>
                    </Box>{" "}
                </Grid>
                <Grid item sm={12} md={6}>
                    <Box sx={{ p: 1 }}>
                        <TextField
                            required
                            id="filled-required"
                            label="Token Symbol"
                            defaultValue="TST"
                            variant="outlined"
                            fullWidth
                        />
                        <Typography variant="caption" sx={{ lineHeight: 1 }}>
                            Choose a symbol for your token (usually 3-5 chars).
                        </Typography>
                    </Box>{" "}
                </Grid>
            </Grid>
            <Grid container>
                <Grid item sm={12} md={6}>
                    <Box sx={{ p: 1 }}>
                        <TextField
                            required
                            id="filled-required"
                            label="Decimals"
                            defaultValue="18"
                            variant="outlined"
                            fullWidth
                        />
                        <Typography variant="caption" sx={{ lineHeight: 1 }}>
                            Insert the decimal precision of your token. If you
                            don't know what to insert, use 18.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item sm={12} md={6}>
                    <Box sx={{ p: 1 }}>
                        <TextField
                            required
                            id="filled-required"
                            label="Total Supply"
                            defaultValue="21000000"
                            variant="outlined"
                            fullWidth
                        />
                        <Typography variant="caption" sx={{ lineHeight: 1 }}>
                            Insert the maximum number of tokens available. By
                            default all tokens Will be put in your account.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Stack>
    );
}

export default Details;
