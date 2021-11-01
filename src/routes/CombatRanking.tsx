import React from 'react';
import {withRouter} from 'react-router';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import * as Utils from "../Utils";
import RankingTable from "../components/RankingTable";
import Row from "../components/Row";
import BorderlessTableCell from "../components/BorderlessTableCell";

interface CombatStat {
    username: string,
    runtime: number,
    kills: number,
    suppliesValue: number,
    lootValue: number,
    deaths: number,
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
    const statToRow = (stat: CombatStat) => (
        <>
            <TableCell align="center">{Utils.toKmb(stat.suppliesValue, true, true)}</TableCell>
            <TableCell align="center">{Utils.toKmb(stat.lootValue, true, true)}</TableCell>
            <TableCell align="center">{Utils.toKmb(stat.experiences.attack, true, true)}</TableCell>
            <TableCell align="center">{Utils.toKmb(stat.experiences.strength, true, true)}</TableCell>
            <TableCell align="center">{Utils.toKmb(stat.experiences.defence, true, true)}</TableCell>
            <TableCell align="center">{Utils.toKmb(stat.experiences.ranged, true, true)}</TableCell>
            <TableCell align="center">{Utils.toKmb(stat.experiences.magic, true, true)}</TableCell>
            <TableCell align="center">{Utils.msToString(stat.runtime)}</TableCell>
        </>
    );

    const statsToRows = (stats: CombatStat[]) => stats.map((stat: CombatStat, index: number) => (
            <Row rank={index + 1} script={'beg combat'} stat={stat} statToRow={statToRow}/>
    ));

    return (
        <RankingTable name={'Combat'}
                      id={'combat-trainer'}
                      url='/scripts/stats/beg combat'
                      headers={['Supplies', 'Loot', 'Att.', 'Str.', 'Def.', 'Ranged', 'Magic', 'Runtime']}
                      statsToRows={statsToRows}/>
    );
}

export default withRouter(CombatRanking)