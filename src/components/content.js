import { Component } from 'inferno';
import './content.scss';

class CardRow extends Component {
    render({ cards }) {
        return (
            <div className="row flex-md-row flex-column-reverse">
                {
                    cards.map(card => (
                        <div className="py-2 col-md-6 col-sm-12">
                            <div class="card" style="width: 18rem;">
                                <img class="card-img-top" src={card.image} alt="Card image cap" />
                                <div class="card-body">
                                    <p class="card-text">{card.description}</p>
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
        for (let idx = 0; idx < cards.length; idx += 2) {
            pairs.push(cards.slice(idx, idx+2));
            
        }
        return (
            <div class="container">
                <div className="d-flex flex-wrap alter-shift">
                    {
                        pairs.map(pair => {
                            return (
                                <CardRow cards={pair} />
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Content;