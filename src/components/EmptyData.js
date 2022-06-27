import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    emptyDataContainer: {
        justifyContent: 'center',
        width: 'calc(100vw - 305px)',
        marginTop: '40px',
        marginLeft: '170px',
        padding: '20px 0 20px 0',
        textAlign: 'center'
    },
}));

export default function EmptyData() {
    const classes = useStyles();
    return <Container className={classes.emptyDataContainer}>
        <Typography d display="block" variant="h5" gutterBottom>
            Unable to load the data... Try to disable Adblock and reload the page
        </Typography>
    </Container>;
}