import * as React from "react";
import { Box, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface FaqListItem{

    title: string,
    discreption: string,
}

const FaqList: Array<FaqListItem> = [

    {
        title: "Accordion 1",
        discreption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        title: "Accordion 2",
        discreption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        title: "Accordion 3",
        discreption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        title: "Accordion 4",
        discreption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    },
    {
        title: "Accordion 5",
        discreption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
    }
];


function Faq() {
    return (
        <Container
            maxWidth="md"
            sx={{
                padding: 3,
            }}
        >
            {FaqList.map((Item) => (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography> {Item.title} </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        {Item.discreption}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            ))}

        </Container>
    );
}

export default Faq;
