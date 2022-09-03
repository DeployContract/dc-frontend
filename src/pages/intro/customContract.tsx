import React from "react";
import { Typography, Container } from "@mui/material";
import CustomDevelopment from "./../../assets/svg/custom-development.svg";
import Grid from "@mui/material/Grid";

function CustomContract() {
    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: 3,
            }}
        >
            <Grid
                container
                direction="row-reverse"
                style={{ alignItems: "center" }}
            >
                <Grid item xs={12} md={6} lg={6}>
                    <Typography
                        variant="h3"
                        component="h2"
                        sx={{
                            display: { xs: "none", md: "flex" },
                        }}
                    >
                        Custom Contract
                    </Typography>
                    <Typography
                        variant="h3"
                        component="h2"
                        style={{ justifyContent: "center" }}
                        sx={{
                            display: { xs: "flex", md: "none" },
                        }}
                    >
                        Custom Contract
                    </Typography>
                    <Typography variant="body1" component="p" align="justify">
                        Need custom contract development? contact us on
                        info@example.com, our team will help you.
                    </Typography>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={1}
                    lg={1}
                    style={{ minHeight: 60 }}
                ></Grid>
                <Grid item xs={12} md={5} lg={5} sx={{ textAlign: "center" }}>
                    <img
                        src={CustomDevelopment}
                        alt="Custom Token Development"
                        style={{ maxWidth: 450 }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

export default CustomContract;
