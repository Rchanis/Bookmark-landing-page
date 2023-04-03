import "./FAQs.css";

function FAQs() {
    return (
        <article id="FAQs">
            <div id="FAQs-header">
                <h2>
                    Frequently Asked Questions
                </h2>
                <p>
                    Here are some of our FAQs. If you have any other questions you’d like
                    answered please feel free to email us.
                </p>
            </div>
            <div id="FAQs-content">
                <details>
                    <summary>
                        <span class="summary-title">What is Bookmark?</span>

                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8" /></svg>
                    </summary>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt
                        justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                    </p>
                </details>
                <details className="question">
                    <summary>
                        How can I request a new browser?
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8" /></svg>
                    </summary>
                    <p>
                        Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula.
                        Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
                        ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies.
                        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
                    </p>
                </details>
                <details className="question">
                    <summary>
                        Is there a mobile app?
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8" /></svg>
                    </summary>
                    <p>
                        Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum
                        urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed
                        sollicitudin ex et ultricies bibendum.
                    </p>
                </details>
                <details className="question">
                    <summary>
                        What about other Chromium browsers?
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="#5267DF" stroke-width="3" d="M1 1l8 8 8-8" /></svg>
                    </summary>
                    <p>
                        Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam
                        vitae neque eget nisl gravida pellentesque non ut velit.
                    </p>
                </details>

                <button className="more-info">More info</button>
            </div>
        </article>
    )
}

export default FAQs;