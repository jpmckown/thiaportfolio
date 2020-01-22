import { render } from 'inferno';
import './styles/main.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

render(<App />, document.getElementById('portfolio'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
