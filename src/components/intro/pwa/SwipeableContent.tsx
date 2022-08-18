import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Stack } from "@mui/material";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import CustomDevelopment from "./../../../assets/svg/custom-development.svg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        label: "Hello1",
        icon: CustomDevelopment,
        content:
            "No more coding need with DeContract, a better way to create standard contracts and deploy on blockchain.",
    },
    {
        label: "Hello2",
        icon: CustomDevelopment,
        content:
            "No more coding need with DeContract, a better way to create standard contracts and deploy on blockchain.",
    },
    {
        label: "Hello3",
        icon: CustomDevelopment,
        content:
            "No more coding need with DeContract, a better way to create standard contracts and deploy on blockchain.",
    },
    {
        label: "Hello4",
        icon: CustomDevelopment,
        content:
            "No more coding need with DeContract, a better way to create standard contracts and deploy on blockchain.",
    },
];

function SwipeableContent() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    return (
        <Stack spacing={1}>
            <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((step, index) => (
                    <div key={step.label}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Stack
                                direction="column"
                                alignItems="center"
                                spacing={1}
                            >
                                <img
                                    src={step.icon}
                                    alt=""
                                    style={{
                                        width: "300px",
                                        maxWidth: "100%",
                                        maxHeight: "40vh",
                                        minHeight: "200px",
                                    }}
                                />
                                <Typography
                                    variant="body1"
                                    component="div"
                                    align="justify"
                                    style={{ textAlignLast: "center" }}
                                >
                                    {step.content}
                                </Typography>
                            </Stack>
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                nextButton={
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                    >
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowLeft />
                        ) : (
                            <KeyboardArrowRight />
                        )}
                    </Button>
                }
                backButton={
                    <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                    >
                        {theme.direction === "rtl" ? (
                            <KeyboardArrowRight />
                        ) : (
                            <KeyboardArrowLeft />
                        )}
                    </Button>
                }
            />
        </Stack>
    );
}

export default SwipeableContent;
