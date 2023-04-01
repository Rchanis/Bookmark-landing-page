import tab1 from "./images/illustration-features-tab-1.svg";
import tab2 from "./images/illustration-features-tab-2.svg";
import tab3 from "./images/illustration-features-tab-3.svg";
import React, { useState } from 'react';
import "./Features.css"

function Features() {
    const [active, setActive] = useState("simple-bookmarking");

    const changeActive = (state) => {
        switch (state) {
            case "simple-bookmarking":
                document.getElementById(active + "-button").style.backgroundColor = "transparent";
                document.getElementById(active).style.display = "none";
                document.getElementById(state).style.display = "grid";
                document.getElementById(state + "-button").style.backgroundColor = "orange";
                setActive(state);
                break;
            case "speedy-searching":
                document.getElementById(active + "-button").style.backgroundColor = "transparent";
                document.getElementById(active).style.display = "none";
                document.getElementById(state).style.display = "grid";
                document.getElementById(state + "-button").style.backgroundColor = "orange";
                setActive(state);
                break;
            case "easy-sharing":
                document.getElementById(active).style.display = "none";
                document.getElementById(active + "-button").style.backgroundColor = "transparent";
                document.getElementById(state).style.display = "grid";
                document.getElementById(state + "-button").style.backgroundColor = "orange";
                setActive(state);
                break;
            default:

        }
    }

    return (
        <article id="features">
            <div id="features-header">
                <h2>Features</h2>
                <p>Our aim is to make it quick and easy for you to access your favourite websites.
                    Your bookmarks sync between your devices so you can access them on the go.</p>
                <div className="buttons">
                    <button onClick={() => changeActive("simple-bookmarking")}>Simple Bookmarking</button>
                    <button onClick={() => changeActive("speedy-searching")}>Speedy Searching</button>
                    <button onClick={() => changeActive("easy-sharing")}>Eassy Sharing</button>
                </div>
                <div className="buttons">
                    <div id="simple-bookmarking-button"></div>
                    <div id="speedy-searching-button"></div>
                    <div id="easy-sharing-button"></div>
                </div>
            </div>
            <div>
                <div id="simple-bookmarking" class="features-data">
                    <img src={tab1} alt="browser tab illustration" />
                    <h3>
                        Bookmark in one click
                    </h3>
                    <p>
                        Organize your bookmarks however you like. Our simple drag-and-drop
                        interface gives you complete control over how you manage your favourite sites.
                    </p>
                    <button >more info</button>
                    <div></div>
                </div>
                <div id="speedy-searching" class="features-data">
                    <img src={tab2} alt="browser tab illustration" />
                    <h3>
                        Intelligent search
                    </h3>
                    <p>
                        Our powerful search feature will help you find saved sites in no time at
                        all. No need to trawl through all of your bookmarks.
                    </p>
                    <button >more info</button>
                    <div></div>
                </div>
                <div id="easy-sharing" class="features-data">
                    <img src={tab3} alt="browser tab illustration" />
                    <h3>
                        Share your bookmarks
                    </h3>
                    <p>
                        Easily share your bookmarks and collections with others. Create a shareable
                        link that you can send at the click of a button.
                    </p>
                    <button >more info</button>
                    <div></div>
                </div>
            </div>
        </article>
    )
}

export default Features;