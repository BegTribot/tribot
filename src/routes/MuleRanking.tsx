import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import {msToString, toKmb} from "../Utils";
import RankingTable from "../components/RankingTable";
import Row from "../components/Row";
import {withRouter} from "react-router";

interface MuleStat {
    username: string,
    received: number,
    given: number,
    runtime: number,
}

function MuleRanking() {
    const headers = [
        {id: 'received', label: 'Received'},
        {id: 'given', label: 'Given'},
        {id: 'profit', label: 'Profit'},
        {id: 'runtime', label: 'Runtime'}
    ];

    const statToRow = (stat: MuleStat) => (
        <>
            <TableCell align="left">{toKmb(stat.received, true, true)}</TableCell>
            <TableCell align="left">{toKmb(stat.given, true, true)}</TableCell>
            <TableCell align="left">{toKmb(stat.received - stat.given, true, true)}</TableCell>
            <TableCell align="left">{msToString(stat.runtime, false, false)}</TableCell></>
    );

    const statsToRows = (stats: MuleStat[]) => stats.map((stat: MuleStat, index: number) => (
        <Row key={index} script={'beg mule'} rank={index + 1} stat={stat} statToRow={statToRow}/>
    ));

    return (
        <RankingTable name='Mule'
                      id='3654'
                      url='/scripts/stats/beg mule'
                      free
                      headers={headers}
                      dataToRows={statsToRows}/>
    );
}

export default withRouter(MuleRanking)