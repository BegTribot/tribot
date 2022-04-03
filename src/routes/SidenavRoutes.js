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
import guardiansRift from "../static/images/guardians-rift.png";
import vyrewatchSentinels from "../static/images/vyrewatch-sentinels.png";
import cooking from "../static/images/cooking.png";
import coins from "../static/images/coins.png";
import {Link} from "react-router-dom";
import BuildIcon from "@material-ui/icons/Build";

function getPremiumScripts(classes) {
    return [
        {id: 'corporeal-beast', name: 'Corporeal Beast', avatar: corporealBeast, className: classes.corporealBeast, type: 'Premium'},
        {id: 'combat', name: 'Combat', avatar: weaponSlot, className: classes.combat, type: 'Premium'},
        {id: 'poh-planks', name: 'Poh Planks', avatar: demonButler, className: classes.butler, type: 'Premium'},
        {id: 'guardians-rift', name: 'Guardians Rift', avatar: guardiansRift, className: classes.guardiansRift, type: 'Premium'},
        {id: 'vyrewatch-sentinels', name: 'Vyrewatch Sentinels', avatar: vyrewatchSentinels, className: classes.vyrewatchSentinels, type: 'Premium'},
    ]
}

function getFreeScripts(classes) {
    return [
        {id: 'cooking', name: 'Cooking', avatar: cooking, className: classes.cooking, type: 'Free'},
        {id: 'mule', name: 'Mule', avatar: coins, className: classes.mule, type: 'Free'},
        {id: 'utilities', name: 'Utilities', icon: <BuildIcon/>, type: 'Free'},
    ]
}

const useStyles = makeStyles((theme) => ({
    vyrewatchSentinels: {
        width: '30px',
        height: '50px',
        marginLeft: '5px'
    },
    guardiansRift: {
        width: '32px',
        height: '30px',
    },
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
        color: "inherit",
        textDecoration: "inherit"
    },
    text: {
        color: "inherit",
        textDecoration: "inherit"
    }
}));

export default function SidenavRoutes() {
    const classes = useStyles();
    return (
        <List disablePadding>
            {getPremiumScripts(classes).map((script, index) => mapScript(script, index, classes))}
            <Divider/>
            <Divider/>
            <Divider/>
            {getFreeScripts(classes).map((script, index) => mapScript(script, index, classes))}
        </List>
    );
}

function mapScript(script, index, classes) {
    return <>
        <Divider/>
        <Link key={index} to={`/scripts/${script.id}`} className={classes.text}>
            <ListItem button>
                <ListItemIcon>
                    {script.avatar && <Avatar variant="square" src={script.avatar} className={script.className ? script.className : ''}/>}
                    {script.icon && script.icon}
                </ListItemIcon>
                <ListItemText primary={script.name}/>
                <small>{script.type}</small>
            </ListItem>
        </Link>
    </>
}