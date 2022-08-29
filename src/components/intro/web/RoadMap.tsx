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


interface RoadMapList{
    icon: React.ReactElement,
    iconColor: "inherit" | "grey" | "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined,
    iconOutline: "outlined" | "filled" | undefined,
    titr: string,
    discreption: string,
    title: string | null,
}

const MapList: RoadMapList[] = [
    {
        titr: "Proposal",
        icon:  <LightbulbIcon />,
        iconColor: "primary",
        iconOutline: undefined,
        discreption: "Contracts for everyone",
        title: "21 March 2022",
    },
    {
        titr: "Research",
        icon: <LaptopMacIcon />,
        iconColor: "primary",
        iconOutline: undefined,
        discreption: "First researchs",
        title: "30 March 2022", 
    },
    {
        titr: "Development",
        icon: <CodeIcon />,
        iconColor: "secondary",
        iconOutline: undefined,
        discreption: "We started development!",
        title: "Now", 
    },
    {
        titr: "ERC20 Tokens",
        icon: <CurrencyBitcoinIcon />,
        iconColor: "primary",
        iconOutline: "outlined",
        discreption: "Support of ERC20 standard",
        title: null , 
    },
    {
        titr: "More!",
        icon: <MoreHorizIcon />,
        iconColor: "primary",
        iconOutline: "outlined",
        discreption: "Then we bringing you more",
        title: null, 
    },
];

function RoadMap() {
    return (
        <Timeline position="alternate">
            {MapList.map((item) => (
                <TimelineItem>
                    <TimelineOppositeContent
                        sx={{ m: "auto 0" }}
                        align="right"
                        variant="body2"
                        color="text.secondary"
                    >
                        {item.title}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineConnector />
                        <TimelineDot color= {item.iconColor} variant= {item.iconOutline}>
                            {item.icon}
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                        <Typography variant="h6" component="span" fontSize= "1.1rem"    >
                            {item.titr}
                        </Typography>
                        <Typography fontSize= "0.9rem">{item.discreption}</Typography>
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    );
}

export default RoadMap;
