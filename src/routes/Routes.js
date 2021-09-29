import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider";
import {Avatar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import corporealBeast from "../static/images/corporeal-beast.png";
import demonButler from "../static/images/demon-butler.png";
import coins from "../static/images/coins.png";
import {Link} from "react-router-dom";
import BuildIcon from "@material-ui/icons/Build";

const useStyles = makeStyles((theme) => ({
    butler: {
        width: theme.spacing(2.1),
        marginLeft: '10px'
    },
    corporealBeast: {
        width: theme.spacing(5),
    },
    mule: {
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    link: {
        color: "inherit",
        textDecoration: "inherit"
    }
}));

export default function Routes() {
    const classes = useStyles();
    return (
        <List disablePadding>
            <Divider/>
            <Link to="/scripts/corporeal-beast" className={classes.link}>
                <ListItem button>
                    <ListItemIcon alignItemsFlexStart>
                        <Avatar variant="square" src={corporealBeast} className={classes.corporealBeast}/>
                    </ListItemIcon>
                    <ListItemText primary="Corporeal Beast"/>
                </ListItem>
            </Link>
            <Divider/>
            <Link to="/scripts/poh-planks" className={classes.link}>
                <ListItem button>
                    <ListItemIcon alignItemsFlexStart>
                        <Avatar variant="square" src={demonButler} className={classes.butler}/>
                    </ListItemIcon>
                    <ListItemText primary="Poh Planks"/>
                </ListItem>
            </Link>
            <Divider/>
            <Link to="/scripts/mule" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                        <Avatar variant="square" src={coins} className={classes.mule}/>
                    </ListItemIcon>
                    <ListItemText primary="Mule"/>
                </ListItem>
            </Link>
            <Divider/>
            <Link to="/scripts/utilities" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                        <BuildIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Utilities"/>
                </ListItem>
            </Link>
            <Divider/>
        </List>
    );
}