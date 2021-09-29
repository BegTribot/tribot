import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography";
import {withRouter} from 'react-router';
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

function Utilities() {
    const classes = useStyles();

    return (
        <div>
            <Script name={'Utilities'} id={'3862'} thread={'83824-beg-utilities-free'} free noRanking>
                <Box margin={2}>
                    Contains some utility tasks to interact with my other scripts.
                </Box>
                <Box margin={2}>
                    <Typography variant="h6" gutterBottom>
                        Includes:
                    </Typography>
                </Box>
                <Box margin={2}>
                    <ul>
                        <li>
                            Corporeal Beast private instance host: Keeps open a private instance for the
                            Corporeal Beast.
                        </li>
                        <li>
                            Player-owned-house host: Hosts a player-owned-house.
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

export default withRouter(Utilities)