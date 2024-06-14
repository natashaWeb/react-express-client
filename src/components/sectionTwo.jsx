import React from "react";

export const SectionTwo = () => {
    return (
        <section className="section__two">
            <img src="/archive.png" className="section__two-phone"/>
            <div>
                <img  src="/flecha.png" className="section__arrow"/>
                <h2 className="section__title">Drag left to archive</h2>
                <p className="section__text">Unread messages appear in a stack of cards, like this.</p>
            </div>
        </section>
    );
};
