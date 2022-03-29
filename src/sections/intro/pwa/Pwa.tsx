import React from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import logo from "../../../assets/svg/logo.svg";
import CustomDevelopment from "./../../../assets/svg/custom-development.svg";

function Pwa() {
    return (
        <Box>
            <Container maxWidth="md">
                <Grid
                    container
                    direction="column"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}
                    style={{ minHeight: "100vh" }}
                    sx={{
                        padding: 3,
                    }}
                >
                    <Grid
                        container
                        item
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2}
                    >
                        <Grid item>
                            <img
                                src={logo}
                                alt="logo"
                                style={{ width: "60px" }}
                            />
                        </Grid>
                        <Grid item>
                            <Typography variant="h4" component="h1">
                                Cotoch
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        direction="column"
                        alignItems="center"
                        spacing={1}
                    >
                        <Grid item>
                            <img
                                src={CustomDevelopment}
                                alt=""
                                style={{
                                    width: "300px",
                                    maxWidth: "100%",
                                    maxHeight: "40vh",
                                    minHeight: "200px",
                                }}
                            />
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                                ERC20, BEP20 Token Generator.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        item
                        direction="column"
                        alignItems="center"
                        spacing={1}
                    >
                        <Grid item>
                            <Link to="/app">
                                <Button variant="contained" size="large">
                                    Get Started
                                </Button>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle1" component="div">
                                or
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Link to="/">
                                <Typography variant="subtitle1" component="div">
                                    Visit Website
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Pwa;
