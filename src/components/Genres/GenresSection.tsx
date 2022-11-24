import { FC, useEffect, useState } from "react";
import { AiOutlineRight } from "react-icons/ai";
import MovieCard from "../MovieCard/MovieCard";
import {
    getMovieByGenre,
    getTopRatedMovies,
} from "../../redux/features/movie.slice";
import { useNavigate } from "react-router-dom";
import { IMovie } from "../../interfaces/movie";
import { useAppDispatch, useAppSelector } from "../../hooks";

export interface Igenre {
    id: number;
    name: string;
}
const genres: Igenre[] = [
    {
        id: 28,
        name: "action",
    },
    {
        id: 12,
        name: "adventure",
    },
    {
        id: 16,
        name: "animation",
    },
    {
        id: 35,
        name: "comedy",
    },
    {
        id: 10751,
        name: "family",
    },
    {
        id: 27,
        name: "horror",
    },
];

const GenresSection: FC = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { movies, topRatedMovies } = useAppSelector((state) => state.movies);

    const [moviesList, setMoviesList] = useState<IMovie[]>([]);
    const [active, setActive] = useState<Igenre | null>(null);

    useEffect(() => {
        dispatch(getTopRatedMovies());
    }, [dispatch]);

    const handleClick = (item: Igenre) => {
        dispatch(getMovieByGenre(item.id));
        setMoviesList(movies);
        setActive(item);
    };

    return (
        <div className="genres">
            <div className="g-header">
                <h4>Genres</h4>
            </div>
            <ul className="genres-list">
                {genres.map((item: Igenre) => {
                    return (
                        <li
                            key={item.id}
                            onClick={() => handleClick(item)}
                            className={
                                active?.name === item.name
                                    ? "genres-item active"
                                    : "genres-item"
                            }
                        >
                            {item.name}
                        </li>
                    );
                })}
            </ul>
            <div className="g-subsection">
                <div className="g-movieCard-container">
                    {moviesList.length > 0
                        ? moviesList.slice(0, 12).map((movie: any) => {
                              return <MovieCard key={movie.id} movie={movie} />;
                          })
                        : topRatedMovies.slice(0, 12).map((movie: any) => {
                              return <MovieCard key={movie.id} movie={movie} />;
                          })}
                </div>
                <div className="btn-container">
                    <button onClick={() => navigate("/movies")}>
                        View more <AiOutlineRight className="icon" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GenresSection;
