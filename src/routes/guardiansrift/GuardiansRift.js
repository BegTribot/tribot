import React from 'react';
import {withRouter} from 'react-router';
import Script from "../Script";

const description = <>
    <div>
        Guardians of the Rift is a non-combat minigame that takes place within the Temple of the Eye.
        The main goal of the game is to assist The Great Guardian in closing a rift into the Abyss by supplying it with
        imbued essence
        while protecting it from the Abyssal creatures that come through the rift.
    </div>
    <div>
        To play the game, players must have completed the Temple of the Eye quest and have at least level 27 Runecraft
        (which is automatically obtained from the prerequisite quests).
    </div>
    <br/>
    <div>
        <div style={{textDecoration: 'underline'}}>
            Rewards:
        </div>
        <div>
            <div className={'reward-item-icon-wrapper'}>
                <img src={'https://oldschool.runescape.wiki/images/Abyssal_pearls_5.png?264ac'}/>
            </div>
            <span className={'reward-item-title'}>Abyssal pearls:</span> Used to purchase items
            from the Temple Supplies shop.
        </div>
        <div>
            <div className={'reward-item-icon-wrapper'}>
                <img src={'https://oldschool.runescape.wiki/images/Intricate_pouch.png?a8281'}/>
            </div>
            <span className={'reward-item-title'}>Intricate pouch:</span> Can give a tarnished
            locket or a lost bag. Grants a random amount of runes or one of several dragon items.
        </div>
        <div>
            <div className={'reward-item-icon-wrapper'}>
                <img src={'https://oldschool.runescape.wiki/images/Atlax%27s_diary.png?2e99c'}/>
            </div>
            <span className={'reward-item-title'}>Atlax's diary:</span> An old diary of someone's
            experiences at the Temple of the Eye.
        </div>
        <div>
            <div className={'reward-item-icon-wrapper'}>
                <img src={'https://oldschool.runescape.wiki/images/Elemental_talisman.png?7a7c0'}/>
            </div>
            <span className={'reward-item-title'}>Elemental talisman:</span> Grants access to
            all elemental runic altars.
        </div>
        <div>
            <div className={'reward-item-icon-wrapper'}>
                <img src={'https://oldschool.runescape.wiki/images/Catalytic_talisman.png?354ac'}/>
            </div>
            <span className={'reward-item-title'}>Catalytic talisman:</span> Grants access to
            all catalytic runic altars, provided the player has completed the quests to access those that require it.
        </div>
        <div>
            <div className={'reward-item-icon-wrapper'}>
                <img src={'https://oldschool.runescape.wiki/images/Abyssal_needle.png?5b006'}/>
            </div>
            <span className={'reward-item-title'}>Abyssal needle:</span> Combines all essence
            pouches into one colossal pouch.
        </div>
        <div>
            <div className={'reward-item-icon-wrapper'}>
                <img src={'https://oldschool.runescape.wiki/images/Abyssal_lantern.png?5b006'}/>
            </div>
            <span className={'reward-item-title'}>Abyssal lantern:</span> Gives various benefits
            within the minigame depending on the type of logs used to light it.
        </div>
        <div>
            <div className={'reward-item-icon-wrapper'}>
                <img src={'https://oldschool.runescape.wiki/images/Abyssal_green_dye.png?a31d4'}/>
            </div>
            <span className={'reward-item-title'}>Abyssal green:</span> Recolours the Raiments
            of the Eye. Comes in red, green, and blue.
        </div>
        <div>
            <div className={'reward-item-icon-wrapper'}>
                <img src={'https://oldschool.runescape.wiki/images/Abyssal_protector.png?1e68e'}/>
            </div>
            <span className={'reward-item-title'}>Abyssal protector:</span> An Abyssal
            creature pet, similar to an Abyssal guardian.
        </div>
    </div>
</>;

const requirements = [
    "Pickaxe",
    "Temple of the Eye quest"
];

const recommendations = [
    "Chisel",
    "Runecrafting pouches",
    "Graceful outfit",
    "Varrock armour",
    "Rune pouch with NPC contact runes",
    "Abyssal lantern with Redwood logs"
];

const features = [
    {
        title: 'Minigame',
        features: [
            'Supports all runecrafting altars.',
            'Supports all runecrafting pouches (small, medium, large, giant, colossal).',
            'Repairs pouches using NPC contact spell if available.',
            'Mines at large remains deposit if agility level over 56, otherwise mines at a closeby guardian remains.',
            'Gives priority to huge remains deposits for faster points.',
            'Balaces between elemental and catalytic altars for maximum rewards.',
            'Intelligent altar selection to balance between experience and rewards.',
            'Intelligent behaviour to select which barrier to heal or build.',
            'Builds strong and overcharged guardians if available.',
            'Supports pickaxes special attack (Dragon, Infernal, 3rd age, Crystal).'
        ]
    },
    {
        Lobby: 'Lobby',
        features: [
            'Automatically finds the best world to play at.',
            'Fetches missing required items (pickaxe, and other recommended items) from the bank.',
            'Equips pickaxe if able to'
        ]
    },
    {
        title: 'Navigation',
        features: [
            'Moves to Guardian of the Rift minigame by walking or using minigames teleport.',
        ],
    },
    {
        title: 'Antiban',
        features: [
            {
                feature: 'Includes several anti-ban behaviours:',
                subfeatures: [
                    'Sometimes pre-hovers/opens menus on pouches and/or portals when runecrafting.',
                    'Sometimes pre-hovers/opens menus on exit portal when at huge remains area.',
                    'The usual right clicks/open tabs/move camera/examines/etc while mining and crafting essence.',
                    'Sometimes checks guardian % on entrance while waiting for the game to finish.'
                ]
            },
        ]
    },
];


function GuardiansRift() {
    return <Script name={'Guardians Rift'}
                   id={'guardians-rift'}
                   thread={'84304-beg-guardians-rift-antiban-all-altars-all-pouches-npc-contact-special-attacks-banking-world-hopping'}
                   requirements={requirements}
                   recommendations={recommendations}
                   description={description}
                   features={features}
                   demoUrl={'https://streamable.com/e/twt9s4'}
    />;
}

export default withRouter(GuardiansRift)