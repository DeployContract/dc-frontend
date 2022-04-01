import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button, Container, Stack } from "@mui/material";
import logo from "../../../assets/svg/logo.svg";
import CustomDevelopment from "./../../../assets/svg/custom-development.svg";

const pwaIntroPassed = () => {
    localStorage.setItem("pwaIntroPassed", "true");
};

function Pwa() {
    return (
        <Container maxWidth="sm">
            <Stack
                direction="column"
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
                style={{ minHeight: "calc(100vh - 50px)", padding: "25px 0" }}
            >
                <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={2}
                >
                    <img src={logo} alt="logo" style={{ width: "60px" }} />
                    <Typography variant="h4" component="h1">
                        Cotoch
                    </Typography>
                </Stack>
                <Stack direction="column" alignItems="center" spacing={1}>
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
                    <Typography
                        variant="body1"
                        component="div"
                        align="justify"
                        style={{ textAlignLast: "center" }}
                    >
                        No more coding need with Cotoch, a better way to create
                        standard contracts and deploy on blockchain.
                        <br />
                        ERC20, BEP20 Token Generator.
                    </Typography>
                </Stack>
                <Stack direction="column" alignItems="center" spacing={1}>
                    <Link to="/app">
                        <Button
                            variant="contained"
                            size="large"
                            onClick={pwaIntroPassed}
                        >
                            Get Started
                        </Button>
                    </Link>
                    <Typography variant="subtitle1" component="div">
                        or
                    </Typography>
                    <Link to="/">
                        <Typography variant="subtitle1" component="div">
                            Visit Website
                        </Typography>
                    </Link>
                </Stack>
            </Stack>
        </Container>
    );
}

export default Pwa;
