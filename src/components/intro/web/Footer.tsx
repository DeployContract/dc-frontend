import { Typography, Container } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

interface LinkListIteme {
    title: string;
    childs: {
        title: string;
        link: string;
    }[];
}

const UsefullinksItem: LinkListIteme[] = [
    {
        title: "UseLink",
        childs: [
            {
                title: "Illustrations by Storyset",
                link: "https://storyset.com",
            },
            {
                title: "MUI",
                link: "https://MUI.com",
            },
        ],
    },
    {
        title: "Sopport",
        childs: [
            {
                title: "Decontract Sopport",
                link: "https://Sopport.com",
            },
            {
                title: "Call OffiC",
                link: "https://Sopport.com",
            },
        ],
    },
    {
        title: "Partners",
        childs: [
            {
                title: "Decontract.Eth",
                link: "https://Decontract.Eth.link",
            },
            {
                title: "Decontract.Com",
                link: "https://Decontract.com",
            },
        ],
    },
    {
        title: "Links",
        childs: [
            {
                title: "Decontract.Eth",
                link: "https://Decontract.Eth.link",
            },
            {
                title: "Decontract.Com",
                link: "https://Decontract.com",
            },
        ],
    },
];

function Footer() {
    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: 3,
            }}
        >
            <Grid container spacing={2}>
                {UsefullinksItem.map((item) => (
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            sx={{ mt: 4, mb: 2 }}
                            variant="h6"
                            component="div"
                        >
                            {item.title}
                        </Typography>
                        <List dense={true}>
                            {item.childs.map((item) => (
                                <ListItem>
                                    <Link
                                        href={item.link}
                                        color="inherit"
                                        sx={{
                                            textDecoration: "none",
                                            "&:hover": {
                                                textDecoration: "underline",
                                            },
                                        }}
                                    >
                                        {item.title}
                                    </Link>
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

export default Footer;
