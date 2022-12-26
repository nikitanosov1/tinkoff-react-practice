export type MovieProps = {
    id: number;
    title: string;
    year: number;
    genres: string[];
    selected: boolean;
};

export type MovieListProps = {
    movies: MovieDetailsData[];
};

export type SearchBarProps = {
    onChange: () => void;
};


/*
{
    "id": 5,
    "title": "Valkyrie",
    "year": "2008",
    "runtime": "121",
    "genres": [
        "Drama",
        "History",
        "Thriller"
    ],
    "director": "Bryan Singer",
    "actors": "Tom Cruise, Kenneth Branagh, Bill Nighy, Tom Wilkinson",
    "plot": "A dramatization of the 20 July assassination and political coup plot by desperate renegade German Army officers against Hitler during World War II.",
    "posterUrl": "http://ia.media-imdb.com/images/M/MV5BMTg3Njc2ODEyN15BMl5BanBnXkFtZTcwNTAwMzc3NA@@._V1_SX300.jpg"
}
*/

export type MovieDetailsData = {
    id: number;
    title: string;
    year: number;
    runtime: number;
    genres: string[];
    director: string;
    actors: string;
    plot: string;
    rate: number;
    posterUrl: string;
};