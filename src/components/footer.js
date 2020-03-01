import { Component } from "inferno";
import './footer.scss';

class Footer extends Component {
  render() {
    return (
      <section name="heafooter-section">
        <footer name="outro">
          <div class="footer footer-bump-up" aria-describedby="footer-outro">
            <p name="footer-outro" class="hidden" aria-hidden="true">
              Welcome to Thia Penta's Portfolio
            </p>
            <div className="d-flex flex-wrap flex-md-row flex-column-reverse footer-shift">
              <div className="py-3 col-md-6 col-sm-12">
                <div className="d-flex flex-column justify-content-center">
                  <div className="mx-auto mt-2">
                    <img src="/assets/made-with/group-3.png" srcset="/assets/made-with/group-3@2x.png 2x, /assets/made-with/group-3@3x.png 3x" alt="Made with love" />
                  </div>
                  <div className="mx-auto my-2">
                    <span className="copyright">© 2020 Thia Penta</span>
                  </div>
                  <div className="mx-auto my-2">
                    <a className="btn btn-dark rounded-pill" role="button" aria-disabled="true" href="#top">^ Back to the top ^</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

export default Footer;
