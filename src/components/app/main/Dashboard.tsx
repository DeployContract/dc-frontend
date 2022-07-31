import React from "react";
import {
    Box,
    Button,
    Stack,
    Typography,
    Card,
    CardContent,
    Grid,
    CardActions,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    useTheme,
    useMediaQuery,
    Chip,
} from "@mui/material";

interface Project {
    name: string;
    description: string;
}

function Dashboard() {
    const [projects, setProjects] = React.useState<Project[]>([]);
    const [dialogopen, setDialogOpen] = React.useState<boolean>(false);
    const [newProject, setNewProject] = React.useState<Project>({
        name: "",
        description: "",
    });
    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.down("md"));

    const updateProjects = (project: Project) =>
        setProjects((proj) => [...proj, project]);

    const toggleDialog = () => setDialogOpen((open) => !open);

    const handleNewProject = (obj: object) =>
        setNewProject((p) => Object.assign(p, obj));

    return (
        <Box>
            <Stack
                direction="row"
                spacing={2}
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography variant="h5">Dashboard</Typography>
                <Button variant="contained" onClick={toggleDialog}>
                    New project
                </Button>
            </Stack>

            <Grid
                container
                rowSpacing={3}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                sx={{ mt: "20px" }}
            >
                {projects.map((x) => (
                    <Grid item>
                        <Card variant="outlined">
                            <CardContent>
                                <Stack direction="row" spacing={2}>
                                    <Typography variant="h5">
                                        {x.name}
                                    </Typography>

                                    <Chip label="Not Deployed" color="info" />
                                </Stack>
                                <Typography>{x.description}</Typography>
                            </CardContent>
                            <CardActions>
                                <Button>Manage</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            <Dialog
                open={dialogopen}
                onClose={toggleDialog}
                fullScreen={mobileScreen}
            >
                <DialogTitle>Create a new project</DialogTitle>
                <DialogContent>
                    <Stack spacing={3}>
                        <TextField
                            autoFocus
                            id="name"
                            label="Project Name"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(event) =>
                                handleNewProject({ name: event.target.value })
                            }
                        />

                        <TextField
                            id="description"
                            label="Desciption"
                            type="text"
                            fullWidth
                            variant="standard"
                            onChange={(event) =>
                                handleNewProject({
                                    description: event.target.value,
                                })
                            }
                        />
                    </Stack>
                </DialogContent>

                <DialogActions>
                    <Button onClick={toggleDialog} color="error">
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            updateProjects({
                                name: newProject.name,
                                description: newProject.description,
                            });
                            toggleDialog();
                        }}
                    >
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
}

export default Dashboard;
