import { FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { IMovie } from "../../interfaces/movie";
import { getUpcomingMovies } from "../../redux/features/movie.slice";

const Intro: FC = () => {
    const dispatch = useAppDispatch();
    const { newMovies } = useAppSelector((state) => state.movies);

    useEffect(() => {
        dispatch(getUpcomingMovies());
    }, [dispatch]);

    return (
        <div className="intro">
            {newMovies?.slice(1, 4).map((movie: IMovie) => {
                return (
                    <div key={movie.id} className="intro-card">
                        <div className="img-container">
                            <img
                                src={`https://image.tmdb.org/t/p/original//${movie.backdrop_path}`}
                                alt=""
                            />
                        </div>
                        <span>
                            <Link to={`/moviedetail/${movie.id}`}>
                                {movie.title}
                            </Link>
                        </span>
                        <div className="new-box">
                            <span>new</span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Intro;
