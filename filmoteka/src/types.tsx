export type MovieProps = {
    id: number;
    title: string;
    year: number;
    genres: string[];
    selected: boolean;
};

export type MovieListProps = {
    movies: MovieProps[];
};

export type SearchBarProps = {
    onChange: () => void;
};