import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import CorporealBeast from "../routes/CorporealBeast";
import Home from "../routes/Home";
import PohPlanks from "../routes/PohPlanks";
import Mule from "../routes/Mule";
import AppSidenav from "./AppSidenav";
import CorporealBeastRanking from "../routes/CorporealBeastRanking";
import MuleRanking from "../routes/MuleRanking";
import PohPlanksRanking from "../routes/PohPlanksRanking";
import Utilities from "../routes/Utilities";
import Combat from "../routes/Combat";
import CombatRanking from "../routes/CombatRanking";
import Cooking from "../routes/Cooking";
import CookingRanking from "../routes/CookingRanking";
import SortableTable from "./SortableTable";
import TableCell from "@material-ui/core/TableCell";
import * as Utils from "../Utils";
import Row from "./Row";
import TableRow from "@material-ui/core/TableRow";

const headers = [
    { id: 'name', label: 'Dessert (100g serving)' },
    { id: 'calories', label: 'Calories' },
    { id: 'fat', label: 'Fat (g)' },
    { id: 'carbs', label: 'Carbs (g)' },
    { id: 'protein', label: 'Protein (g)' },
];

const stats = [
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Donut', 452, 25.0, 51, 4.9),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
    createData('Honeycomb', 408, 3.2, 87, 6.5),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Jelly Bean', 375, 0.0, 94, 0.0),
    createData('KitKat', 518, 26.0, 65, 7.0),
    createData('Lollipop', 392, 0.2, 98, 0.0),
    createData('Marshmallow', 318, 0, 81, 2.0),
    createData('Nougat', 360, 19.0, 9, 37.0),
    createData('Oreo', 437, 18.0, 63, 4.0),
];

function createData(name, calories, fat, carbs, protein) {
    return {name, calories, fat, carbs, protein};
}

const dataToRows = data => data.map((d, index) => (
    <TableRow key={index}>
        <TableCell padding="checkbox">
        </TableCell>
        <TableCell>
            {d.name}
        </TableCell>
        <TableCell align="center">{d.calories}</TableCell>
        <TableCell align="center">{d.fat}</TableCell>
        <TableCell align="center">{d.carbs}</TableCell>
        <TableCell align="center">{d.protein}</TableCell>
    </TableRow>
));

export default function AppRouter() {
    return (
        <BrowserRouter basename='/tribot'>
            <AppSidenav/>
            <Switch>
                <Route exact path={"/scripts/corporeal-beast"}>
                    <CorporealBeast/>
                </Route>
                <Route exact path={"/scripts/corporeal-beast/ranking"}>
                    <CorporealBeastRanking/>
                </Route>
                <Route exact path={"/scripts/combat"}>
                    <Combat/>
                </Route>
                <Route exact path={"/scripts/combat/ranking"}>
                    <CombatRanking/>
                </Route>
                <Route exact path={"/scripts/poh-planks"}>
                    <PohPlanks/>
                </Route>
                <Route exact path={"/scripts/poh-planks/ranking"}>
                    <PohPlanksRanking/>
                </Route>
                <Route exact path={"/scripts/cooking"}>
                    <Cooking/>
                </Route>
                <Route exact path={"/scripts/cooking/ranking"}>
                    <CookingRanking/>
                </Route>
                <Route exact path={"/scripts/mule"}>
                    <Mule/>
                </Route>
                <Route exact path={"/scripts/mule/ranking"}>
                    <MuleRanking/>
                </Route>
                <Route exact path={"/scripts/utilities"}>
                    <Utilities/>
                </Route>
                <Route exact path={"/table"}>
                    <div style={{marginTop: '100px', marginLeft: '20px'}}>
                        <SortableTable rows={stats} headers={headers} dataToRows={dataToRows}/>
                    </div>
                </Route>
                <Route path={"/"}>
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}