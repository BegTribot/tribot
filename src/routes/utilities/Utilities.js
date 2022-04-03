import React from 'react';
import {withRouter} from 'react-router';
import Script from "../Script";

const description = <div>
    Contains some utility tasks to interact with my other scripts.
</div>

const features = [
    {
        title: 'Tasks',
        features: [
            'Corporeal Beast private instance host: Keeps open a private instance for the Corporeal Beast.',
            'Player-owned-house host: Hosts a player-owned-house.',
        ],
    },
];

function Utilities() {
    return <Script name={'Utilities'}
                   id={'3862'}
                   thread={'83824-beg-utilities-free'}
                   free
                   noRanking
                   description={description}
                   features={features}
    />
}

export default withRouter(Utilities)