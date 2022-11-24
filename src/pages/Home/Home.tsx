import { FC } from "react";
import Intro from "../../components/Intro/Intro";
import Section from "../../components/Section/Section";

const Home: FC = () => {
    return (
        <div className="home">
            <Intro />
            <Section />
        </div>
    );
};

export default Home;
