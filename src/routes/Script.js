import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import {withRouter} from 'react-router';
import {Breadcrumbs} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import ScriptDescription from "../components/ScriptDescription";
import ScriptFeatures from "../components/ScriptFeatures";
import Carousel from 'react-multi-carousel';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        marginBottom: '15px'
    },
    viewRankingButton: {
        position: 'absolute',
        right: '210px',
        top: '75px'
    },
    threadButton: {
        position: 'absolute',
        right: '17px',
        top: '75px'
    },
    content: {
        flexGrow: 1,
    },
    container: {
        marginTop: '64px',
        paddingTop: '10px',
        paddingLeft: '16px',
        paddingRight: '16px'
    },
    highlightedButton: {
        border: '1px solid rgb(102, 187, 106)',
    },
    separator: {
        width: 'calc(100vw - 290px)'
    }
}));

const convertToKebabCase = (string) => {
    return string.replace(/\s+/g, '-').toLowerCase();
}

const responsive = {
    allDevices: {
        breakpoint: {max: 100000, min: 0},
        items: 1,
    }
};

function Script(props) {
    const {name, free, id, thread, disabled, noRanking, description, features, demo, executions, children} = props;
    const classes = useStyles();

    const link = convertToKebabCase(name);

    return (
        <div>
            <main className={classes.content}>
                <div className={classes.container}>
                    <Breadcrumbs aria-label="breadcrumb" className={classes.title}>
                        <Typography color="textPrimary">BEG {name}</Typography>
                    </Breadcrumbs>
                    <Box margin={2}>
                        {!free &&
                        <Button variant="outlined"
                                href={"https://tribot.org/collections/osrs-scripts/products/beg-" + id}
                                target={"_blank"}
                                disabled={disabled}
                                className='highlighted-button'>
                            Purchase
                        </Button>}
                        {free &&
                        <Button variant="outlined"
                                href={'https://repo.tribot.org/script/id/' + id}
                                target={"_blank"}
                                disabled={disabled}
                                className='highlighted-button'>
                            Activate
                        </Button>}
                    </Box>
                    {(noRanking === undefined || !noRanking)
                    && <Button variant="outlined"
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
                    <ScriptDescription description={description}>
                    </ScriptDescription>
                    <hr className={"solid " + classes.separator}/>
                    <ScriptFeatures features={features}/>
                    {demo && <Box margin={2}>
                        <Typography variant="h6" gutterBottom>
                            Demo
                        </Typography>
                        <img src={demo} alt="loading..."/>
                    </Box>}
                    {executions && <Box margin={2}>
                        <Carousel
                            ssr
                            swipeable={false}
                            draggable={false}
                            showDots
                            responsive={responsive}
                            autoPlay
                            arrows={false}
                            autoPlaySpeed={5000}
                            transitionDuration={500}
                            containerClass="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile"]}
                        >
                            {executions.map((execution, index) => <img className={'carousel-img'} key={index}
                                                                       src={execution} alt={'loading...'}/>)}
                        </Carousel>
                        {/*<Carousel fullHeightHover={false}>
                            {executions.map((execution, index) => <img key={index} src={execution} alt={'loading...'}/>)}
                        </Carousel>*/}
                    </Box>}
                    {children}
                </div>
            </main>
        </div>
    );
}

export default withRouter(Script)