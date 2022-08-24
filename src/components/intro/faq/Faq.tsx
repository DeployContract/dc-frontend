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
        title: "What is Ethereum?",
        discreption: "There are lots of tokens lost forever into Smart Contracts. Each Ethereum contract is a potential token trap for ERC20 tokens. They can't be recovered so it means money losses for end users. TokenRecover allows the contract owner to recover any ERC20 token sent into the contract for error."
    },
    {
        title: "What is an ERC20 Token?",
        discreption: "ERC-20 tokens are blockchain-based assets. ERC-20 Tokens are Smart Contracts running on the Ethereum blockchain. They can be sent and received like any other crypto. ERC-20 Standard provides specifications on how these assets must be sent, received and stored."
    },
    {
        title: "What is an BEP-20 Token?",
        discreption: "BEP-20 tokens are blockchain-based assets. BEP-20 Tokens are Smart Contracts running on the Binance Smart Chain. They can be sent and received like any other crypto. BEP-20 Standard provides specifications on how these assets must be sent, received and stored."
    },
    {
        title: "Where is my Token address?",
        discreption: "Once you confirm your transaction you will receive transaction hash (first) and Token address (when transaction is confirmed). If your transaction will take some time to be confirmed due to network status, you can monitor it and your Token will be visible in transaction page. Watch the above video tutorial for details."
    },
    {
        title: "Who will be Token Owner?",
        discreption: "Once your Token will be deployed you (your MetaMask address) will be the only owner."
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
                    <Typography sx={{textAlign: "justify", wordSpacing: "-0.05em", fontSize: "90%", hyphens: "auto", }}>
                        {Item.discreption}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            ))}

        </Container>
    );
}

export default Faq;
