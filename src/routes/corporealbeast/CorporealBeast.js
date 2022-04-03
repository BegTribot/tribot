import React from 'react';
import {withRouter} from 'react-router';
import Link from "@material-ui/core/Link";
import Script from "../Script";

const description = <div>
    <div>
        Slay Corporeal Beast without effort.
    </div>
</div>;

const features = [
    {
        title: 'Killing',
        features: [
            {
                feature: 'Solo kills',
                subfeatures: [
                    'Dragon warhammer, Arclight and Bandos godsword special attacks to reduce stats.',
                    'Special attack recharges at own or someone else\'s player-owned-house.',
                ]
            },
            {
                feature: 'Team kills',
                subfeatures: [
                    'Coordinate attacks with multiple bots communicating through sockets.',
                ]
            },
            'Private instances support.',
        ]
    },
    {
        title: 'Gear and inventory',
        features: [
            'Totally customizable gear and inventory.',
            'Dragon claws and crystal halberd special attacks support for a faster kill.'
        ]
    },
    {
        title: 'Muling',
        features: [
            <div>
                Automated muling with cooperation with my <Link href={'/tribot/scripts/mule'}>Mule
                script</Link>.
            </div>,
        ]
    },
    {
        title: 'Grand Exchange restock',
    },
    {
        title: 'Loot tracker',
        features: [
            'Profit calculator based on real-time prices.'
        ]

    },
];

function CorporealBeast() {
    return <Script name={'Corporeal Beast'}
                   id={'corporeal-beast'}
                   thread={'83825-beg-corporeal-beast-beta'}
                   description={description}
                   features={features}
    />;
}

export default withRouter(CorporealBeast)