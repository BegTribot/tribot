import Toolbar from "@material-ui/core/Toolbar";
import Routes from "../routes/Routes";
import Drawer from "@material-ui/core/Drawer";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: "rgb(54, 57, 63)"
    },
    drawerContainer: {
        overflow: 'auto',
    },
}));

export default function AppSidenav() {
    const classes = useStyles();
    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}>
            <Toolbar/>
            <Routes/>
        </Drawer>
    );
}