import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import React from "react";

export default function ScriptFeatures({features}) {
    return <>
        {features.map(feature =>
            <>
                {feature.title && <Box margin={2}>
                    <Typography gutterBottom className={'feature-title'}>
                        {feature.title}
                    </Typography>
                </Box>}
                {feature.features && <Box margin={2}>
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





