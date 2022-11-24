import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import MovieCard from "../MovieCard/MovieCard";
import { getPopularMovies } from "../../redux/features/movie.slice";
import { useAppDispatch, useAppSelector } from "../../hooks";

export interface ITitleProps {
    title: string;
}
const PopularMovies: FC<ITitleProps> = ({ title }) => {
    const dispatch = useAppDispatch();

    const [size, setSize] = useState(window.innerWidth);
    const [slidesNumber, setSlidesNumber] = useState<number>(0);

    const { popularMovies } = useAppSelector((state) => state.movies);

    const checkSize = () => {
        setSize(window.innerWidth);
    };

    useEffect(() => {
        dispatch(getPopularMovies());
    }, [dispatch]);

    useEffect(() => {
        window.addEventListener("resize", checkSize);
        return () => {
            window.removeEventListener("resize", checkSize);
        };
    }, [size]);

    useEffect(() => {
        if (size >= 1200) {
            setSlidesNumber(6);
        } else if (size >= 700) {
            setSlidesNumber(4);
        } else {
            setSlidesNumber(1);
        }
    }, [size]);

    return (
        <div className="slider">
            <div className="s-header">
                <h4>{title}</h4>
            </div>
            <div className="s-main">
                <Swiper
                    grabCursor={true}
                    spaceBetween={10}
                    slidesPerView={slidesNumber}
                >
                    {popularMovies?.map((movie: any) => {
                        return (
                            <SwiperSlide key={movie.id} className="swiperSlide">
                                <MovieCard movie={movie} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default PopularMovies;
