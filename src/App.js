import {  Component } from 'inferno';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';
import cards from './data/cards.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content cards={cards} />
        <Footer/>
      </div>
    );
  }
}

export default App;
