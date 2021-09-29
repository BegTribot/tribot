import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import {withRouter} from 'react-router';
import {Box, GridList, GridListTile} from "@material-ui/core";
import Script from "./Script";
import progress1 from "../static/progress/pohplanksprogress1.png";

const useStyles = makeStyles((theme) => ({
    gridList: {
        flexWrap: 'nowrap',
        width: 'calc(100vw - 340px)',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    }
}));

function PohPlanks() {
    const classes = useStyles();

    return (
        <div>
            <Script name={'Poh Planks'} id={'poh-planks'} thread={'83668-beg-poh-planks-500k-1mh-muling-restocking'}>
                <Box margin={2}>
                    Turns logs into planks at the player-owned house by sending your Demon Butler to the sawmil. Banks
                    at lumbridge or camelot PvP bank chests.
                    Up to 7k planks/hour and 1m gp/hour depending on settings, your connection and prices.
                </Box>
                <Box margin={2}>
                    <Typography variant="h6" gutterBottom>
                        Features:
                    </Typography>
                </Box>
                <Box margin={2}>
                    <ul>
                        <li>
                            Support to all plank types (Regular/Oak/Teak/Mahogany).
                        </li>
                        <li>
                            Support to Lumbridge/Camelot PvP chest banks.
                        </li>
                        <li>
                            Automated muling.
                        </li>
                        <li>
                            Grand exchange restock.
                        </li>
                        <li>
                            Moneybag support.
                        </li>
                        <li>
                            Profit calculator.
                        </li>
                        <li>
                            Death recovery.
                        </li>
                        <li>
                            Mouse movement anticipation for higher efficiency.
                        </li>
                        <li>
                            Anti-pk features such as setting private status to offline, detecting portal miss clicks as
                            quickly as possible and avoid being lured to the risk zones.
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
                    <GridList cellHeight={120} className={classes.gridList} spacing={10} cols={3}>
                        <GridListTile key='progress1'>
                            <img src={progress1} alt={'progress'}/>
                        </GridListTile>
                    </GridList>
                </Box>
            </Script>
        </div>
    );
}

export default withRouter(PohPlanks)