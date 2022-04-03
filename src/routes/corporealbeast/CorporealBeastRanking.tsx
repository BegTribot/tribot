import React from 'react';
import {withRouter} from 'react-router';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import * as Utils from "../../Utils";
import RankingTable from "../../components/RankingTable";
import Row from "../../components/Row";
import BorderlessTableCell from "../../components/BorderlessTableCell";

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
    const comparator = (a: CorporealBeastStat, b: CorporealBeastStat, orderBy: keyof CorporealBeastStat | 'profit') => {
        let aValue, bValue;
        if (orderBy === 'profit') {
            aValue = a.lootValue - a.suppliesValue;
            bValue = b.lootValue - b.suppliesValue;
        } else {
            aValue = a[orderBy];
            bValue = b[orderBy];
        }
        if (bValue < aValue) {
            return -1;
        }
        if (bValue > aValue) {
            return 1;
        }
        return 0;
    }

    const headers = [
        {id: 'kills', label: 'Kills'},
        {id: 'loot', label: 'Loot'},
        {id: 'profit', label: 'Profit'},
        {id: 'runtime', label: 'Runtime'}
    ];

    const statToRow = (stat: CorporealBeastStat) => (
        <>
            <TableCell align="left">{Utils.toKmb(stat.kills, true, true)}</TableCell>
            <TableCell align="left">{Utils.toKmb(stat.lootValue, true, true)}</TableCell>
            <TableCell align="left">{Utils.toKmb(stat.lootValue - stat.suppliesValue, true, true)}</TableCell>
            <TableCell align="left">{Utils.msToString(stat.runtime, false, false)}</TableCell>
        </>
    );

    const subHeaders = <>
        <TableCell align="left">Item</TableCell>
        <TableCell align="left">Quantity</TableCell>
        <TableCell align="left">Value</TableCell>
    </>;

    const statToSubRow = (stat: CorporealBeastStat) => stat.uniques && stat.uniques.map((unique) => (
        <TableRow key={unique.item}>
            <BorderlessTableCell align="center">{unique.item}</BorderlessTableCell>
            <BorderlessTableCell align="center">{unique.quantity}</BorderlessTableCell>
            <BorderlessTableCell align="center">{Utils.toKmb(unique.value, true, true)}</BorderlessTableCell>
        </TableRow>
    ));

    const statsToRows = (stats: CorporealBeastStat[]) => stats.map((stat: CorporealBeastStat, index: number) =>
        <Row key={index} rank={index + 1} script={'beg corporeal beast'} stat={stat} statToRow={statToRow}
             subHeader={stat.uniques.length ? subHeaders : undefined}
             statToSubRow={stat.uniques.length ? statToSubRow : undefined}/>
    );

    return (
        <RankingTable name={'Corporeal Beast'}
                      id={'corporeal-beast'}
                      url='/scripts/stats/beg corporeal beast'
                      headers={headers}
                      comparator={comparator}
                      dataToRows={statsToRows}/>
    );
}

export default withRouter(CorporealBeastRanking)