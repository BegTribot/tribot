import React from 'react';
import {withRouter} from 'react-router';
import TableCell from '@material-ui/core/TableCell';
import {msToString, toKmb} from "../../utils";
import RankingTable from "../../components/RankingTable";
import Row from "../../components/Row";

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
            <TableCell align="left">{toKmb(stat.experience, true, true)}</TableCell>
            <TableCell align="left">{toKmb(stat.levels, true, true)}</TableCell>
            <TableCell align="left">{toKmb(stat.amount, true, true)}</TableCell>
            <TableCell align="left">{toKmb(stat.rawValue, true, true)}</TableCell>
            <TableCell align="left">{toKmb(stat.cookedValue, true, true)}</TableCell>
            <TableCell align="left">{msToString(stat.runtime, false, false)}</TableCell>
        </>
    );

    const statsToRows = (stats: CookingStat[]) => stats.map((stat: CookingStat, index: number) => (
        <Row key={index} rank={index + 1} script={'cooking'} stat={stat} statToRow={statToRow}/>
    ));

    return (
        <RankingTable name={'Cooking'}
                      storeId={'1760'}
                      free
                      headers={headers}
                      dataToRows={statsToRows}/>
    );
}

export default withRouter(CookingRanking)