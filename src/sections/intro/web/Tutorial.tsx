import React from "react";
import { Typography, Container } from "@mui/material";
import coinsAmico from "./../../../assets/svg/coins-amico.svg";
import Grid from "@mui/material/Grid";

interface TutorListItem {
    icon: string;
    title: string;
    description: string;
    direction: string;
}

const tutorList: Array<TutorListItem> = [
    {
        icon: coinsAmico,
        title: "Minting Tokens",
        description:
            "If a number, it sets the number of columns the grid item uses. It cant be greater than the total number of columns of the container (12 by default). If auto, the grid items width matches its content. If false, the prop is ignored. If true, the grid items width grows to use the space available in the grid container. The value is applied for the md breakpoint and wider screens if not overridden.",
        direction: "row-reverse",
    },
    {
        icon: coinsAmico,
        title: "Burning Tokens",
        description:
            "If a number, it sets the number of columns the grid item uses. It cant be greater than the total number of columns of the container (12 by default). If auto, the grid items width matches its content. If false, the prop is ignored. If true, the grid items width grows to use the space available in the grid container. The value is applied for the md breakpoint and wider screens if not overridden.",
        direction: "row",
    },
    {
        icon: coinsAmico,
        title: "Minting Tokens",
        description:
            "If a number, it sets the number of columns the grid item uses. It cant be greater than the total number of columns of the container (12 by default). If auto, the grid items width matches its content. If false, the prop is ignored. If true, the grid items width grows to use the space available in the grid container. The value is applied for the md breakpoint and wider screens if not overridden.",
        direction: "row",
    },
    {
        icon: coinsAmico,
        title: "Burning Tokens",
        description:
            "If a number, it sets the number of columns the grid item uses. It cant be greater than the total number of columns of the container (12 by default). If auto, the grid items width matches its content. If false, the prop is ignored. If true, the grid items width grows to use the space available in the grid container. The value is applied for the md breakpoint and wider screens if not overridden.",
        direction: "row",
    },
];

export function Tutorial() {
    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: 3,
            }}
        >
            {tutorList.map((item, index) => (
                <Grid
                    container
                    direction={index % 2 ? "row-reverse" : "row"}
                    style={{ alignItems: "center" }}
                    sx={{ mt: 5 }}
                >
                    <Grid
                        item
                        xs={12}
                        md={5}
                        lg={4}
                        sx={{ textAlign: "center" }}
                    >
                        <img
                            src={item.icon}
                            alt="Coins animate"
                            style={{ maxWidth: 300 }}
                        />
                    </Grid>
                    <Grid item xs={12} md={1} lg={2}></Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Typography
                            variant="h4"
                            component="h4"
                            sx={{
                                display: { xs: "none", md: "flex" },
                            }}
                        >
                            {item.title}
                        </Typography>
                        <Typography
                            variant="h4"
                            component="h4"
                            style={{ justifyContent: "center" }}
                            sx={{
                                display: { xs: "flex", md: "none" },
                            }}
                        >
                            {item.title}
                        </Typography>
                        <Typography
                            variant="body1"
                            component="p"
                            align="justify"
                        >
                            {item.description}
                        </Typography>
                    </Grid>
                </Grid>
            ))}
        </Container>
    );
}
