import React from 'react';
import {withRouter} from 'react-router';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import * as Utils from "../Utils";
import RankingTable from "../components/RankingTable";
import Row from "../components/Row";
import BorderlessTableCell from "../components/BorderlessTableCell";

interface CorporealBeastStat {
    username: string,
    lootValue: number,
    suppliesValue: number,
    kills: number,
    runtime: number,
    uniques: Unique[]
}

interface Unique {
    item: string,
    quantity: number,
    value: number
}

function CorporealBeastRanking() {
    const headers = [
        {id: 'kills', label: 'Kills'},
        {id: 'loot', label: 'Loot'},
        {id: 'profit', label: 'Profit'},
        {id: 'runtime', label: 'Runtime'}
    ];

    const statToRow = (stat: CorporealBeastStat) => (
        <>
            <TableCell align="center">{Utils.toKmb(stat.kills, true, true)}</TableCell>
            <TableCell align="center">{Utils.toKmb(stat.lootValue, true, true)}</TableCell>
            <TableCell align="center">{Utils.toKmb(stat.lootValue - stat.suppliesValue, true, true)}</TableCell>
            <TableCell align="center">{Utils.msToString(stat.runtime)}</TableCell>
        </>
    );

    const subHeaders = <>
        <TableCell align="center">Item</TableCell>
        <TableCell align="center">Quantity</TableCell>
        <TableCell align="center">Value</TableCell>
    </>;

    const statToSubRow = (stat: CorporealBeastStat) => stat.uniques && stat.uniques.map((unique) => (
        <TableRow key={unique.item}>
            <BorderlessTableCell align="center">{unique.item}</BorderlessTableCell>
            <BorderlessTableCell align="center">{unique.quantity}</BorderlessTableCell>
            <BorderlessTableCell align="center">{Utils.toKmb(unique.value, true, true)}</BorderlessTableCell>
        </TableRow>
    ));

    const statsToRows = (stats: CorporealBeastStat[]) => stats.map((stat: CorporealBeastStat, index: number) =>
        <Row rank={index + 1} script={'beg corporeal beast'} stat={stat} statToRow={statToRow}
             subHeader={stat.uniques.length ? subHeaders : undefined}
             statToSubRow={stat.uniques.length ? statToSubRow : undefined}/>
    );

    return (
        <RankingTable name={'Corporeal Beast'}
                      id={'corporeal-beast'}
                      url='/scripts/stats/beg corporeal beast'
                      headers={headers}
                      dataToRows={statsToRows}/>
    );
}

export default withRouter(CorporealBeastRanking)