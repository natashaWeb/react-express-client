import "../css/index.css";

import { SectionOne } from "../components/sectionOne";
import { SectionTwo } from "../components/sectionTwo";
import { SectionThree } from "../components/sectionThree";
import { SectionFour } from "../components/sectionFour";
import { SectionFive } from "../components/sectionFive";
import { SectionSix } from "../components/sectionSix";
import { SectionSeven } from "../components/sectionSeven";

export const Index = () => {
    return (
        <main className="main">
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
        </main>
    );
};
