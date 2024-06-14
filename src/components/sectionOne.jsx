import React, { useEffect, useState } from "react";

export const SectionOne = () => {
    const [message, setMessage] = useState({});
    const { VITE_API } = import.meta.env;
    useEffect(() => {
        const fetchSection = async () => {
            try {
                const data = await fetch(`${VITE_API}/messages/get`);
                const result = await data.json();
                
                setMessage(result);
            } catch (error) {
                setMessage({
                    title: "Error fetching title.",
                    text: "Error fetching text.",
                });
            }
        };
        fetchSection();
    }, []);
    return (
        <section className="section__one">
            <div>
                <img className="section__one-logo" src="/hero2.png" />
                <h1 className="section__one-title">{message.title}</h1>
                <p className="section__one-text">{message.text}</p>
                <img className="section__one-appstore" src="descarga.png" />
            </div>
            <img className="section__one-phone" src="/hero.png" />
        </section>
    );
};
