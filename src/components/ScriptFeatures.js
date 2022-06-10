import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";

export default function ScriptFeatures({features}) {
    return <>
        <Typography className={'title'}>
            Features:
        </Typography>
        {features.map(feature =>
            <>
                {feature.title && <Box margin={2}>
                    <Typography gutterBottom className={'feature-title'}>
                        {feature.title}
                    </Typography>
                </Box>}
                {feature.features && !(feature.features instanceof Array) && <Box margin={2}>
                    {feature.features}
                </Box>}
                {feature.features && feature.features instanceof Array && <Box margin={2}>
                    <ul>
                        {feature.features.map((f, i1) =>
                            <li key={i1}>
                                {!f.feature ? f : f.feature}
                                {f.subfeatures && <ul>{f.subfeatures.map((ff, i2) => <li key={i2}>{ff}</li>)}</ul>}
                            </li>
                        )}
                    </ul>
                </Box>}
            </>)}
    </>
}





