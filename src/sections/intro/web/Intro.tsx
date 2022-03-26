import { Box } from "@mui/material";
import React from "react";
import { Header } from "./Header";
import { GetStart } from "./GetStart";
import { Tutorial } from "./Tutorial";
import { LetsGo } from "./LetsGo";
import { AboutUs } from "./AboutUs";
import { Footer } from "./Footer";

export function WebIntro() {
    return (
        <Box>
            <Header />
            <GetStart />
            <Tutorial />
            <LetsGo />
            <AboutUs />
            <Footer />
        </Box>
    );
}
