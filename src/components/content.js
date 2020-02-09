import { Component } from 'inferno';
import './content.scss';


/**
 * same as lodash get but better.
 * @param {Object} thing
 * @param {String} key
 * @param {Object} def
 */
function get(thing, key, def = undefined) {
    // input validation first for fast fail.
    if (
        typeof thing === undefined ||
        typeof thing !== "object" ||
        thing === null
    ) {
        return thing || def;
    } // reached a value
    if (
        typeof key !== "string" ||
        key === ""
    ) {
        return thing || def; // no/empty keys provided
    }
    // get the value
    const remaining = key.split(".");
    const findMe = remaining.shift();
    return Object.keys(thing).find(
        k => k === findMe
    )
        ? get(
            thing[findMe],
            remaining.join("."),
            def
        )
        : def;
}

function classNames(...params) {
    return params.join(' ');
}

class Card extends Component {
    render({ card, classes }) {
        return (
            <div className={classes}>
                <div className={classNames("card-body", `${ get(card, 'cardTheme.name', 'Dark') }-theme` )}>
                    <p className={classNames("card-title", `H2---${get(card, 'cardTheme.color', 'Dark').replace(' ', '-')}`)}>{card.title}</p>
                    <p className={classNames(`H3---${get(card, 'cardTheme.color', 'Dark').replace(' ', '-')}`)}>{card.heading}</p>
                    <p className="card-text" dangerouslySetInnerHTML={{ __html: card.description }}></p>
                    <img className="image-cram" src={card.image} alt="this card's beautiful" />{
                        (card.link) ? (
                            <a className={classNames('btn', 'btn-lg', 'btn-card', `btn-theme-${ get(card, 'cardTheme.name', 'Dark') }`)} role="button" aria-disabled="true" href={card.link.url} traget={card.link.target}>{card.link.text}</a>
                        ) : (
                                <div className="spacer" aria-disabled="true"></div>
                            )
                    }
                </div>
            </div>
        )
    }
}

class CardRow extends Component {
    render({ cards }) {
        return (
            <div className="row flex-xs-row flex-column-reverse">
                {
                    cards.map(card => (
                        <div className="py-2 col-lg-6 col-xs-12">
                            <Card card={card} classes="card sized" />
                        </div>
                    ))
                }
            </div>
        );
    }
}

class Content extends Component {
    render({ cards }) {
        const pairs = [];
        const evens = [];
        const odds = [];
        for (let idx = 0; idx < cards.length; idx += 2) {
            const slicd = cards.slice(idx, idx + 2);
            pairs.push(slicd);
            evens.push(slicd[0]);
            if (slicd.length > 1) odds.push(slicd[1]);
        }
        return (
            <section name="content">
                {/* {<!-- mobile -->} */}
                <div className="cards-container d-flex d-md-none flex-wrap">
                    {
                        pairs.map(pair => {
                            return (
                                <CardRow cards={pair} />
                            )
                        })
                    }
                </div>
                {/* {<!-- not-mobile -->} */}
                <div className="cards-container d-none d-md-flex flex-wrap">
                    <div className="col-md-6">
                        {
                            evens.map(card => {
                                return (<Card card={card} classes="card card-sized" />)
                            })
                        }
                    </div>
                    <div className="col-md-6">
                        {
                            odds.map(card => {
                                return (<Card card={card} classes="card card-sized" />)
                            })
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;