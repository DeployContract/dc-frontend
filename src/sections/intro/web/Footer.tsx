import React from "react";
import { Typography, Container } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";

export function Footer() {
    return (
        <Container
            maxWidth="lg"
            sx={{
                padding: 3,
            }}
        >
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography
                        sx={{ mt: 4, mb: 2 }}
                        variant="h6"
                        component="div"
                    >
                        Useful links
                    </Typography>
                    <List dense={true}>
                        <ListItem>
                            <Link href="https://storyset.com" color="inherit">
                                Illustrations by Storyset
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://storyset.com" color="inherit">
                                Illustrations by
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://storyset.com" color="inherit">
                                Illustrations by Storyset
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://storyset.com" color="inherit">
                                Illustrations by Storyset
                            </Link>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography
                        sx={{ mt: 4, mb: 2 }}
                        variant="h6"
                        component="div"
                    >
                        Partners
                    </Typography>
                    <List dense={true}>
                        <ListItem>
                            <Link href="https://storyset.com" color="inherit">
                                Illustrations by Storyset
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://storyset.com" color="inherit">
                                Illustrations by Storyset
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://storyset.com" color="inherit">
                                Illustrations by Storyset
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://storyset.com" color="inherit">
                                Illustrations by Storyset
                            </Link>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography
                        sx={{ mt: 4, mb: 2 }}
                        variant="h6"
                        component="div"
                    >
                        Partners
                    </Typography>
                    <List dense={true}>
                        <ListItem>
                            <Link href="https://storyset.com" color="inherit">
                                Illustrations by Storyset
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://storyset.com" color="inherit">
                                Illustrations by Storyset
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://storyset.com" color="inherit">
                                Illustrations by Storyset
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://storyset.com" color="inherit">
                                Illustrations by Storyset
                            </Link>
                        </ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Typography
                        sx={{ mt: 4, mb: 2 }}
                        variant="h6"
                        component="div"
                    >
                        Partners
                    </Typography>
                    <List dense={true}>
                        <ListItem>
                            <Link href="https://storyset.com" color="inherit">
                                Illustrations by Storyset
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://storyset.com" color="inherit">
                                Illustrations by Storyset
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://storyset.com" color="inherit">
                                Illustrations by Storyset
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://storyset.com" color="inherit">
                                Illustrations by Storyset
                            </Link>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
        </Container>
    );
}
