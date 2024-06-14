import React from "react";

export const SectionSix = () => {
    return (
        <section className="section__six">
            <div className="subcard">
                <div className="card__one section__six-card">
                    <img src="/card1.png" />
                    <p>Works with Gmail, iCloud & IMAP</p>
                </div>
                <div className="card__two section__six-card">
                    <img src="/card2.png" />
                    <p>All processing happens on device</p>
                </div>
                <div className="card__three section__six-card">
                    <img src="/card3.png" />
                    <p>Your data is yours to stay</p>
                </div>
            </div>
            <div className="subcard">
                <div className="card__four section__six-card">
                    <img src="/card4.png" />
                    <p>Supports dark mode</p>
                </div>
                <div className="card__five section__six-card">
                    <img src="/card5.png" />
                    <p>Free to use. Or pay for more features.</p>
                </div>
                <div className="card__six section__six-card">
                    <img src="/card6.png" />
                    <p>Built & maintained by indie developers</p>
                </div>
            </div>
        </section>
    );
};
