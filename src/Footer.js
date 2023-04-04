import facebook_white_logo from "./images/icon-facebook.svg";
import twitter_white_logo from "./images/icon-twitter.svg";
import bookmark_logo from "./images/logo-bookmark.svg";

function Footer(){
    return(
        <footer>
            <form>
                <p>35.000+ ALREADY JOINED</p>
                <label>
                    Stay up-to-date with what we're doing
                    <input type="email"></input>
                    <button>Contact Us</button>
                </label>
            </form>
            <nav>
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
