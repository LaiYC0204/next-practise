// Header.js
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav className="navbar sticky-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className='navbar-brand' href="/#">Next練習</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" href="/">Home</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;