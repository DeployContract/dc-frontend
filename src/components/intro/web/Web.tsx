import { Box, Typography } from "@mui/material";
import React from "react";
import Header from "./Header";
import GetStart from "./GetStart";
import Tutorial from "./Tutorial";
import Pricing from "./Pricing";
import CustomContract from "./CustomContract";
import Faq from "../faq/Faq";
import RoadMap from "./RoadMap";
import Footer from "./Footer";
import "./Web.css";

function Web() {
    return (
        <Box>
            <Header />
            <GetStart />
            <Box id="Tutorials" className="section">
                <Tutorial />
            </Box>
            <Box id="Pricing" className="section">
                <Typography variant="h3" component="h2" align="center">
                    Pricing
                </Typography>
                <Pricing />
            </Box>
            <Box id="CustomContract" className="section">
                <CustomContract />
            </Box>
            <Box id="FAQ" className="section">
                <Typography variant="h3" component="h2" align="center">
                    FAQ
                </Typography>
                <Faq />
            </Box>
            <Box id="Roadmap" className="section">
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
