export interface People {
    adult: boolean;
    also_known_as: any;
    biography: string;
    birthday: string;
    deathday: null;
    gender: number;
    homepage: number;
    id: number;
    imdb_id: string;
    name: string;
    place_of_birth: string;
    popularity: number;
    profile_path: string;
}

export interface PeopleFilm {
    cast_id: number;
    character: string;
    credit_id: string;
    gender: number;
    id: number;
    name: string;
    order: number;
    profile_path: string;
}
