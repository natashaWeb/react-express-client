import React from "react";

export const SectionFour = () => {
    return (
        <section className="section__four">
            <img src="/expand.png" className="section__four-phone" />
            <div>
                <img src="/flecha3.png" className="section__arrow" />
                <h2 className="section__title">Tap to expand</h2>
                <p className="section__text">
                    Open the message to view the whole thread.
                </p>
            </div>
        </section>
    );
};
