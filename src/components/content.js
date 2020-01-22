import { Component } from 'inferno';
import './content.scss';

class Content extends Component {
    render({ cards }) {
        console.debug(cards);
        return (
            <div class="container">
                {
                    cards.map(card => (
                        <div class="card" style="width: 18rem;">
                            <img class="card-img-top" src={card.image} alt="Card image cap" />
                            <div class="card-body">
                                <p class="card-text">{ card.description }</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default Content;