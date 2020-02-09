import {  Component } from 'inferno';
import 'bootstrap/js/src/collapse';
import './header.scss';

class Header extends Component {
    render() {
        return (
            <section name="header-section">
                <header name="intro">
                    <div class="header" aria-describedby="header-intro">
                        <div className="d-flex flex-wrap flex-md-row flex-column-reverse header-shift">
                            <div className="py-2 col-md-6 col-sm-12">
                                <p name="intro-h1" class="H1---Dark">I am Thia Penta, a UX Product Designer.</p>
                                <p name="intro-para" class="Paragraph---Dark">Over the years I have worked on developing my skill set visually, studying physical and digital mediums. I was drawn to human-centered design by my love for solving puzzles that better the human experience and with a passion for accessibility for all. My goal is to grow as a designer and know, that with my help, people can access the tools/products they want or need in a way that is pleasurable. I bring energy, a big smile, and an eagerness to learn, grow and discover.</p>
                                <a class="btn btn-dark" href="#">Get to know me more</a>
                                {/* <img src="https://via.placeholder.com/180" alt="" /> */}
                            </div>
                            <div className="py-2 col-md-6 col-sm-12">
                                <img src="/assets/resume-icon.svg" alt="My Resume" />
                                <img src="/assets/email-icon.svg" alt="Email me" />
                                <img src="/assets/linkedin-icon.svg" alt="My linkedin profile" />
                                <img src="/assets/instagram-icon.svg" alt="My instagram" />
                            </div>
                        </div>
                    </div>
                </header>
            </section>
        );
    };
}

export default Header;