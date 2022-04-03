import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import CorporealBeast from "../routes/corporealbeast/CorporealBeast";
import Home from "../routes/Home";
import PohPlanks from "../routes/pohplanks/PohPlanks";
import Mule from "../routes/mule/Mule";
import AppSidenav from "./AppSidenav";
import CorporealBeastRanking from "../routes/corporealbeast/CorporealBeastRanking";
import MuleRanking from "../routes/mule/MuleRanking";
import PohPlanksRanking from "../routes/pohplanks/PohPlanksRanking";
import Utilities from "../routes/utilities/Utilities";
import Combat from "../routes/combat/Combat";
import CombatRanking from "../routes/combat/CombatRanking";
import Cooking from "../routes/cooking/Cooking";
import CookingRanking from "../routes/cooking/CookingRanking";
import GuardiansRift from "../routes/guardiansrift/GuardiansRift";
import VyrewatchSentinels from "../routes/vyrewatchsentinels/VyrewatchSentinels";
import VyrewatchSentinelsRanking from "../routes/vyrewatchsentinels/VyrewatchSentinelsRanking";
import GuardiansRiftRanking from "../routes/guardiansrift/GuardiansRiftRanking";

export default function AppRouter() {
    return (
        <BrowserRouter basename='/tribot'>
            <AppSidenav/>
            <Switch>
                <Route exact path={"/scripts/vyrewatch-sentinels"}>
                    <VyrewatchSentinels/>
                </Route>
                <Route exact path={"/scripts/vyrewatch-sentinels/ranking"}>
                    <VyrewatchSentinelsRanking/>
                </Route>

                <Route exact path={"/scripts/guardians-rift"}>
                    <GuardiansRift/>
                </Route>
                <Route exact path={"/scripts/guardians-rift/ranking"}>
                    <GuardiansRiftRanking/>
                </Route>

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