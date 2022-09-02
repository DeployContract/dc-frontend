import * as React from "react";
import { Typography, Box, TextField, Stack, Grid } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Details from "./Details";
import Deployer from "./Deployer";
import SideNote from "./SideNote";

interface GeneratorStep {
    label: string;
    subLabel?: string;
    component: React.ReactElement;
    button: string;
}

const steps: Array<GeneratorStep> = [
    {
        label: "Token Details",
        subLabel: "ERC20 Standard",
        component: <Details />,
        button: "Continue",
    },
    {
        label: "Preview Code",
        subLabel: "Edit Code or Change Compiler",
        component: <Test />,
        button: "Continue",
    },
    {
        label: "Deploy on BlockChain",
        subLabel: "Select Network & Deploy",
        component: <Deployer />,
        button: "Deploy on BlockChain",
    },
];

function Generator() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box>
            <Typography variant="h4" component="h2" sx={{ my: 3 }}>
                Token Generator
            </Typography>
            <Grid container spacing={3}>
                <Grid item sm={12} md={8}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((step, index) => (
                            <Step key={step.label}>
                                <Stack
                                    direction="row"
                                    alignItems="center"
                                    spacing={2}
                                >
                                    <StepLabel
                                        optional={
                                            step.subLabel ? (
                                                <Typography variant="caption">
                                                    {step.subLabel}
                                                </Typography>
                                            ) : null
                                        }
                                    >
                                        {step.label}
                                    </StepLabel>
                                    {activeStep > index ? (
                                        <Button
                                            size="small"
                                            onClick={() => {
                                                setActiveStep(index);
                                            }}
                                            sx={{ height: 34 }}
                                        >
                                            Edit
                                        </Button>
                                    ) : null}
                                </Stack>
                                <StepContent>
                                    {step.component}
                                    <Box sx={{ mb: 2 }}>
                                        {/* <div> :| */}
                                        <Button
                                            variant="outlined"
                                            onClick={handleNext}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            {step.button}
                                        </Button>
                                        <Button
                                            disabled={index === 0}
                                            onClick={handleBack}
                                            sx={{ mt: 1, mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                        {/* </div> */}
                                    </Box>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} sx={{ p: 3 }}>
                            <Typography>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                Reset
                            </Button>
                        </Paper>
                    )}
                </Grid>
                <Grid item sm={12} md={4}>
                    <SideNote />
                </Grid>
            </Grid>
        </Box>
    );
}

function Test() {
    return (
        <Stack spacing={3} sx={{ py: 3 }}>
            <Typography>
                The ERC-20 introduces a standard for Fungible Tokens, in other
                words, they have a property that makes each Token be exactly the
                same (in type and value) of another Token.
            </Typography>
            <Grid container>
                <Grid item sm={12} md={8}>
                    <TextField
                        required
                        id="filled-required"
                        label="Token Name"
                        defaultValue="Test Token"
                        variant="outlined"
                        fullWidth
                    />
                </Grid>
                <Grid item sm={12} md={4}>
                    Lorem episom fwun fiweun diwend iwejn djiwenjnj nfwjen nfew
                </Grid>
            </Grid>
            <TextField
                required
                id="filled-required"
                label="Token Symbol"
                defaultValue="TST"
                variant="outlined"
            />
            <TextField
                required
                id="filled-required"
                label="Decimals"
                defaultValue="18"
                variant="outlined"
            />
        </Stack>
    );
}

export default Generator;
