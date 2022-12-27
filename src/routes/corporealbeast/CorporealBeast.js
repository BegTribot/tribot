import React from 'react';
import {withRouter} from 'react-router';
import Link from "@material-ui/core/Link";
import Script from "../Script";
import execution1 from "../../static/executions/corporeal-beast-execution1.png";
import execution2 from "../../static/executions/corporeal-beast-execution2.png";

const description = <>
    <div>
        Kills The Corporeal Beast for you.
        Corporeal Beast is a high level boss monster with an average drop of 550k. (<a href={'https://oldschool.runescape.wiki/w/Money_making_guide/Killing_the_Corporeal_Beast'} target={'_blank'}>Click here to see calculator</a>)<br/>
        It can be easily solo'd by combining the special attack effect of 3 dragon warhammer, 20 arclight and 200 bandos godsword damage.
    </div>
    <br/>
    <div>
        <div style={{textDecoration: 'underline'}}>
            Uniques drop table:
        </div>
        <div>
            <div className={'reward-item-icon-wrapper'}>
                <img src={'https://oldschool.runescape.wiki/images/Elysian_sigil.png?1bc1e'}/>
            </div>
            <span className={'reward-item-title'}>Elysian sigil:</span> Item used to craft an Elysian spirit shield, one of the most powerful and the most expensive shield in the game.
        </div>
        <div>
            <div className={'reward-item-icon-wrapper'}>
                <img src={'https://oldschool.runescape.wiki/images/Arcane_sigil.png?1f712'}/>
            </div>
            <span className={'reward-item-title'}>Arcane sigil:</span> Item used to craft an Arcane spirit shield, the best off-hand item for magic attack.
        </div>
        <div>
            <div className={'reward-item-icon-wrapper'}>
                <img src={'https://oldschool.runescape.wiki/images/Spectral_sigil.png?ca31d'}/>
            </div>
            <span className={'reward-item-title'}>Spectral sigil:</span> Item used to craft a Spectral spirit shield.
        </div>
        <div>
            <div className={'reward-item-icon-wrapper'}>
                <img src={'https://oldschool.runescape.wiki/images/Spirit_shield.png?e8969'}/>
            </div>
            <span className={'reward-item-title'}>Spirit shield:</span> Shield with stats comparable to a rune kiteshield or obsidian shield.
        </div>
        <div>
            <div className={'reward-item-icon-wrapper'}>
                <img src={'https://oldschool.runescape.wiki/images/Holy_elixir.png?53fc0'}/>
            </div>
            <span className={'reward-item-title'}>Holy elixir:</span> Item used to bless a spirit shield in order to create a Blessed spirit shield.
        </div>
        <div>
            <div className={'reward-item-icon-wrapper'}>
                <img src={'https://oldschool.runescape.wiki/images/Jar_of_spirits.png?1c297'}/>
            </div>
            <span className={'reward-item-title'}>Jar of spirits</span> Item used to display a mini version of the Corporeal Beast inside your house.
        </div>
    </div>
</>;

const requirements = [
    {
        title: 'Requirements for solo:',
        items: [
            "85+ attack/strength",
            "Dragon warhammer/Arclight or Darklight/Bandos godsword"
        ]
    },
    {
        title: 'Requirements for 3+ man teams:',
        items: [
            "80+ attack/strength/defence",
            "70 ranged to wear Karils",
            "Decent magic level to increase the magic defence",
            "43+ Prayer",
        ]
    }
];

const features = [
    {
        title: 'Killing',
        features: <div>
                <ul>
                    <li>
                        Solo kills
                        <ul>
                            <li>
                                Use Dragon warhammer, Arclight/Darklight and Bandos godsword special attacks to reduce stats.
                            </li>
                            <li>
                                Special attack recharge at own or someone else's house.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Team kills
                        <ul>
                            <li>
                                Coordinate attacks with multiple bots communicating off-game.
                            </li>
                            <li>
                                You can set it up to have bots communicate between each other, which allows lots of possible configurations. For example for a trio:
                                <ul>
                                    <li>
                                        1 account doing special attacks and other 2 waiting at lobby joining only at the kill phase.
                                    </li>
                                    <li>
                                        2 accounts doing special attacks and the other waiting.
                                    </li>
                                    <li>
                                        All 3 accounts doing special attacks in simultaneous (they can share the current count between each other) and then kill Corp at the same time.
                                    </li>
                                    <li>
                                        Or without special attacks, accounts can wait at lobby until all accounts are ready to join the cave.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        Private instances support.
                    </li>
                    <li>
                        Customizable gear and inventory, and many other options.
                    </li>
                    <li>
                        Super/divine potions support.
                    </li>
                    <li>
                        Multiple food supported: sharks, manta ray, monkfish. Including karambwan combo healing.
                    </li>
                    <li>
                        Supports gear switches to optimize damage: (let me know if you want to get more items supported)
                        <ul>
                            <li>
                                Dragon warhammer gear: Rune defender, Dragon defender, Avernic defender, Mythical cape, Tyrannical ring, Tyrannical ring (i), Brimstone ring, Inquisitor's great helm, Dwarven helmet, Void melee helm, Elite void top, Void knight top, Elite void robe, Void knight robe
                            </li>
                            <li>
                                Arclight/Darklight gear: Rune defender, Dragon defender, Avernic defender, Warrior ring (i), Warrior ring, Brimstone ring, Warrior helm, Void melee helm, Elite void top, Void knight top, Elite void robe, Void knight robe
                            </li>
                            <li>
                                Bandos godsword gear: Void melee helm, Elite void top, Void knight top, Elite void robe, Void knight robe, Brimstone ring, Warrior helm, Void melee helm, Elite void top, Void knight top, Elite void robe, Void knight robe
                            </li>
                        </ul>
                    </li>
                    <li>
                        Dragon claws, crystal halberd and dragon halberd special attacks support for faster kills.
                    </li>
                    <li>
                        Profit calculator based on real-time prices.
                    </li>
                    <li>
                        Uniques Loot tracker.
                    </li>
                    <li>
                        Death handling from graves and Death office.
                    </li>
                    <li>
                        Exploits the Dark core energy mechanism to permanently kill it.
                    </li>
                    <li>
                        Repairs broken barrows gear.
                    </li>
                </ul>
            </div>
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
        title: 'Restock',
        features: [
            'Grand exchange restock.',
            'Potion decanting.',
        ]
    },
];

function CorporealBeast() {
    return <Script name={'Corporeal Beast'}
                   id={'corporeal-beast'}
                   thread={'84398-beg-corporeal-beast-soloteams-ironman-houses-configurable-ge-restock-muling'}
                   description={description}
                   features={features}
                   requirements={requirements}
                   executions={[execution1, execution2]}
    />;
}

export default withRouter(CorporealBeast)