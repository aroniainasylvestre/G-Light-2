import { FC } from "react";
import Slider from "../Slider/Slider";
import GenresSection from "../Genres/GenresSection";

const Section: FC = () => {
    return (
        <section className="section">
            <Slider title={"Popular Movies"} />
            <GenresSection />
        </section>
    );
};

export default Section;
