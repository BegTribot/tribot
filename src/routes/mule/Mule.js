import React from 'react';
import {withRouter} from 'react-router';
import Script from "../Script";
import execution1 from "../../static/executions/mule-execution1.png";
import execution2 from "../../static/executions/mule-execution2.png";
import execution3 from "../../static/executions/mule-execution3.png";

const description = <div>
    Totally automated mule to help you secure your profits.
</div>;

const features = [
    {
        features: [
            'Off-game communication through sockets.',
            'Idling at login screen unless a mule request is sent from any of your bots.',
            {
                feature: 'Safe proofing:',
                subfeatures: [
                    'Mule requests expire after around 15 minutes by default.',
                    'Trades are cancelled after around 2 minutes by default.',
                    'Mule information (name, location, world) is kept up-to-date.',
                ]
            },
            {
                feature: 'Multiple ways of muling:',
                subfeatures: [
                    'Using time intervals.',
                    'Using time schedules.',
                    'After every certain profit amount.',
                ]
            },
            'Anti-scam mechanisms.',
            'Profit calculator based on real-time prices.',
            'Banking when a requested item is not on inventory. Active only if the mule is at a bank.'
        ],
    },
];

function Mule() {
    return <Script name={'Mule'}
                   id={'3654'}
                   thread={'83715-beg-mule-free'}
                   free
                   description={description}
                   features={features}
                   executions={[execution1, execution2, execution3]}
    />;
}

export default withRouter(Mule)