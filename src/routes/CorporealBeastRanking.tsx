import React from 'react';
import {withRouter} from 'react-router';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import * as Utils from "../Utils";
import RankingTable from "../components/RankingTable";
import Row from "../components/Row";
import {withStyles} from "@material-ui/core/styles";
import MuiTableCell from "@material-ui/core/TableCell";
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
    const header = <>
        <TableCell align="center">Kills</TableCell>
        <TableCell align="center">Loot</TableCell>
        <TableCell align="center">Profit</TableCell>
        <TableCell align="center">Runtime</TableCell>
    </>;

    const statToRow = (stat: CorporealBeastStat) => (
        <>
            <TableCell align="center">{Utils.toKmb(stat.kills, true, true)}</TableCell>
            <TableCell align="center">{Utils.toKmb(stat.lootValue, true, true)}</TableCell>
            <TableCell align="center">{Utils.toKmb(stat.lootValue - stat.suppliesValue, true, true)}</TableCell>
            <TableCell align="center">{Utils.msToString(stat.runtime)}</TableCell>
        </>
    );

    const subHeader = <>
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

    const statsToRows = (stats: CorporealBeastStat[]) => stats.map((stat: CorporealBeastStat, index: number) => (
        <>
            <Row rank={index + 1} script={'beg mule'} stat={stat} statToRow={statToRow}
                 subHeader={stat.uniques.length ? subHeader : undefined} statToSubRow={stat.uniques.length ? statToSubRow : undefined}/>
        </>
    ));

    return (
        <RankingTable name={'Corporeal Beast'} id={'corporeal-beast'} free={false}
                      url='/scripts/stats/beg corporeal beast'
                      header={header} statsToRows={statsToRows}/>
    );
}

export default withRouter(CorporealBeastRanking)