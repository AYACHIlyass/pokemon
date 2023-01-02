import {Box} from "@mui/material";
import {Spinner} from "../spinner/Spinner";
import classes from "./FullPageSpinner.module.css";

export const FullPageSpinner = () => {
    return (
        <Box className={classes.overLay}>
            <Box component="div" className={classes.spinnerContainer} >
                <Spinner/>
            </Box>
        </Box>
    );
};