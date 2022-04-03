import React from 'react';
import {withRouter} from 'react-router';
import TableCell from '@material-ui/core/TableCell';
import {msToString, toKmb} from "../../utils";
import RankingTable from "../../components/RankingTable";
import Row from "../../components/Row";

interface CombatStat {
    username: string,
    runtime: number,
    suppliesValue: number,
    lootValue: number,
    experiences: SkillExperience
}

interface SkillExperience {
    attack: number,
    strength: number,
    defence: number,
    ranged: number,
    magic: number,
    hitpoints: number,
    slayer: number
}

function CombatRanking() {
    const comparator = (a: CombatStat, b: CombatStat,
                        orderBy: keyof CombatStat
                            | 'experiences.attack'
                            | 'experiences.strength'
                            | 'experiences.defence'
                            | 'experiences.ranged'
                            | 'experiences.magic') => {
        let aValue, bValue;
        if (orderBy === 'experiences.attack') {
            aValue = a.experiences.attack || 0;
            bValue = b.experiences.attack || 0;
        } else if (orderBy === 'experiences.strength') {
            aValue = a.experiences.strength || 0;
            bValue = b.experiences.strength || 0;
        } else if (orderBy === 'experiences.defence') {
            aValue = a.experiences.defence || 0;
            bValue = b.experiences.defence || 0;
        } else if (orderBy === 'experiences.ranged') {
            aValue = a.experiences.ranged || 0;
            bValue = b.experiences.ranged || 0;
        } else if (orderBy === 'experiences.magic') {
            aValue = a.experiences.magic || 0;
            bValue = b.experiences.magic || 0;
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
        {id: 'lootValue', label: 'Loot'},
        {id: 'suppliesValue', label: 'Supplies'},
        {id: 'experiences.attack', label: 'Attack'},
        {id: 'experiences.strength', label: 'Strength'},
        {id: 'experiences.defence', label: 'Defence'},
        {id: 'experiences.ranged', label: 'Ranged'},
        {id: 'experiences.magic', label: 'Magic'},
        {id: 'runtime', label: 'Runtime'}
    ];

    const statToRow = (stat: CombatStat) => (
        <>
            <TableCell align="left">{toKmb(stat.lootValue, true, true)}</TableCell>
            <TableCell align="left">{toKmb(stat.suppliesValue, true, true)}</TableCell>
            <TableCell
                align="left">{stat.experiences.attack && toKmb(stat.experiences.attack, true, true) || 0}</TableCell>
            <TableCell
                align="left">{stat.experiences.strength && toKmb(stat.experiences.strength, true, true) || 0}</TableCell>
            <TableCell
                align="left">{stat.experiences.defence && toKmb(stat.experiences.defence, true, true) || 0}</TableCell>
            <TableCell
                align="left">{stat.experiences.ranged && toKmb(stat.experiences.ranged, true, true) || 0}</TableCell>
            <TableCell
                align="left">{stat.experiences.magic && toKmb(stat.experiences.magic, true, true) || 0}</TableCell>
            <TableCell align="left">{msToString(stat.runtime, false, false)}</TableCell>
        </>
    );

    const statsToRows = (stats: CombatStat[], index: number) => stats.map((stat: CombatStat, index: number) => (
        <Row key={index} rank={index + 1} script={'combat'} stat={stat} statToRow={statToRow}/>
    ));

    return (
        <RankingTable name={'Combat'}
                      storeId={'combat-trainer'}
                      headers={headers}
                      comparator={comparator}
                      dataToRows={statsToRows}/>
    );
}

export default withRouter(CombatRanking)