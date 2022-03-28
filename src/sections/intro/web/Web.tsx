import { Box, Typography } from "@mui/material";
import React from "react";
import { Header } from "./Header";
import { GetStart } from "./GetStart";
import { Tutorial } from "./Tutorial";
import { Pricing } from "./Pricing";
import { CustomContract } from "./CustomContract";
import { Faq } from "../faq/Faq";
import { RoadMap } from "./RoadMap";
import { Footer } from "./Footer";
import "./Web.css";

function Web() {
    return (
        <Box>
            <Header />
            <GetStart />
            <Box className="section">
                <Tutorial />
            </Box>
            <Box className="section">
                <Typography variant="h3" component="h2" align="center">
                    Pricing
                </Typography>
                <Pricing />
            </Box>
            <Box className="section">
                <CustomContract />
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
                <Footer />
            </Box>
        </Box>
    );
}

export default Web;
