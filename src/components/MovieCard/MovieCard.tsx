import { FC } from "react";
import { AiFillHeart, AiOutlineClose } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks";
import { IMovie } from "../../interfaces/movie";
import { addMovie, removeMovie } from "../../redux/features/wishlist.slice";

export interface IMovieProps {
    movie: IMovie;
}

const MovieCard: FC<IMovieProps> = ({ movie }) => {
    const { pathname } = useLocation();

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const realeseDate = movie.release_date.split("-")[0];

    const addToWishlist = () => {
        dispatch(addMovie(movie));
    };

    const removeFromWishlist = () => {
        dispatch(removeMovie(movie.id));
    };

    return (
        <div className="movie-card">
            <div className="img-container">
                <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                />
            </div>
            <div className="mc-info">
                <h3 onClick={() => navigate(`/moviedetail/${movie.id}`)}>
                    {movie.title}
                </h3>
                <div>
                    <p>{realeseDate}</p>
                    {pathname === "/wishlist" ? (
                        <AiOutlineClose
                            className="icon"
                            onClick={removeFromWishlist}
                            title="remove"
                        />
                    ) : (
                        <AiFillHeart
                            className="icon"
                            onClick={addToWishlist}
                            title="Add to wishlist"
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
