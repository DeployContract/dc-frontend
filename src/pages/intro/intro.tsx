import React from "react";
import { Box, Typography } from "@mui/material";
import Header from "./header";
import GetStart from "./getStart";
import Tutorial from "./tutorial";
import Pricing from "./pricing";
import CustomContract from "./customContract";
import Faq from "./faq";
import RoadMap from "./roadMap";
import Footer from "./footer";
import "./intro.css";

function Intro() {
    return (
         <main>
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
         </main>
    );
}

export default Intro;
