import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Grid, Typography, Stack, Button } from "@mui/material";
import logo from "../../../assets/svg/logo.svg";
import "./GetStart.css";

function GetStart() {
    return (
        <Box className="GetStart">
            <Container maxWidth="lg" style={{ padding: "50px 10px" }}>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    spacing={1}
                >
                    <Grid
                        item
                        xs={12}
                        md={6}
                        lg={5}
                        style={{ textAlign: "center" }}
                    >
                        <img
                            src={logo}
                            alt="logo"
                            style={{
                                width: "350px",
                                maxWidth: "80%",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={6} lg={7}>
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            spacing={1.5}
                        >
                            <Typography
                                variant="h3"
                                component="h1"
                                sx={{
                                    mr: 2,
                                    display: { xs: "none", lg: "flex" },
                                }}
                            >
                                Deploy Contract to Chain
                            </Typography>
                            <Typography
                                variant="h5"
                                component="h1"
                                sx={{
                                    flexGrow: 1,
                                    display: { xs: "flex", lg: "none" },
                                }}
                            >
                                Deploy Contract to Chain
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                component="div"
                                align="center"
                            >
                                Create contract, deploy on blockchain.
                                <br />
                                ERC20, BEP20 Token Generator.
                            </Typography>
                            <Link to="/app">
                                <Button variant="contained" size="large">
                                    Get Started
                                </Button>
                            </Link>
                            <Typography variant="subtitle1" component="div">
                                <span>or </span>
                                <a href="#Tutorials">Learn More!</a>
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default GetStart;
