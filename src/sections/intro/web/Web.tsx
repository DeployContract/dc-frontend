import { Box, Typography } from "@mui/material";
import React from "react";
import { Header } from "./Header";
import { GetStart } from "./GetStart";
import { Tutorial } from "./Tutorial";
import { Faq } from "../faq/Faq";
import { RoadMap } from "./RoadMap";
import { AboutUs } from "./AboutUs";
import { Footer } from "./Footer";
import "./index.css";

export function Web() {
    return (
        <Box>
            <Header />
            <GetStart />
            <Box className="section">
                <Typography variant="h3" component="h2" align="center">
                    Tutorials
                </Typography>
                <Tutorial />
            </Box>
            <Box className="section">
                <Typography variant="h3" component="h2" align="center">
                    Pricing
                </Typography>
            </Box>
            <Box className="section">
                <Typography variant="h3" component="h2" align="center">
                    FAQ
                </Typography>
                <Faq />
            </Box>
            <Box className="section">
                <Typography variant="h3" component="h2" align="center">
                    Road map
                </Typography>
                <RoadMap />
            </Box>
            <Box className="section">
                <Typography variant="h3" component="h2" align="center">
                    Custom development
                </Typography>
            </Box>
            <Box className="section">
                <Typography variant="h3" component="h2" align="center">
                    About us
                </Typography>
                <AboutUs />
            </Box>
            <Box className="section">
                <Footer />
            </Box>
        </Box>
    );
}
