import { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { getMovieDetail } from "../../redux/features/movie.slice";

const MovieDetail: FC = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();

    const { movie } = useAppSelector((state) => state.movies);

    useEffect(() => {
        dispatch(getMovieDetail(Number(id)));
    }, [id, dispatch]);

    return (
        <div
            className="movie-detail"
            style={{
                backgroundImage: `url(
                https://image.tmdb.org/t/p/original//${movie?.backdrop_path}`,
            }}
        >
            <div className="movie-detail-container">
                <div className="movie-detail-left">
                    <div className="img-container">
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                            alt={movie?.title}
                        />
                    </div>
                </div>
                <div className="movie-detail-right">
                    <div className="movie-detail-title">
                        <h3>{movie?.title}</h3>
                        <div>
                            <span>{movie?.release_date?.split("-")[0]}</span>
                            <span>
                                {movie?.spoken_languages &&
                                    movie?.spoken_languages[0].english_name}
                            </span>
                        </div>
                    </div>
                    <div className="movie-detail-genres">
                        <label>Genres</label>
                        <ul>
                            {movie?.genres?.map((genre: any) => {
                                return <li key={genre.id}>{genre.name}</li>;
                            })}
                        </ul>
                    </div>
                    <div className="movie-detail-overview">
                        <label>Overview</label>
                        <p>{movie?.overview}</p>
                    </div>
                    <div className="movie-detail-note">
                        <span>{movie?.vote_average}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetail;
