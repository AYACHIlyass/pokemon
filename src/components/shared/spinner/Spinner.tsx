import classes from "./Spinner.module.css"

export const Spinner = () => {
    return <div className={classes.spinnerContainer}>
        <div id="small-spinner" className={classes.spinner5}></div>
    </div>

}