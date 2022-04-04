import React from 'react';
import {withRouter} from 'react-router';
import TableCell from '@material-ui/core/TableCell';
import {msToString, toKmb} from "../../utils";
import RankingTable from "../../components/RankingTable";
import Row from "../../components/Row";

interface GuardiansRiftStat {
    username: string,
    successGames: number,
    defeatedGames: number,
    runecrafting: Skill,
    mining: Skill,
    crafting: Skill,
    elementalPoints: number,
    catalyticPoints: number,
    rewardsClaimed: number,
    runesCrafted: number,
    profit: number,
    runtime: number
}

interface Skill {
    experience: number,
    levels: number;
}

function GuardiansRiftRanking() {
    const comparator = (a: GuardiansRiftStat, b: GuardiansRiftStat, orderBy: keyof GuardiansRiftStat | 'games') => {
        let aValue, bValue;
        if (orderBy === 'games') {
            aValue = a.successGames + a.defeatedGames;
            bValue = b.successGames + b.defeatedGames;
        } else if (orderBy === 'runecrafting') {
            aValue = a.runecrafting.experience;
            bValue = b.runecrafting.experience;
        } else if (orderBy === 'mining') {
            aValue = a.mining.experience;
            bValue = b.mining.experience;
        } else if (orderBy === 'crafting') {
            aValue = a.crafting.experience;
            bValue = b.crafting.experience;
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
        {id: 'successGames', label: 'Success Games'},
        {id: 'defeatedGames', label: 'Defeated Games'},
        {id: 'totalGames', label: 'Total Games'},
        {id: 'runecrafting', label: 'Runecrafting'},
        {id: 'mining', label: 'Mining'},
        {id: 'crafting', label: 'Crafting'},
        {id: 'elementalPoints', label: 'Elemental Points'},
        {id: 'catalyticPoints', label: 'Catalytic Points'},
        {id: 'rewardsClaimed', label: 'Rewards Claimed'},
        {id: 'runesCrafted', label: 'Runes Crafted'},
        {id: 'profit', label: 'Profit'}
    ];

    const statToRow = (stat: GuardiansRiftStat) => (
        <>
            <TableCell align="left">{toKmb(stat.successGames, true, true)}</TableCell>
            <TableCell align="left">{toKmb(stat.defeatedGames, true, true)}</TableCell>
            <TableCell align="left">{toKmb(stat.successGames + stat.defeatedGames, true, true)}</TableCell>
            <TableCell align="left">{toKmb(stat.runecrafting.experience, true, true)} (+{toKmb(stat.runecrafting.levels, true, true)})</TableCell>
            <TableCell align="left">{toKmb(stat.mining.experience, true, true)} (+{toKmb(stat.mining.levels, true, true)})</TableCell>
            <TableCell align="left">{toKmb(stat.crafting.experience, true, true)} (+{toKmb(stat.crafting.levels, true, true)})</TableCell>
            <TableCell align="left">{toKmb(stat.elementalPoints, true, true)}</TableCell>
            <TableCell align="left">{toKmb(stat.catalyticPoints, true, true)}</TableCell>
            <TableCell align="left">{toKmb(stat.rewardsClaimed, true, true)}</TableCell>
            <TableCell align="left">{toKmb(stat.runesCrafted, true, true)}</TableCell>
            <TableCell align="left">{toKmb(stat.profit, true, true)}</TableCell>
            <TableCell align="left">{msToString(stat.runtime, false, false)}</TableCell>
        </>
    );

    const statsToRows = (stats: GuardiansRiftStat[]) => stats.map((stat: GuardiansRiftStat, index: number) =>
        <Row key={index} rank={index + 1} script={'guardians rift'} stat={stat} statToRow={statToRow}/>
    );

    return (
        <RankingTable name={'Guardians Rift'}
                      storeId={'guardians-rift'}
                      headers={headers}
                      comparator={comparator}
                      dataToRows={statsToRows}/>
    );
}

export default withRouter(GuardiansRiftRanking)