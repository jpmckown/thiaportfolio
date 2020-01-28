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
                        <div className="d-flex flex-wrap flex-md-row flex-column-reverse header-shift">
                            <div className="py-2 col-md-6 col-sm-12">
                                <img src="https://via.placeholder.com/180" alt="" />
                            </div>
                            <div className="py-2 col-md-6 col-sm-12">
                                <span>contact block</span>
                            </div>
                        </div>
                    </div>
                </header>
            </section>
        );
    };
}

export default Header;