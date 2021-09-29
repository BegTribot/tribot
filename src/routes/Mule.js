import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import {withRouter} from 'react-router';
import {Box, GridList, GridListTile} from "@material-ui/core";
import Script from "./Script";
import progress1 from '../static/progress/muleprogress1.png'

const useStyles = makeStyles((theme) => ({
    gridList: {
        flexWrap: 'nowrap',
        width: 'calc(100vw - 340px)',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    }
}));

function Mule() {
    const classes = useStyles();

    return (
        <div>
            <Script name={'Mule'} id={'3654'} thread={'83715-beg-mule-free'} free>
                <Box margin={2}>
                    Totally automated mule to help you secure your profits.
                </Box>
                <Box margin={2}>
                    <Typography variant="h6" gutterBottom>
                        Features:
                    </Typography>
                </Box>
                <Box margin={2}>
                    <ul>
                        <li>
                            Off-game communication through sockets.
                        </li>
                        <li>
                            Idling at login screen unless a mule request is sent from any of your bots.
                        </li>
                        <li>
                            Safe proofing:
                            <ul>
                                <li>
                                    Mule requests expire after around 15 minutes by default.
                                </li>
                                <li>
                                    Trades are cancelled after around 2 minutes by default.
                                </li>
                                <li>
                                    Mule information (name, location, world) is kept up-to-date.
                                </li>
                            </ul>

                        </li>
                        <li>
                            Multiple ways of muling:
                            <ul>
                                <li>
                                    Using time intervals.
                                </li>
                                <li>
                                    Using time schedules.
                                </li>
                                <li>
                                    After every certain profit amount.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Anti-scam mechanisms.
                        </li>
                        <li>
                            Profit calculator based on real-time prices.
                        </li>
                        <li>
                            Banking when a requested item is not on inventory. Active only if the mule is at a bank.
                        </li>
                    </ul>
                </Box>
                <Box margin={2}>
                    <Typography variant="h6" gutterBottom>
                        Demo:
                    </Typography>
                    Soon
                </Box>
                <Box margin={2}>
                    <Typography variant="h6" gutterBottom>
                        Showcases:
                    </Typography>
                    <GridList cellHeight={200} className={classes.gridList} spacing={10} cols={6}>
                        <GridListTile key='progress1'>
                            <img src={progress1} alt={'progress'}/>
                        </GridListTile>
                    </GridList>
                </Box>
            </Script>
        </div>
    );
}

export default withRouter(Mule)