import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import {withRouter} from 'react-router';
import Link from "@material-ui/core/Link";
import {Box} from "@material-ui/core";
import Script from "./Script";

const useStyles = makeStyles((theme) => ({
    gridList: {
        flexWrap: 'nowrap',
        width: 'calc(100vw - 340px)',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    }
}));

function CorporealBeast() {
    const classes = useStyles();

    return (
        <div>
            <Script name={'Corporeal Beast'} id={'corporeal-beast'} thread={'83825-beg-corporeal-beast-beta'}>
                <Box margin={2}>
                    Slay Corporeal Beast without effort.
                </Box>
                <Box margin={2}>
                    <Typography variant="h6" gutterBottom>
                        Features:
                    </Typography>
                </Box>
                <Box margin={2}>
                    <ul>
                        <li>
                            Solo kills.
                        </li>
                        <ul>
                            <li>
                                Dragon warhammer, Arclight and Bandos godsword special attacks to reduce stats.
                            </li>
                            <li>
                                Special attack recharges at own or someone else's player-owned-house.
                            </li>
                        </ul>
                        <li>
                            Team kills.
                            <ul>
                                <li>
                                    Coordinate attacks with multiple bots communicating through sockets.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Private instances support.
                        </li>
                        <li>
                            Totally customizable gear and inventory.
                        </li>
                        <li>
                            Dragon claws and crystal halberd special attacks support for a faster kill.
                        </li>
                        <li>
                            Automated muling with cooperation with my <Link href={'/tribot/scripts/mule'}>Mule
                            script</Link>.
                        </li>
                        <li>
                            Grand Exchange restock.
                        </li>
                        <li>
                            Profit calculator based on real-time prices.
                        </li>
                        <li>
                            Loot tracker.
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
                    None yet.
                    {/*<GridList cellHeight={120} className={classes.gridList} spacing={10} cols={3}>
                        <GridListTile key='progress1'>
                            <img src={progress1} alt={'progress'} />
                        </GridListTile>
                    </GridList>*/}
                </Box>
            </Script>
        </div>
    );
}

export default withRouter(CorporealBeast)