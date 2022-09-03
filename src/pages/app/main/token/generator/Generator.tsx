import * as React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Details from "./Details";
import Deployer from "./Deployer";

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
        label: "Deploy on BlockChain",
        subLabel: "Select Network & Deploy",
        component: <Deployer />,
        button: "Review Source Code",
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

            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <Stack direction="row" alignItems="center" spacing={2}>
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
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>
                        Your token has been successfully deployed on blockchain!
                    </Typography>
                    <Button
                        variant="contained"
                        onClick={handleReset}
                        sx={{ mt: 1, mr: 1 }}
                    >
                        Manage your token
                    </Button>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Deploy another token
                    </Button>
                </Paper>
            )}
        </Box>
    );
}

export default Generator;
