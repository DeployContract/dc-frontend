import React from "react";
import { Link } from "react-router-dom";
import { Box, Container, Grid, Typography, Stack, Button } from "@mui/material";
import logo from "../../../assets/svg/logo.svg";

function GetStart() {
    return (
        <Box className="GetStart">
            <Container maxWidth="lg" style={{ padding: "60px 20px" }}>
                <Grid
                    container
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                >
                    <Grid
                        item
                        xs={12}
                        md={5}
                        lg={5}
                        style={{ textAlign: "center" }}
                    >
                        <img
                            src={logo}
                            alt="logo"
                            style={{
                                padding: "0 5%",
                                margin: 0,
                                width: "90%",
                                maxWidth: "60vw",
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} md={7} lg={7}>
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            spacing={2}
                        >
                            <Typography
                                variant="h3"
                                component="h1"
                                sx={{
                                    display: { xs: "none", lg: "flex" },
                                }}
                            >
                                Deploy Contract to BlockChain
                            </Typography>
                            <Typography
                                variant="h5"
                                component="h1"
                                sx={{
                                    display: { xs: "flex", lg: "none" },
                                }}
                            >
                                Deploy Contract to BlockChain
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                component="div"
                                align="justify"
                                style={{ textAlignLast: "center" }}
                            >
                                No more coding need with Cotoch, a better way to
                                create standard contracts and deploy on
                                blockchain.
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
