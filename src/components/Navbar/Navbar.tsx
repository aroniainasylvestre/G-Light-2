import { Dispatch, FC, SetStateAction } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import { useAppSelector } from "../../hooks";

export interface IShowProps {
    show: boolean;
    setShow: Dispatch<SetStateAction<boolean>>;
}
const Navbar: FC<IShowProps> = ({ show, setShow }) => {
    const { wishlist } = useAppSelector((state) => state.wishlist);

    const close = () => {
        if (show) {
            setShow(false);
        }
    };
    
    return (
        <nav className={show ? "navbar active" : "navbar"}>
            <ul className="list-group">
                <li className="list-group-item">
                    <Link to="/" onClick={close}>
                        Home
                    </Link>
                </li>
                <li className="list-group-item">
                    <Link to="/wishlist" onClick={close}>
                        <AiOutlineHeart className="icon" />
                        {wishlist.length > 0 && <span>{wishlist.length}</span>}
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
