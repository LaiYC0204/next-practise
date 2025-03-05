// Footer.js
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid justify-content-center gap-3">
          <span>&copy; 2025 LaiYC</span>
          <Link href="https://github.com/LaiYC0204/next-practise" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;