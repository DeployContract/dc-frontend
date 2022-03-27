import * as React from "react";
import Container from "@mui/material/Container";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(
    network: string,
    starter: number,
    simple: number,
    standard: number,
    advanced: number,
    unit: string
) {
    return { network, starter, simple, standard, advanced, unit };
}

const rows = [
    createData("Ethereum", 0, 0.001, 0.01, 0.1, "ETH"),
    createData("Smart Chain", 0, 0.01, 0.1, 1, "BNB"),
    createData("Polygon", 0, 1, 10, 100, "MATIC"),
    createData("Test Net", 0, 0, 0, 0, "ETH"),
];

export function Pricing() {
    return (
        <Container
            maxWidth="md"
            sx={{
                padding: 3,
            }}
        >
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: "bold" }}>
                                Network
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{ fontWeight: "bold" }}
                            >
                                Starter ERC20
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{ fontWeight: "bold" }}
                            >
                                Simple ERC20
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{ fontWeight: "bold" }}
                            >
                                Standard ERC20
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{ fontWeight: "bold" }}
                            >
                                Advanced ERC20
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.network}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.network}
                                </TableCell>
                                <TableCell align="center">
                                    {row.starter
                                        ? row.starter + " " + row.unit
                                        : "Free"}
                                </TableCell>
                                <TableCell align="center">
                                    {row.simple
                                        ? row.simple + " " + row.unit
                                        : "Free"}
                                </TableCell>
                                <TableCell align="center">
                                    {row.standard
                                        ? row.standard + " " + row.unit
                                        : "Free"}
                                </TableCell>
                                <TableCell align="center">
                                    {row.advanced
                                        ? row.advanced + " " + row.unit
                                        : "Free"}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
}
