import { ReactComponent as GitHubLogo } from "assets/img/IconGithub.svg";
import './styles.css';

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DsMovie</h1>
          <a href="https://github.com/agsm159">
            <div className="dsmovie-contact-container">
              <GitHubLogo />
              <p className="dsmovie-github-link">/agsm159</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
