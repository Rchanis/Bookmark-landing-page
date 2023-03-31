import tab from "./images/illustration-features-tab-1.svg";
import React, { useState } from 'react';
import "./Features.css"

function Features() {
    const [active, setActive] = useState("simple-bookmarking");

    const changeActive = (state)=>{
        switch(state){
            case "simple-bookmarking":
                document.getElementById(active).style.display = none;
                document.getElementById(state).style.display = block;
                setActive(state);
                break;
            case "speedy-searching":
                document.getElementById(active).style.display = none;
                document.getElementById(state).style.display = block;
                setActive(state);
                break;
            case "easy-sharing":
                document.getElementById(active).style.display = none;
                document.getElementById(state).style.display = block;
                setActive(state);
                break;
            default:

        }
    }

    return (
        <article id="#features">
            <h2>Features</h2>
            <p></p>
            <div className="buttons">
                <button>Simple Bookmarking</button>
                <button>Speedy Searching</button>
                <button>Eassy Sharing</button>
            </div>
            <div>
                <div id="simple-bookmarking">
                    <h3>

                    </h3>
                    <p>

                    </p>
                    <button onClick={() => changeActive("simple-bookmarking")}>more info</button>
                </div>
                <div id="speedy-searching">
                    <h3>

                    </h3>
                    <p>

                    </p>
                    <button onClick={() => changeActive("speedy-searching")}>more info</button>
                </div>
                <div id="easy-sharing">
                    <h3>

                    </h3>
                    <p>

                    </p>
                    <button onClick={() => changeActive("easy-sharing")}>more info</button>
                </div>
            </div>
            <div></div>
        </article>
    )
}