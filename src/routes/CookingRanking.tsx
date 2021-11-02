import React from 'react';
import {withRouter} from 'react-router';
import TableCell from '@material-ui/core/TableCell';
import * as Utils from "../Utils";
import RankingTable from "../components/RankingTable";
import Row from "../components/Row";

interface CookingStat {
    username: string,
    runtime: number,
    experience: number,
    levels: number,
    amount: number,
    rawValue: number,
    cookedValue: number
}

function CookingRanking() {
    const headers = [
        {id: 'experience', label: 'Experience'},
        {id: 'levels', label: 'Levels'},
        {id: 'amount', label: 'Amount'},
        {id: 'rawValue', label: 'Raw value'},
        {id: 'cookedValue', label: 'Cooked value'},
        {id: 'runtime', label: 'Runtime'},
    ];

    const statToRow = (stat: CookingStat) => (
        <>
            <TableCell align="center">{Utils.toKmb(stat.experience, true, true)}</TableCell>
            <TableCell align="center">{Utils.toKmb(stat.levels, true, true)}</TableCell>
            <TableCell align="center">{Utils.toKmb(stat.amount, true, true)}</TableCell>
            <TableCell align="center">{Utils.toKmb(stat.rawValue, true, true)}</TableCell>
            <TableCell align="center">{Utils.toKmb(stat.cookedValue, true, true)}</TableCell>
            <TableCell align="center">{Utils.msToString(stat.runtime)}</TableCell>
        </>
    );

    const statsToRows = (stats: CookingStat[]) => stats.map((stat: CookingStat, index: number) => (
        <Row rank={index + 1} script={'beg cooking'} stat={stat} statToRow={statToRow}/>
    ));

    return (
        <RankingTable name={'Cooking'}
                      id={'1760'}
                      free
                      url='/scripts/stats/beg cooking'
                      headers={headers}
                      dataToRows={statsToRows}/>
    );
}

export default withRouter(CookingRanking)