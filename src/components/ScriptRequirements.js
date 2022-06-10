import Typography from "@material-ui/core/Typography";
import React from "react";

export default function ScriptRequirements({requirements}) {
    if (requirements.length
        && !requirements[0].title) {
        return <>
            <Typography className={'title'}>
                Requirements:
            </Typography>
            <ul>
                {requirements.map((requirement, index) => <li key={index}>{requirement}</li>)}
            </ul>
        </>
    }
    else {
        return <>
            {requirements.map((requirement, index) => <div key={index}>
                    <Typography className={'title'}>
                        {requirement.title}
                    </Typography>
                    <ul>
                        {requirement.items.map((item, index) => <li key={index}>{item}</li>)}
                    </ul>
                </div>
            )}
        </>
    }
}