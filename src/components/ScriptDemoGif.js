import React from "react";
import Typography from "@material-ui/core/Typography";

export default function ScriptDemoGif({url}) {
    return <>
        <Typography className={'title'}>
            Demo:
        </Typography>
        <div style={{width: '100%', height: '0px', position: 'relative', paddingBottom: '40.212%', margin: '20px 0 20px 0'}}>
            <iframe src={url + '?autoplay=1'} frameBorder="0" width="100%" height="100%"
                    allowFullScreen allow="autoplay"
                    style={{
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                        left: '0px',
                        top: '0px',
                        overflow: 'hidden'
                    }}/>
        </div>
    </>

}


