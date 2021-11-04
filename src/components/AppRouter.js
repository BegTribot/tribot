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
                <Route path={"/"}>
                    <Home/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}