import Typography from "@material-ui/core/Typography";
import React from "react";

export default function ScriptRequirements({requirements}) {
    return <>
        <Typography className={'title'}>
            Requirements:
        </Typography>
        <ul>
            {requirements.map((requirement, index) => <li key={index}>{requirement}</li>)}
        </ul>
    </>
}