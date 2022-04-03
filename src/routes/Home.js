import React from 'react';
import {makeStyles, withStyles} from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import BuildIcon from '@material-ui/icons/Build';
import CodeIcon from '@material-ui/icons/Code';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";
import {AppBar, Tab, Tabs} from "@material-ui/core";
import {withRouter} from "react-router";

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        marginBottom: '15px'
    },
    content: {
        flexGrow: 1,
        width: 'calc(100vw - 260px)',
        overflow: 'auto',
        marginTop: '64px'
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: '6px 16px',
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
    tabs: {
        backgroundColor: '#454545',
        color: "white"
    }
}));

function CustomizedTimeline() {
    const classes = useStyles();
    return (
        <Timeline align="alternate">
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        Early/Mid 2021
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot>
                        <LaptopMacIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6">Build a scripting framework</Typography>
                        <Typography variant="h7">Main logic, paint, graphical user interface and
                            configurations</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        Mid/late 2021
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary">
                        <CodeIcon/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6">PvM scripts</Typography>
                        <Typography variant="h7">Develop a few PvM scripts</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        2022
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="primary" variant="outlined">
                        <CodeIcon/>
                    </TimelineDot>
                    <TimelineConnector className={classes.secondaryTail}/>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6">Skilling scripts</Typography>
                        <Typography variant="h7">Develop scripts for most if not all skills</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineOppositeContent>
                    <Typography variant="body2" color="textSecondary">
                        2022+
                    </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="secondary">
                        <BuildIcon/>
                    </TimelineDot>
                </TimelineSeparator>
                <TimelineContent>
                    <Paper elevation={3} className={classes.paper}>
                        <Typography variant="h6">Maintenance</Typography>
                        <Typography variant="h7">Complement features, and develop account builder scripts</Typography>
                    </Paper>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const CustomTab = withStyles({
    label: {
        color: "white"
    }
})(Tab);

function Home() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div>
            <main className={classes.content}>
                <Box margin={2}>
                    <Typography variant="h6" gutterBottom>
                        Roadmap
                    </Typography>
                    <CustomizedTimeline/>
                </Box>
                <hr className={"solid"} style={{width: 'calc(100vw - 290px)'}}/>
                <Box margin={2}>
                    <Typography variant="h6" gutterBottom>
                        Scripts
                    </Typography>
                    <AppBar position="static" className={classes.tabs}>
                        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"
                              fullWidth={true}
                              centered
                              TabIndicatorProps={{style: {background: 'darkorange'}}}>
                            <CustomTab label="PvM" {...a11yProps(0)} />
                            <Tab label="Skilling" {...a11yProps(1)} />
                            <Tab label="Minigames" {...a11yProps(2)} />
                            <Tab label="Quests" {...a11yProps(3)} />
                            <Tab label="Money making" {...a11yProps(4)} />
                            <Tab label="Account builder" {...a11yProps(5)} />
                            <Tab label="Tools" {...a11yProps(6)} />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        {[
                            {name: "Corporeal Beast", completed: true},
                            {name: "The Nightmare", completed: false},
                            {name: "Gwd bosses", completed: false},
                            {name: "Wilderness bosses", completed: false},
                            {name: "Vorkath", completed: false}
                        ].map(boss =>
                            <Box margin={3}>
                                <CheckIcon style={{fill: boss.completed ? "lightgreen" : "orangered"}}/> {boss.name}
                            </Box>
                        )}
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        {[
                            {name: "Strength/Attack/Defence/Ranged/Magic/Hitpoints", completed: true},
                            {name: "Prayer", completed: false},
                            {name: "Runecraft", completed: false},
                            {name: "Crafting", completed: false},
                            {name: "Mining", completed: false},
                            {name: "Smithing", completed: false},
                            {name: "Fishing", completed: false},
                            {name: "Cooking", completed: true},
                            {name: "Firemaking", completed: false},
                            {name: "Woodcutting", completed: false},
                            {name: "Agility", completed: false},
                            {name: "Herblore", completed: false},
                            {name: "Thieving", completed: false},
                            {name: "Fletching", completed: false},
                            {name: "Slayer", completed: false},
                            {name: "Farming", completed: false},
                            {name: "Construction", completed: false},
                            {name: "Hunter", completed: false}
                        ].map(skill =>
                            <Box margin={3}>
                                <CheckIcon style={{fill: skill.completed ? "lightgreen" : "orangered"}}/> {skill.name}
                            </Box>
                        )}
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        {[
                            {name: "Guardian of the Rift", completed: true},
                            {name: "The Gauntlet", completed: false},
                            {name: "Barbarian Assault", completed: false},
                            {name: "Warrior Guild", completed: false},
                            {name: "Pest Control", completed: false},
                            {name: "Soul Wars", completed: false},
                            {name: "Tempoross", completed: false}
                        ].map(boss =>
                            <Box margin={3}>
                                <CheckIcon style={{fill: boss.completed ? "lightgreen" : "orangered"}}/> {boss.name}
                            </Box>
                        )}
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Box margin={3}>
                            To be determined
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={4}>
                        {[
                            {name: "Poh planks", completed: true},
                            {name: "Vyrewatch sentinels", completed: true}
                        ].map(skill =>
                            <Box margin={3}>
                                <CheckIcon style={{fill: skill.completed ? "lightgreen" : "orangered"}}/> {skill.name}
                            </Box>
                        )}
                    </TabPanel>
                    <TabPanel value={value} index={5}>
                        <Box margin={3}>
                            To be determined
                        </Box>
                    </TabPanel>
                    <TabPanel value={value} index={6}>
                        {[
                            {name: "Mule", completed: true},
                            {name: "Utilities", completed: true}
                        ].map(utilities =>
                            <Box margin={3}>
                                <CheckIcon style={{fill: utilities.completed ? "lightgreen" : "orangered"}}/> {utilities.name}
                            </Box>
                        )}
                    </TabPanel>
                </Box>
            </main>
        </div>
    );
}

export default withRouter(Home)