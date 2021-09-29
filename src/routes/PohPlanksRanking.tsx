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
    const header = <>
        <TableCell align="center">Planks</TableCell>
        <TableCell align="center">Profit</TableCell>
        <TableCell align="center">Runtime</TableCell>
    </>;

    const statToRow = (stat: PohPlankStat) => (
        <>
            <TableCell align="center">{toKmb(stat.planks, true, true)}</TableCell>
            <TableCell align="center">{toKmb(stat.profit, true, true)}</TableCell>
            <TableCell align="center">{msToString(stat.runtime, false, true)}</TableCell>
        </>
    );

    const statsToRows = (stats: PohPlankStat[]) => stats.map((stat: PohPlankStat, index: number) => (
        <Row script={'beg poh planks'} rank={index + 1} stat={stat} statToRow={statToRow}/>
    ));

    return (
        <RankingTable name='Poh Planks' id='poh-planks' url='/scripts/stats/beg poh planks' free={false}
                      header={header} statsToRows={statsToRows}/>
    );
}
export default withRouter(PohPlanksRanking)