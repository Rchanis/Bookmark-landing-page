import logo_bookmark from './images/logo-bookmark.svg';
import './Navbar.css';

function Navbar() {
  return (
    <nav id="navbar">
      <img src={logo_bookmark} alt="bookmark logo" />
      <button href="#get-chrome" className="visuallyhidden">SKIP TO THE CONTENT</button>
      <a href="#features" aria_label="jump to the features part">FEATURES</a >
      <button href="#contact" aria_label="jump to the contact part">CONTACT</button>
      <button href="#pricing" aria_label="jump to the pricing part">PRICING</button>
      <a src="#" aria_label="login page in work">LOGIN</a>
    </nav>
  );
}

export default Navbar;
