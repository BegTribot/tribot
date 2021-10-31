import React from 'react';
import {withRouter} from 'react-router';
import Script from "./Script";
import execution1 from "../static/executions/pohplanks-execution1.png";
import execution2 from "../static/executions/pohplanks-execution2.png";
import execution3 from "../static/executions/pohplanks-execution3.png";
import execution4 from "../static/executions/pohplanks-execution4.png";

const description = <div>
    <div>Turns logs into planks at the player-owned house by sending your
        <span>&nbsp;</span><a target="_blank" href="https://oldschool.runescape.wiki/w/Demon_butler#Services">Demon
            Butler</a><span>&nbsp;</span>
        to the sawmill.
    </div>
    <div>
        Supports camelot and lumbridge pvp banks, castle wars, ferox enclave, wintertodt and barbarian
        outpost banks.
    </div>
    <div>
        Up to 7k planks/hour and 1.5m gp/hour depending on settings, your connection and prices.
    </div>
</div>;

const features = [
    {
        features: [
            'Support to all plank types (Regular/Oak/Teak/Mahogany).',
            'Support to Camelot and Lumbridge PvP, Castle Wars, Ferox Enclave, Wintertodt and Barbarian outpost banks.',
            'Automated muling.',
            'Grand exchange restock.',
            'Moneybag support.',
            'Profit calculator.',
            'Death recovery.',
            'Ability to move house location and hire a demon butler.',
            'Mouse movement anticipation for higher planks/h.',
            'Anti-pk features such as setting private status to offline, detecting portal miss clicks as quickly as possible and avoid being lured to the risk zones.'
        ]
    },
];

function PohPlanks() {
    return <Script name={'Poh Planks'}
                   id={'poh-planks'}
                   thread={'83668-beg-poh-planks-500k-1mh-muling-restocking'}
                   description={description}
                   features={features}
                   executions={[execution1, execution2, execution3, execution4]}
    />;
}

export default withRouter(PohPlanks)