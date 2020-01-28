import { Component } from 'inferno';
import './content.scss';

class CardRow extends Component {
    render({ cards }) {
        return (
            <div className="row flex-md-row flex-column-reverse">
                {
                    cards.map(card => (
                        <div className="py-2 col-md-6 col-sm-12">
                            <div className="card sized">
                                <div className="card-body">
                                    <h2 className="card-title">{card.title}</h2>
                                    <p className="card-text">{card.description}</p>
                                    <img className="image-cram" src={card.image} alt="this card's beautiful" />{
                                        (card.link) ? (
                                            <a className="btn btn-lg btn-card" role="button" aria-disabled="true" href={card.link.url} traget={card.link.target}>{card.link.text}</a>
                                        ) : (
                                            <div className="spacer" aria-disabled="true"></div>
                                        )
                                    }
                                </div>
                            </div>
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
                <div className="cards-container d-flex d-lg-none flex-wrap">
                    {
                        pairs.map(pair => {
                            return (
                                <CardRow cards={pair} />
                            )
                        })
                    }
                </div>
                {/* {<!-- not-mobile -->} */}
                <div className="cards-container d-none d-lg-flex flex-wrap">
                    <div className="col-md-6">
                        {
                            evens.map(card => {
                                return (<div className="card card-sized">
                                    <div className="card-body">
                                        <h2 className="card-title">{card.title}</h2>
                                        <p className="card-text">{card.description}</p>
                                        <img className="image-cram" src={card.image} alt="this card's beautiful" />{
                                            (card.link) ? (
                                                <a className="btn btn-lg btn-card" role="button" aria-disabled="true" href={card.link.url} traget={card.link.target}>{card.link.text}</a>
                                            ) : (
                                                    <div className="spacer" aria-disabled="true"></div>
                                                )}
                                    </div>
                                </div>)
                            })
                        }
                    </div>
                    <div className="col-md-6">
                        {
                            odds.map(card => {
                                return (<div className="card card-sized">
                                    <div className="card-body">
                                        <h2 className="card-title">{card.title}</h2>
                                        <p className="card-text">{card.description}</p>
                                        <img className="image-cram" src={card.image} alt="this card's beautiful" />{
                                            (card.link) ? (
                                                <a className="btn btn-lg btn-card" role="button" aria-disabled="true" href={card.link.url} traget={card.link.target}>{card.link.text}</a>
                                            ) : (
                                                    <div className="spacer" aria-disabled="true"></div>
                                                )}
                                    </div>
                                </div>)
                            })
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default Content;