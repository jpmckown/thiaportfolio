import {  Component } from 'inferno';
import 'bootstrap/js/src/collapse';
import './header.scss';

class Header extends Component {
    render() {
        return (
            <section name="header-section">
                <header name="intro">
                    <div class="header" aria-describedby="header-intro">
                        <p name="header-intro" class="hidden" aria-hidden="true">Welcome to Thia Penta's Portfolio</p>
                        <div class="container">
                            Header
                            {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                                <a class="navbar-brand" href="#">
                                    <img src="https://via.placeholder.com/150" width="150" height="150" class="d-inline-block align-top bump-right" alt="" />
                                    Thia
                                </a>
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarNav">
                                    <ul class="navbar-nav">
                                        <li class="nav-item active">
                                            <a class="nav-link" href="#">TBD <span class="sr-only">(current)</span></a>
                                        </li>
                                    </ul>
                                </div>
                            </nav> */}
                        </div>
                    </div>
                </header>
            </section>
        );
    };
}

export default Header;