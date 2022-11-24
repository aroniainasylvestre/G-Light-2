import { FC, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Search from "../Search/Search";

const Header: FC = () => {
    const { pathname } = useLocation();
    const [show, setShow] = useState<boolean>(false);
    
    return (
        <div
            className={pathname.includes("/movie/") ? "header fixed" : "header"}
        >
            <h3 className="main-title">
                <span>G</span>-Light
            </h3>
            <Search />
            <Navbar show={show} setShow={setShow} />
            <button
                className="burger-button"
                aria-expanded={show}
                onClick={() => setShow(!show)}
            >
                <span className="burger-icon"></span>
            </button>
        </div>
    );
};

export default Header;
