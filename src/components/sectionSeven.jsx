import React from "react";

export const SectionSeven = () => {
    return (
        <section className="section__seven">
            <div className="card__container">
                <h3 className="section__seven-title">Praise for Triage 1</h3>
                <div className="subcard">
                    <div className="card">
                        <p>
                            Since I’ve been using Triage, I’m more caught up on
                            my email than I have been in years.
                        </p>
                        <img src="/brag1.png" />
                    </div>
                    <div className="card">
                        <p>
                            If you re constantly battling to keep your email
                            account at inbox zero, Triage for iOS could be worth
                            a look.
                        </p>
                        <img src="/brag2.png" />
                    </div>
                    <div className="card">
                        <p>
                            Triage makes it feel seamless, and even fun, to
                            achieve if not Inbox Zero at least Inbox Zen.
                        </p>
                        <img src="/brag3.png" />
                    </div>
                </div>
                <div className="subcard">
                    <div className="card">
                        <p>
                            Triage provides the first aid necessary to get your
                            inbox back in fighting shape.
                        </p>
                        <img src="/brag4.png" />
                    </div>
                    <div className="card">
                        <p>
                            Triage is a boon to those who have struggled to keep
                            their inboxes clean and organized.
                        </p>
                        <img src="/brag5.png" />
                    </div>
                    <div className="card">
                        <p>Triage is my new favorite email app for iPhone.</p>
                        <img src="/brag6.png" />
                    </div>
                </div>
            </div>
            <div className="section__seven-footer">
                <ul className="footer__links">
                    <li>FAQ</li>
                    <li>Privacy</li>
                    <li>Terms</li>
                    <li>Security</li>
                </ul>
                <div className="footer__networks">
                    <img src="/correo.png" />
                    <img src="/twitter.png" />
                </div>
            </div>
        </section>
    );
};
