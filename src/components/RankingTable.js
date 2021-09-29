import {CircularProgress} from "@material-ui/core";
import React, {useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCommonHeaders from "./TableCommonHeaders";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import Paper from "@material-ui/core/Paper";
import TableContainer from "@material-ui/core/TableContainer";
import axios from "axios";
import {SERVER} from "../App";
import Loading from "./Loading";
import EmptyData from "./EmptyData";
import Ranking from "../routes/Ranking";

const useStyles = makeStyles((theme) => ({
    tableContainer: {
        marginBottom: '25px'
    },
    table: {
        width: 'calc(100vw - 305px)'
    },
}));

export default function RankingTable({name, id, url, free, disabled=false, header, statsToRows}) {
    const classes = useStyles();

    const [isFetching, setFetching] = React.useState(true);
    const [stats, setStats] = React.useState([]);

    useEffect(() => {
        fetchData()
    }, []);

    const fetchData = () => {
        setFetching(true);
        axios.get(SERVER + url)
            .then(response => {
                setStats(response.data);
                setFetching(false);
            })
            .catch(e => {
                console.log(e);
                setFetching(false);
            });
    };

    return <Ranking name={name} id={id} free={free} disabled={disabled}>
        {isFetching && <Loading/>}
        {!isFetching && stats.length === 0 && <EmptyData/>}
        {!isFetching && stats.length > 0 && <TableContainer component={Paper}  className={classes.tableContainer}>
            <Table aria-label="collapsible table" size="small" className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCommonHeaders/>
                        {header}
                        <TableCell/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {statsToRows(stats)}
                </TableBody>
            </Table>
        </TableContainer>}
    </Ranking>;
}