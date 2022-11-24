import { FC } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useAppSelector } from "../../hooks";
import { IMovie } from "../../interfaces/movie";

const Wishlist: FC = () => {
    const { wishlist } = useAppSelector((state) => state.wishlist);

    return (
        <div className="wishlist">
            <div className="movieCard-container">
                {wishlist?.length > 0 ? (
                    wishlist.map((movie: IMovie) => {
                        return <MovieCard key={movie.id} movie={movie} />;
                    })
                ) : (
                    <div>No movies</div>
                )}
            </div>
        </div>
    );
};

export default Wishlist;
