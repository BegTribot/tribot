import Typography from "@material-ui/core/Typography";
import React from "react";

export default function ScriptRecommendations({recommendations}) {
    return <>
        <Typography className={'title'}>
            Recommendations:
        </Typography>
        <ul>
            {recommendations.map((recommendation, index) => <li key={index}>{recommendation}</li>)}
        </ul>
    </>
}