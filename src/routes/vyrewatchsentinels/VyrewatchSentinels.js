import React from 'react';
import {withRouter} from 'react-router';
import Script from "../Script";

const description = <div>
    <div>
        Kills Vyrewatch sentinels for 600-900k gp/h and decent combat exp/h.
    </div>
</div>;

const requirements = [
    "Blisterwood flail",
    "Vyre noble disguise",
    "Access to upper tier of Darkmeyer",
    "43+ Prayer",
    "Decent melee stats"
];

const recommendations = [
    "Super combat potions"
]

const features = [
    {
        title: 'Combat',
        features: [
            'Fully configurable inventory, gear setup and prayers.',
            'Configurable levels and skill priorities.',
            'Supports high level alchemy on predefined items.',
            'Supports all boost potions (combat, attack, strength) and all potions variations (regular, super, divine, barbarian mix).',
            'Supports all prayers.',
            'Custom and configurable target selection algorithm taking into consideration path distance and mouse proximity.',
            'Refills prayer at the nearby altar.',
            'Automatically finds non crowded worlds.'
        ]
    },
    {
        title: 'Looting',
        features: [
            'Picks up items based on item names, item ids or item values. With support to expressions (example: >2k, rune*, *rune).',
            'Option to pickup untradeable items.',
            'Gives priority to more valuable drops if inventory is nearly full.',
            {
                feature: 'Supports extra storage:',
                subfeatures: [
                    'Gem back',
                    'Herb sack',
                    'Seed box'
                ]
            }
        ]
    },
    {
        title: 'Banking',
        features: [
            'Supports banking when inventory is full.',
            'Supports banking when out of potions.'
        ],
    },
    {
        title: 'Settings',
        features: [
            'Sets auto-retaliate on.',
            'Sets the correct attack style to train the required skill.',
            'Changes npc attack options to always left-click.',
            'Turns accept-aid off.',
            'Hides roofs.'
        ]
    },
];

function VyrewatchSentinels() {
    return <Script name={'Vyrewatch Sentinels'}
                   id={'Vyrewatch-sentinels'}
                   thread={'84291-beg-vyrewatch-sentinels-600-900kh-looting-configurable-gear-inventory-prayer-potions-banking'}
                   description={description}
                   requirements={requirements}
                   recommendations={recommendations}
                   features={features}
    />;
}

export default withRouter(VyrewatchSentinels)