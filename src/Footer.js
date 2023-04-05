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
                        <input type="email"></input>
                        <button>Contact Us</button>
                    </div>
                </label>
            </form>
            <nav id="footer-navbar">
                <img alt="bookmark-logo" src={bookmark_logo}>

                </img>
                <button>
                    FEATURES
                </button>
                <button>
                    PRICING
                </button>
                <button>
                    CONTACT
                </button>
                <button aria-label="go to our facebook page">
                    <img aria-hidden="true" alt="facebook logo" src={facebook_white_logo}>
                    </img>
                </button>
                <button aria-label="go to our twitter page">
                    <img aria-hidden="true" alt="twitter logo" src={twitter_white_logo}>
                    </img>
                </button>
            </nav>
        </footer>
    )
}

export default Footer;
