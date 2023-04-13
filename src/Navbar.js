import logo_bookmark from './images/logo-bookmark.svg';
import './Navbar.css';

function Navbar() {
  return (
    <nav id="navbar">
      <img src={logo_bookmark} alt="bookmark logo" />
      <a href="#get-chrome" className="visuallyhidden">SKIP TO THE CONTENT</a>
      <a href="#features" aria_label="jump to the features part">FEATURES</a >
      <a href="#contact" aria_label="jump to the contact part">CONTACT</a>
      <a href="#pricing" aria_label="jump to the pricing part">PRICING</a>
      <a src="#" aria_label="login page in work">LOGIN</a>
    </nav>
  );
}

export default Navbar;
