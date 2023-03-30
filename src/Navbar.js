import logo_bookmark from './images/logo-bookmark.svg';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <img src={logo_bookmark} alt="bookmark logo" />
      <button src="#get-chrome" className="visuallyhidden">SKIP TO THE CONTENT</button>
      <button src="#features" aria_label="jump to the features part">FEATURES</button>
      <button src="#pricing" aria_label="jump to the pricing part">PRICING</button>
      <button src="#contact" aria_label="jump to the contact part">CONTACT</button>
      <a src="#" aria_label="login page in work">LOGIN</a>
    </nav>
  );
}

export default Navbar;
