import React from 'react';
import {withRouter} from 'react-router';
import Script from "../Script";

const description = <div>
    <div>
        All-in-one progressive Combat script.
    </div>
    <div>
        Supports active and passive combat, any npc and game area, many different potions, special
        weapons, prayer, every gear and inventory item.
    </div>
    <div>
        Supports looting, dwarf cannon, high alchemy, guthans, death recovery, some slayer features.
    </div>
    <div>
        And much more, check all features below.
    </div>
</div>;

const features = [
    {
        title: 'Combat',
        features: [
            'Supports active combat (player actively choosing targets) and passive combat (standing still and let monsters attack you).',
            'Configurable fight square areas, fight polygon areas, fight spots and aggression reset spots.',
            'Highly configurable inventory and gear setup.',
            'Configurable levels and skill priorities.',
            'Supports MM2 caves for training ranged and magic.',
            'Supports dwarf cannon.',
            'Supports high level alchemy on predefined items.',
            {
                feature: 'Supports all potions variations (regular, super, divine, barbarian mix, super, extended)',
                subfeatures: [
                    'Boost potions (combat, attack, strength, defence, magic, ranged, overload).',
                    'Restore potions (prayer, restore).',
                    'Protect potions (antifire, anti-venom, antipoison, antidote).'
                ]
            },
            'Supports all prayers. Supports prayer flicking.',
            'Supports all commonly used special weapons.',
            'Configurable target selection algorithm taking into consideration path distance, mouse proximity, combat level and safe spots.',
        ]
    },
    {
        title: 'Healing',
        features: [
            'Supports almost all healing items.',
            'Supports guthans.',
            'Supports bones to peaches tablet and spell.',
            'Supports bandits store to unnote food.'
        ]
    },
    {
        title: 'Looting',
        features: [
            'Picks up items based on item names, item ids or item values.',
            'Able to pick up bones and bury them.',
            'Picks up ammo.',
            'Gives priority to more valuable drops if inventory is nearly full.',
            {
                feature: 'Supports extra storage:',
                subfeatures: [
                    'Looting bag',
                    'Gem back',
                    'Herb sack',
                    'Seed box'
                ]
            }
        ],
    },
    {
        title: 'Banking',
        features: [
            'Supports banking when inventory is full.',
            'Supports banking when out of food, runes, ammo, potions or cannonballs.',
            'Supports banking when slayer task is completed.'
        ]
    },
    {
        title: 'Setup',
        features: [
            'World hops to find empty worlds.',
            'When all fight spots are occupied on passive combat.',
            'When more than x players are nearby on your fighting area on active combat.',
            'When another cannon is deployed near you.',
            'Supports prayer points refill at a specified altar.',
            'Repairs damaged barrows gear at Bob.',
            'Supports ferox enclave stats recharge.',
            'Supports magic auto-cast.'
        ]
    },
    {
        title: 'Death recovery',
        features: [
            'Walks back to death spot.',
            'Loots grave.',
            'Handles death office.',
            'Supports predefined items to withdraw from bank after dying.',
            'Repairs broken items at the nearest Perdu.'
        ]
    },
    {
        title: 'Slayer',
        features: [
            {
                feature: 'Supports kill finishes:',
                subfeatures: [
                    'Bag of salt for rockslugs',
                    'Rock hammer and rock thrownhammer for gargoyles',
                    'Ice cooler for desert lizards',
                    'Fungicide spray for zygomites'
                ]
            },
        ]
    },
    {
        title: 'Settings',
        features: [
            'Sets auto-retaliate on/off.',
            'Sets the correct attack style to train the required skill.',
            'Changes attack options.',
            'Turns accept-aid off.'
        ]
    },
    {
        title: 'Progressive',
        features: [
            'Progressive training, with up to 5 setup configurations to define different settings and upgrade your ' +
            'character as you level up.'
        ]
    }
];

function Combat() {
    return <Script name={'Combat'}
                   id={'combat-trainer'}
                   thread={'84013-beg-combat-all-in-one-progressive'}
                   description={description}
                   features={features}
    />;
}

export default withRouter(Combat)