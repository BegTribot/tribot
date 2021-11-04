import React from 'react';
import {withRouter} from 'react-router';
import TableCell from '@material-ui/core/TableCell';
import * as Utils from "../Utils";
import RankingTable from "../components/RankingTable";
import Row from "../components/Row";

interface CombatStat {
    username: string,
    runtime: number,
    kills: number,
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
    const customComparator = (a: CombatStat, b: CombatStat,
                              orderBy: keyof CombatStat
                                  | 'experiences.attack'
                                  | 'experiences.strength'
                                  | 'experiences.defence'
                                  | 'experiences.ranged'
                                  | 'experiences.magic') => {
        let aValue, bValue;
        if (orderBy === 'experiences.attack') {
            aValue = a.experiences.attack;
            bValue = b.experiences.attack;
        }
        else if (orderBy === 'experiences.strength') {
            aValue = b.experiences.strength;
            bValue = b.experiences.strength;
        }
        else if (orderBy === 'experiences.defence') {
            aValue = a.experiences.defence;
            bValue = b.experiences.defence;
        }
        else if (orderBy === 'experiences.ranged') {
            aValue = a.experiences.ranged;
            bValue = b.experiences.ranged;
        }
        else if (orderBy === 'experiences.magic') {
            aValue = a.experiences.magic;
            bValue = b.experiences.magic;
        }
        else {
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
        {id: 'experiences.attack', label: 'Attack', customComparator: customComparator},
        {id: 'experiences.strength', label: 'Strength', customComparator: customComparator},
        {id: 'experiences.defence', label: 'Defence', customComparator: customComparator},
        {id: 'experiences.ranged', label: 'Ranged', customComparator: customComparator},
        {id: 'experiences.magic', label: 'Magic', customComparator: customComparator},
        {id: 'runtime', label: 'Runtime'}
    ];

    const statToRow = (stat: CombatStat) => (
        <>
            <TableCell align="left">{Utils.toKmb(stat.lootValue, true, true)}</TableCell>
            <TableCell align="left">{Utils.toKmb(stat.suppliesValue, true, true)}</TableCell>
            <TableCell
                align="left">{stat.experiences.attack && Utils.toKmb(stat.experiences.attack, true, true) || 0}</TableCell>
            <TableCell
                align="left">{stat.experiences.strength && Utils.toKmb(stat.experiences.strength, true, true) || 0}</TableCell>
            <TableCell
                align="left">{stat.experiences.defence && Utils.toKmb(stat.experiences.defence, true, true) || 0}</TableCell>
            <TableCell
                align="left">{stat.experiences.ranged && Utils.toKmb(stat.experiences.ranged, true, true) || 0}</TableCell>
            <TableCell
                align="left">{stat.experiences.magic && Utils.toKmb(stat.experiences.magic, true, true) || 0}</TableCell>
            <TableCell align="left">{Utils.msToString(stat.runtime, false, false)}</TableCell>
        </>
    );

    const statsToRows = (stats: CombatStat[], index: number) => stats.map((stat: CombatStat, index: number) => (
        <Row rank={index + 1} script={'beg combat'} stat={stat} statToRow={statToRow}/>
    ));

    return (
        <RankingTable name={'Combat'}
                      id={'combat-trainer'}
                      url='/scripts/stats/beg combat'
                      headers={headers}
                      dataToRows={statsToRows}/>
    );
}

export default withRouter(CombatRanking)