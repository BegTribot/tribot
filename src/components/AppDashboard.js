import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import {Avatar} from "@material-ui/core";
import avatar from "../static/images/avatar.png";
import discord from "../static/images/discord.png";
import map from "../static/images/world-map.png";
import tribot from "../static/images/tribot.png";
import HtmlTooltip from "./AppTooltip";
import AppRouter from "./AppRouter";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            {'Beg '}
            {new Date().getFullYear()}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        paddingRight: 24, // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        backgroundColor: "rgb(54, 57, 63)",
        boxShadow: "unset"
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    title: {
        flexGrow: 1,
        marginLeft: '30px'
    },
    appBarSpacer: {
        marginTop: '64px'
    },
    content: {
        flexGrow: 1,
        height: 'calc(100vh - 64px)',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        }
    },
    menuIcon: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    menuIconButton: {
        marginLeft: "10px"
    },

}));

export default function AppDashboard() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Avatar alt="Beg" src={avatar}/>
                    <Typography edge="start" component="h1" variant="h6" color="inherit" noWrap
                                className={classes.title}>
                        <Link color="primary" href={process.env.PUBLIC_URL + "/"}>
                            Beg TRiBot scripts
                        </Link>
                    </Typography>
                    <div className={classes.sectionDesktop}>
                        <IconButton
                            edge="end"
                            href="https://begosrs.github.io/osrs-map"
                            target="_blank"
                            color="inherit">
                            <HtmlTooltip
                                title={
                                    <React.Fragment>
                                        Old-school runescape map
                                    </React.Fragment>
                                }
                            >
                                <Avatar alt="Map" src={map} className={classes.menuIcon}/>
                            </HtmlTooltip>
                        </IconButton>
                        <IconButton
                            edge="end"
                            href="https://discord.gg/Ph3TNDf4Y8"
                            target="_blank"
                            color="inherit"
                            className={classes.menuIconButton}>
                            <HtmlTooltip
                                title={
                                    <React.Fragment>
                                        Join my discord server
                                    </React.Fragment>
                                }
                            >
                                <Avatar alt="Discord" src={discord} className={classes.menuIcon}/>
                            </HtmlTooltip>
                        </IconButton>
                        <IconButton
                            edge="end"
                            href="https://community.tribot.org/profile/198168-beg"
                            target="_blank"
                            color="inherit"
                            className={classes.menuIconButton}>
                            <HtmlTooltip
                                title={
                                    <React.Fragment>
                                        Check my TRiBot profile page
                                    </React.Fragment>
                                }>
                                <Avatar alt="Discord" src={tribot} className={classes.menuIcon}/>
                            </HtmlTooltip>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <AppRouter/>
        </div>
    );
}
