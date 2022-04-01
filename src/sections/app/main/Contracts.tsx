import React from "react";
import { Box, IconButton, Tooltip, Stack, Button } from "@mui/material";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

interface ProjectsProps extends GridRowsProp {
    /**
     * Id of project
     */
    id: number;

    /**
     * Name of project
     */
    name: string;

    /**
     * version of project
     */
    version: string;
}

const columns: GridColDef[] = [
    { field: "id", hide: true },
    { field: "name", headerName: "Name", width: 150 },
    { field: "version", headerName: "Version", width: 80 },
];

function Contracts() {
    const [rows, setRows] = React.useState<ProjectsProps[]>([]);

    const addRow = () =>
        setRows([
            ...rows,
            {
                id: rows.length + 1,
                name: "Example",
                version: "0.0.1",
            } as ProjectsProps,
        ]);

    const toolBarElements = [
        <Tooltip title="Create Contract">
            <IconButton onClick={addRow}>
                <AddIcon />
            </IconButton>
        </Tooltip>,
        <Tooltip title="Manage Contract">
            <IconButton>
                <SettingsIcon />
            </IconButton>
        </Tooltip>,
        <Tooltip title="Delete Contract">
            <IconButton>
                <DeleteIcon sx={{ color: "red" }} />
            </IconButton>
        </Tooltip>,
    ];

    const Toolbar = () => (
        <Stack direction="row" sx={{ margin: "10px" }}>
            {toolBarElements.map((element) => element)}
        </Stack>
    );

    return (
        <Box sx={{ height: 500, width: "100%" }}>
            <DataGrid
                components={{
                    Toolbar: Toolbar,
                }}
                rows={rows}
                columns={columns}
            />
        </Box>
    );
}

export default Contracts;
