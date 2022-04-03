import React from 'react';
import {withRouter} from 'react-router';
import Script from "../Script";

const description = <div>
    <div>
        Free all-in-one progressive Cooking script.
    </div>
    <div>
        Supports rouges den, self-made fires, ranges and inventory make-item.
    </div>
    <div>
        Supports fish, pizzas, pies, wines, and more.
    </div>
</div>;

const features = [
    {
        title: 'Cooking methods',
        features: [
            <div>
                <div>Rogues den:</div>
                <div>
                    Cooks at Rogues den (Burthoupe) using the well-known permanent fire.
                </div>
            </div>,
            <div>
                <div>Self-made fires:</div>
                <div>
                    Makes fire on a pre-established area close to the bank, and cooks on it. Mostly thinking about
                    free-to-play users, however, included a few pay-to-play banks as well.
                </div>
                <div>
                    Supported Banks: Varrock West, Varrock East, Edgeville, Grand Exchange, Falador West, Falador East,
                    Draynor Village, Duel Arena, Al-Kharid, Castle Wars, Catherby, Seers, Ardougne West, Ardougne East,
                    Yanille, Nardah, Tzhaar City.
                </div>
            </div>,
            <div>
                <div>Ranges:</div>
                <div>Cooks food on a range/stove/oven.</div>
                <div>Supported Ranges: Al-Kharid, Lumbridge, Falador, Edgeville, Varrock East, Cooking Guild, Catherby,
                    Nardah.
                </div>
            </div>,
            <div>
                <div>Make-item:</div>
                <div>Makes food using two ingredients on each other.</div>
            </div>,
        ]
    },
    {
        title: 'Supported fish',
        features: [
            'Shrimps, Anchovies, Karambwanji, Sardine, Karambwan, Herring, Mackerel, Trout, Cod, Pike, Salmon, Tuna, Lobster, Bass, Swordfish, Monkfish, Shark, Dark crab, Plain pizza (range only), Baked potato (range only), Sweetcorn (range only).',
        ]
    },
    {
        title: 'Supported make-item food',
        features: [
            'Jug of wine, Tuna potato, Pizza base, Incomplete pizza, Uncooked pizza, Anchovy pizza, Meat pizza, Pineapple pizza, Pastry dough, Pie shell, Uncooked berry pie, Uncooked meat pie, Uncooked apple pie, Raw mud pie, Raw garden pie, Raw fish pie, Raw wild pie, Raw summer pie.'
        ],
    },
    {
        title: 'Progressive',
        features: [
            'Progressive cooking, with up to 5 setup configurations to define different settings and upgrade your food as your cooking level goes up.',
        ]
    }
];

function Combat() {
    return <Script name={'Cooking'}
                   id={'1760'}
                   free
                   thread={'61733-beg-cooking-free-all-in-one-progressive'}
                   description={description}
                   features={features}
    />
}

export default withRouter(Combat)