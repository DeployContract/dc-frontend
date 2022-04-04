import React from "react";
import {
    Stack,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
    CardMedia,
} from "@mui/material";
import Icon from "../../common/Icon";

function Info() {
    return (
        <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
            <Icon style={{ width: "10rem" }} />
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h3">Cotoch</Typography>
                    <Typography variant="h5">Version: 0.0.1</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Update</Button>
                </CardActions>
            </Card>
        </Stack>
    );
}

export default Info;
