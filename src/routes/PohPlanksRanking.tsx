import React from 'react';
import {withRouter} from 'react-router';
import TableCell from '@material-ui/core/TableCell';
import {msToString, toKmb} from "../Utils";
import RankingTable from "../components/RankingTable";
import Row from "../components/Row";

interface PohPlankStat {
    username: string,
    planks: number,
    profit: number,
    runtime: number,
}

function PohPlanksRanking() {
    const headers = [
        {id: 'planks', label: 'Planks'},
        {id: 'profit', label: 'Profit'},
        {id: 'runtime', label: 'Runtime'},
    ];

    const statToRow = (stat: PohPlankStat) => (
        <>
            <TableCell align="left">{toKmb(stat.planks, true, true)}</TableCell>
            <TableCell align="left">{toKmb(stat.profit, true, true)}</TableCell>
            <TableCell align="left">{msToString(stat.runtime, false, true)}</TableCell>
        </>
    );

    const statsToRows = (stats: PohPlankStat[]) => stats.map((stat: PohPlankStat, index: number) => (
        <Row script={'beg poh planks'} rank={index + 1} stat={stat} statToRow={statToRow}/>
    ));

    return (
        <RankingTable name='Poh Planks'
                      id='poh-planks'
                      url='/scripts/stats/beg poh planks'
                      headers={headers}
                      dataToRows={statsToRows}/>
    );
}

export default withRouter(PohPlanksRanking)