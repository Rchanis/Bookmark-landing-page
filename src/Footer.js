import facebook_white_logo from "./images/icon-facebook.svg";
import twitter_white_logo from "./images/icon-twitter.svg";
import bookmark_logo from "./images/logo-bookmark.svg";

import "./Footer.css"

function Footer() {
    return (
        <footer id="footer">
            <form id="footer-email">
                <p>35.000+ ALREADY JOINED</p>
                <label>
                    <span>Stay up-to-date with what we're doing</span>
                    <div>
                        <input type="email" placeholder="Enter your email address"></input>
                        <button>Contact Us</button>
                    </div>
                </label>
            </form>
            <nav id="footer-navbar">
                <img alt="bookmark-logo" src={bookmark_logo}>

                </img>
                <a href="#features" aria_label="jump to the features part">FEATURES</a >
                <a href="#contact" aria_label="jump to the contact part">CONTACT</a>
                <a href="#pricing" aria_label="jump to the pricing part">PRICING</a>
                <a aria-label="go to our facebook page">
                    <img aria-hidden="true" alt="facebook logo" src={facebook_white_logo}>
                    </img>
                </a>
                <a aria-label="go to our twitter page">
                    <img aria-hidden="true" alt="twitter logo" src={twitter_white_logo}>
                    </img>
                </a>
            </nav>
        </footer>
    )
}

export default Footer;
