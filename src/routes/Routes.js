import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from "@material-ui/core/Divider";
import {Avatar} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import corporealBeast from "../static/images/corporeal-beast.png";
import weaponSlot from "../static/images/weapon-slot.png";
import demonButler from "../static/images/demon-butler.png";
import cooking from "../static/images/cooking.png";
import coins from "../static/images/coins.png";
import {Link} from "react-router-dom";
import BuildIcon from "@material-ui/icons/Build";

const useStyles = makeStyles((theme) => ({
    butler: {
        width: '32px',
        height: '30px',
    },
    corporealBeast: {
        width: '40px',
        height: '40px',
        marginLeft: '5px'
    },
    cooking: {
        width: '25px',
        height: '28px',
        marginLeft: '3px'
    },
    combat: {
        width: theme.spacing(5),
    },
    mule: {
        width: '30px',
        height: '28px',
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
                    <ListItemIcon>
                        <Avatar variant="square" src={corporealBeast} className={classes.corporealBeast}/>
                    </ListItemIcon>
                    <ListItemText primary="Corporeal Beast"/>
                    <small><small>Premium</small></small>
                </ListItem>
            </Link>
            <Divider/>
            <Link to="/scripts/combat" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                        <Avatar variant="square" src={weaponSlot} className={classes.combat}/>
                    </ListItemIcon>
                    <ListItemText primary="Combat"/>
                    <small><small>Premium</small></small>
                </ListItem>
            </Link>
            <Divider/>
            <Link to="/scripts/poh-planks" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                        <Avatar variant="square" src={demonButler} className={classes.butler}/>
                    </ListItemIcon>
                    <ListItemText primary="Poh Planks"/>
                    <small><small>Premium</small></small>
                </ListItem>
            </Link>
            <Divider/>
            <Link to="/scripts/cooking" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                        <Avatar variant="square" src={cooking} className={classes.cooking}/>
                    </ListItemIcon>
                    <ListItemText primary="Cooking"/>
                    <small><small>Free</small></small>
                </ListItem>
            </Link>
            <Divider/>
            <Link to="/scripts/mule" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                        <Avatar variant="square" src={coins} className={classes.mule}/>
                    </ListItemIcon>
                    <ListItemText primary="Mule"/>
                    <small><small>Free</small></small>
                </ListItem>
            </Link>
            <Divider/>
            <Link to="/scripts/utilities" className={classes.link}>
                <ListItem button>
                    <ListItemIcon>
                        <BuildIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Utilities"/>
                    <small><small>Free</small></small>
                </ListItem>
            </Link>
        </List>
    );
}