import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import CodeIcon from "@mui/icons-material/Code";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import Typography from "@mui/material/Typography";

function RoadMap() {
    return (
        <Timeline position="alternate">
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    21 March 2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <LightbulbIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span" fontSize= "1.1rem"    >
                        Proposal
                    </Typography>
                    <Typography fontSize= "0.9rem">Contracts for everyone</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    align="right"
                    variant="body2"
                    color="text.secondary"
                >
                    30 March 2022
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary">
                        <LaptopMacIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span" fontSize= "1.1rem">
                        Research
                    </Typography>
                    <Typography fontSize= "0.9rem">First researchs</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: "auto 0" }}
                    variant="body2"
                    color="text.secondary"
                >
                    Now
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="secondary">
                        <CodeIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span" fontSize= "1.1rem">
                        Development
                    </Typography>
                    <Typography fontSize= "0.9rem">We started development!</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">
                        <CurrencyBitcoinIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span" fontSize= "1.1rem">
                        ERC20 Tokens
                    </Typography>
                    <Typography fontSize= "0.9rem">Support of ERC20 standard</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot color="primary" variant="outlined">
                        <MoreHorizIcon />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <Typography variant="h6" component="span" fontSize= "1.1rem" >
                        More!
                    </Typography>
                    <Typography fontSize= "0.9rem">Then we bringing you more</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}

export default RoadMap;
