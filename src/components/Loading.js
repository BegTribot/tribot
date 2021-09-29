import {CircularProgress} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    progressContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: 'calc(100vw - 305px)',
        marginTop: '50px',
        height: '50px'
    },
    progress: {
        color: 'white'
    },
}));

export default function Loading() {
    const classes = useStyles();
    return <div className={classes.progressContainer}>
        <CircularProgress className={classes.progress}/>
    </div>;
}