import * as React from "react";
import { Typography, Box, TextField, Stack } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { render } from "react-dom";

const steps = [
    {
        label: "Select campaign settings",
        subLabel: "campaign settings",
        component: <Test />,
        button: "Continue",
    },
    {
        label: "Create an ad group",
        subLabel: "campaign settings",
        component: <Test />,
        button: "Continue",
    },
    {
        label: "Create an ad",
        subLabel: "settings",
        component: <Test />,
        button: "Go to Token Manager",
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
            <Typography variant="h3" component="h2" sx={{ my: 3 }}>
                Token Generator
            </Typography>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel
                            optional={
                                <Typography variant="caption">
                                    {step.subLabel}
                                </Typography>
                            }
                        >
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            {step.component}
                            <Box sx={{ mb: 2 }}>
                                <div>
                                    <Button
                                        variant="contained"
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
                                </div>
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
        </Box>
    );
}

function Test() {
    return (
        <Stack spacing={3} sx={{ py: 3 }}>
            <Typography>Step1: Lets Go</Typography>
            <TextField
                required
                id="filled-required"
                label="Token Name"
                defaultValue="Test Token"
                variant="outlined"
            />
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
