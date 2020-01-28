import { Component } from 'inferno';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import cards from './data/cards.json';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="row">
          <div className="col-sm-12">
            <Header />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Content cards={cards} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
