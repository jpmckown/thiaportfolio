import { Component } from 'inferno';

class Footer extends Component {
    render() {
        return (
            <section name="heafooter-section">
                <footer name="outro">
                    <div class="container footer" aria-describedby="footer-outro">
                        <p name="footer-outro" class="hidden" aria-hidden="true">Welcome to Thia Penta's Portfolio</p>
                        <div className="d-flex flex-wrap flex-md-row flex-column-reverse footer-shift">
                            <div className="py-2 col-md-6 col-sm-12">
                                <span>footer block</span>
                            </div>
                            <div className="py-2 col-md-6 col-sm-12">
                                <img src="https://via.placeholder.com/180" alt="" />
                            </div>
                        </div>
                    </div>
                </footer>
            </section>);
    }
}

export default Footer;