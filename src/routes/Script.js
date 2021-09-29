import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {withRouter} from 'react-router';
import {Breadcrumbs} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        marginBottom: '15px'
    },
    viewRankingButton: {
        position: 'absolute',
        right: '240px',
        top: '73px'
    },
    threadButton: {
        position: 'absolute',
        right: '25px',
        top: '73px'
    },
    content: {
        flexGrow: 1,
    },
    container: {
        marginTop: '64px',
        paddingTop: '10px'
    }
}));

const convertToKebabCase = (string) => {
    return string.replace(/\s+/g, '-').toLowerCase();
}

function Script(props) {
    const {name, free, id, thread, disabled, noRanking, children} = props;
    const classes = useStyles();

    const link = convertToKebabCase(name);

    return (
        <div>
            <main className={classes.content}>
                <Container maxWidth="lg" className={classes.container}>
                    <Breadcrumbs aria-label="breadcrumb" className={classes.title}>
                        <Typography color="textPrimary">{name}</Typography>
                    </Breadcrumbs>
                    <Box margin={2}>
                        {!free &&
                        <Button variant="outlined"
                                href={"https://tribot.org/collections/osrs-scripts/products/beg-" + id}
                                target={"_blank"}
                                disabled={disabled}>
                            Purchase
                        </Button>}
                        {free &&
                        <Button variant="outlined"
                                href={'https://repo.tribot.org/script/id/' + id}
                                target={"_blank"}
                                disabled={disabled}>
                            Activate
                        </Button>}
                    </Box>
                    {(noRanking === undefined || !noRanking) && <Button variant="outlined"
                            className={classes.viewRankingButton}
                            href={process.env.PUBLIC_URL + "/scripts/" + link + "/ranking"}>
                        View ranking
                    </Button>}
                    <Button variant="outlined" className={classes.threadButton}
                            href={'https://community.tribot.org/topic/' + thread}
                            target={"_blank"}
                            disabled={disabled}>
                        View thread on TriBot
                    </Button>
                    {children}
                </Container>
            </main>
        </div>
    );
}

export default withRouter(Script)