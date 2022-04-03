import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {withRouter} from 'react-router';
import Link from "@material-ui/core/Link";
import {Breadcrumbs} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import Button from "@material-ui/core/Button";
import {convertToKebabCase} from "../utils";

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        marginBottom: '25px'
    },
    content: {
        flexGrow: 1,
        overflow: 'auto',
    },
    container: {
        marginTop: '64px',
        paddingTop: '10px',
        paddingLeft: '16px',
        paddingRight: '16px'
    },
    button: {
        position: 'absolute',
        right: '17px',
        top: '75px'
    }
}));

function Ranking(props) {
    const {name, free, storeId, disabled, children} = props;
    const classes = useStyles();

    const link = convertToKebabCase(name);

    return (
        <div>
            <main className={classes.content}>
                <div className={classes.container}>
                    <Breadcrumbs aria-label="breadcrumb" className={classes.title}>
                        <Link color="inherit" href={"/tribot/scripts/" + link}>
                            {name}
                        </Link>
                        <Typography color="textPrimary">Ranking</Typography>
                    </Breadcrumbs>
                    {!free &&
                    <Button variant="outlined" className={classes.button + ' highlighted-button'}
                            href={"https://tribot.org/collections/osrs-scripts/products/beg-" + storeId}
                            target={"_blank"}
                            disabled={disabled}>
                        Purchase
                    </Button>}
                    {free &&
                    <Button variant="outlined" className={classes.button + ' highlighted-button'}
                            href={'https://repo.tribot.org/script/id/' + storeId}
                            target={"_blank"}
                            disabled={disabled}
                            color="success">
                        Activate
                    </Button>}
                    {children}
                </div>
            </main>
        </div>
    );
}

export default withRouter(Ranking)