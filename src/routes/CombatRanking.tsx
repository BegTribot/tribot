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
    experiences: SkillExperience[]
}

interface SkillExperience {
    skill: string,
    experience: number
}

function CombatRanking() {
    const statToRow = (stat: CombatStat) => (
        <>
            <TableCell align="center">{Utils.toKmb(stat.kills, true, true)}</TableCell>
            <TableCell align="center">{Utils.toKmb(stat.suppliesValue, true, true)}</TableCell>
            <TableCell align="center">{Utils.toKmb(stat.lootValue, true, true)}</TableCell>
            <TableCell align="center">{Utils.toKmb(stat.deaths, true, true)}</TableCell>
            <TableCell align="center">{Utils.toKmb(stat.experiences, true, true)}</TableCell>
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
                      headers={['Kills', 'Supplies used', 'Loot', 'Deaths', 'Experience']}
                      statsToRows={statsToRows}/>
    );
}

export default withRouter(CombatRanking)