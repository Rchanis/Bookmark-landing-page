import tab from "./images/illustration-hero.svg";
import "./Header.css"

function Header() {
    return (
        <header>
            <h1>A Simple Bookmark Manager</h1>
            <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
            <div className="buttons">
                <button id="get-chrome" href="#" role="link">Get it on Chrome</button>
                <button href="#" role="link">Get it on Firefox</button>
            </div>
            <img src={tab} alt="browser illustration" />
            <div></div>

        </header>
    );
}

export default Header;