import React from 'react';
import {withRouter} from 'react-router';
import TableCell from '@material-ui/core/TableCell';
import {msToString, toKmb} from "../../utils";
import RankingTable from "../../components/RankingTable";
import Row from "../../components/Row";

interface VyrewatchSentinelsStat {
    username: string,
    lootValue: number,
    suppliesValue: number,
    kills: number,
    runtime: number
}

function VyrewatchSentinelsRanking() {
    const comparator = (a: VyrewatchSentinelsStat, b: VyrewatchSentinelsStat, orderBy: keyof VyrewatchSentinelsStat | 'profit') => {
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
        {id: 'supplies', label: 'Supplies'},
        {id: 'profit', label: 'Profit'},
        {id: 'runtime', label: 'Runtime'}
    ];

    const statToRow = (stat: VyrewatchSentinelsStat) => (
        <>
            <TableCell align="left">{toKmb(stat.kills, true, true)}</TableCell>
            <TableCell align="left">{toKmb(stat.lootValue, true, true)}</TableCell>
            <TableCell align="left">{toKmb(stat.suppliesValue, true, true)}</TableCell>
            <TableCell align="left">{toKmb(stat.lootValue - stat.suppliesValue, true, true)}</TableCell>
            <TableCell align="left">{msToString(stat.runtime, false, false)}</TableCell>
        </>
    );

    const statsToRows = (stats: VyrewatchSentinelsStat[]) => stats.map((stat: VyrewatchSentinelsStat, index: number) =>
        <Row key={index} rank={index + 1} script={'vyrewatch sentinels'} stat={stat} statToRow={statToRow}/>
    );

    return (
        <RankingTable name={'Vyrewatch Sentinels'}
                      storeId={'vyrewatch-sentinels'}
                      headers={headers}
                      comparator={comparator}
                      dataToRows={statsToRows}/>
    );
}

export default withRouter(VyrewatchSentinelsRanking)