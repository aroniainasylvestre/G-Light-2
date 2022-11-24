import { FC, FormEvent, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { searchMovie } from "../../redux/features/movie.slice";
import { useAppDispatch } from "../../hooks";

const Search: FC = () => {
    const navigate = useNavigate();
    const textRef = useRef<HTMLInputElement | null>(null);
    const dispatch = useAppDispatch();

    const [search, setSearch] = useState<string>("");

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        setSearch(textRef.current!.value);
        textRef.current!.value = "";
    };

    useEffect(() => {
        if (search) {
            dispatch(searchMovie(search));
            setSearch("");
            navigate("/movies");
        }
    }, [search, dispatch, navigate]);

    return (
        <form className="search" onSubmit={onSubmit}>
            <input
                type="text"
                name="movie"
                id="movie"
                placeholder="Search Movie ..."
                ref={textRef}
            />
            <button type="submit" className="search-btn">
                <AiOutlineSearch className="icon" />
            </button>
        </form>
    );
};

export default Search;
