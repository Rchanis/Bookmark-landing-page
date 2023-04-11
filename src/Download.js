import chrome_logo from "./images/logo-chrome.svg";
import firefox_logo from "./images/logo-firefox.svg";
import opera_logo from "./images/logo-opera.svg";
import dots from "./images/bg-dots.svg"
import "./Download.css"

function Download() {
    return (
        <article id="download">
            <div id="download-header">
                <h2>Download the extension</h2>
                <p>
                    We’ve got more browsers in the pipeline. Please do let us know
                    if you’ve got a favourite you’d like us to prioritize.
                </p>
            </div>
            <div id="download-containers">
                <div id="download-chrome" className="container">
                    <img className="logo" src={chrome_logo} alt="Chrome logo" />
                    <h3>Add to Chrome</h3>
                    <p>Minimum version 62</p>
                    <img alt="dots" className="dots" aria-hidden="true" src={dots}/>
                    <button aria_label="install chrome extension">Add & Install Extension</button>
                </div>
                <div id="download-firefox" className="container">
                    <img classNam="logo" src={firefox_logo} alt="Firefox logo" />
                    <h3>Add to Opera</h3>
                    <p>Minimum version 55</p>
                    <img alt="dots" className="dots" aria-hidden="true" src={dots} />
                    <button aria_label="install firefox extension">Add & Install Extension</button>
                </div>
                <div id="download-opera" className="container">
                    <img classNam="logo" src={opera_logo} alt="Opera logo" />
                    <h3>Add to Firefox</h3>
                    <p>Minimum version 46</p>
                    <img alt="dots" className="dots" aria-hidden="true" src={dots} />
                    <button aria_label="install opera extension">Add & Install Extension</button>
                </div>
            </div>
        </article>
    )
}

export default Download;