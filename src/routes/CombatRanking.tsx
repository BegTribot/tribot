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
    const headers = [
        {id: 'loot', label: 'Loot'},
        {id: 'supplies', label: 'Supplies'},
        {id: 'attack', label: 'Attack'},
        {id: 'strength', label: 'Strength'},
        {id: 'defence', label: 'Defence'},
        {id: 'ranged', label: 'Ranged'},
        {id: 'magic', label: 'Magic'},
        {id: 'runtime', label: 'Runtime'}
    ];

    const statToRow = (stat: CombatStat) => (
        <>
            <TableCell align="center">{Utils.toKmb(stat.lootValue, true, true)}</TableCell>
            <TableCell align="center">{Utils.toKmb(stat.suppliesValue, true, true)}</TableCell>
            <TableCell align="center">{stat.experiences.attack && Utils.toKmb(stat.experiences.attack, true, true) || 0}</TableCell>
            <TableCell align="center">{stat.experiences.strength && Utils.toKmb(stat.experiences.strength, true, true) || 0}</TableCell>
            <TableCell align="center">{stat.experiences.defence && Utils.toKmb(stat.experiences.defence, true, true) || 0}</TableCell>
            <TableCell align="center">{stat.experiences.ranged && Utils.toKmb(stat.experiences.ranged, true, true) || 0}</TableCell>
            <TableCell align="center">{stat.experiences.magic && Utils.toKmb(stat.experiences.magic, true, true) || 0}</TableCell>
            <TableCell align="center">{Utils.msToString(stat.runtime)}</TableCell>
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