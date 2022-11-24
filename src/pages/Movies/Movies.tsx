import { FC } from "react";
import MovieCard from "../../components/MovieCard/MovieCard";
import { useAppSelector } from "../../hooks";
import { IMovie } from "../../interfaces/movie";

const Movies: FC = () => {
    const { movies } = useAppSelector((state) => state.movies);

    return (
        <div className="container">
            <div className="movieCard-container">
                {movies?.length > 0 &&
                    movies.map((movie: IMovie) => {
                        return <MovieCard key={movie.id} movie={movie} />;
                    })}
            </div>
        </div>
    );
};

export default Movies;
