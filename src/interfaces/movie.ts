export interface IMovie {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface IGenre {
    id: number;
    name: string;
}

export interface ICompanie {
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
}

export interface ICountrie {
    iso_3166_1: string;
    name: string;
}

export interface ISpokenLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface IMovieDetail extends IMovie {
    belongs_to_collection: null;
    budget: number;
    genres: IGenre[];
    homepage: string;
    imdb_id: string;
    production_companies: ICompanie[];
    production_countries: ICountrie[];
    revenue: number;
    runtime: number;
    spoken_languages: ISpokenLanguage[];
    status: string;
    tagline: string;
    title: string;
}

export interface IMovieState {
    movie: IMovieDetail | null;
    movies: IMovie[];
    topRatedMovies: IMovie[];
    popularMovies: IMovie[];
    newMovies: IMovie[];
}
