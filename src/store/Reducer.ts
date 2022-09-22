import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Store } from '../common/interfaces/interface';
import { IFilm } from '../common/interfaces/IFilm';
import { IStarship } from '../common/interfaces/IStarship';
import { ISpecies } from '../common/interfaces/ISpecies';
import { IPeople } from '../common/interfaces/IPeople';

const initialState: Store = {
  people: {
    name: '',
    mass: '',
    skin_color: '',
    height: '',
    homeworld: '',
    eye_color: '',
    birth_year: '',
    gender: '',
    hair_color: '',
    species: [],
    starships: [],
    vehicles: [],
    films: [],
    created: '',
    edited: '',
    url: '',
  },
  allPeople: [],
  films: [],
  film: {
    title: '',
    episode_id: 0,
    opening_crawl: '',
    director: '',
    producer: '',
    release_date: '',
    characters: [],
    planets: [],
    starships: [],
    vehicles: [],
    species: [],
    created: '',
    edited: '',
    url: '',
  },
  species: [],
  planets: [],
  starships: [],
  specie: {
    average_height: '',
    average_lifespan: '',
    classification: '',
    created: '',
    designation: '',
    edited: '',
    eye_colors: '',
    hair_colors: '',
    homeworld: '',
    language: '',
    name: '',
    people: [],
    films: [],
    skin_colors: '',
    url: '',
  },
  planet: {
    name: '',
    rotation_period: '',
    orbital_period: '',
    diameter: '',
    climate: '',
    gravity: '',
    terrain: '',
    surface_water: '',
    population: '',
    residents: [],
    films: [],
    created: '',
    edited: '',
    url: '',
  },
  starship: {
    name: '',
    model: '',
    manufacturer: '',
    cost_in_credits: '',
    length: '',
    max_atmosphering_speed: '',
    crew: '',
    passengers: '',
    cargo_capacity: '',
    consumables: '',
    hyperdrive_rating: '',
    MGLT: '',
    starship_class: '',
    pilots: [],
    films: [],
    created: '',
    edited: '',
    url: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getPeople: (state: Store, action: PayloadAction<Store>) => {
      return {
        ...state,
        people: action.payload.people,
      };
    },

    getAllPeople: (state: Store, action: PayloadAction<IPeople[]>) => {
      return {
        ...state,
        allPeople: action.payload,
      };
    },

    getFilm: (state: Store, action: PayloadAction<IFilm>) => {
      return {
        ...state,
        film: action.payload,
      };
    },

    getFilms: (state: Store, action: PayloadAction<IFilm[]>) => {
      return {
        ...state,
        films: action.payload,
      };
    },

    getSpecie: (state: Store, action: PayloadAction<ISpecies>) => {
      return {
        ...state,
        specie: action.payload,
      };
    },

    getSpecies: (state: Store, action: PayloadAction<ISpecies[]>) => {
      return {
        ...state,
        species: action.payload,
      };
    },

    getStarship: (state: Store, action: PayloadAction<IStarship>) => {
      return {
        ...state,
        starship: action.payload,
      };
    },

    getStarships: (state: Store, action: PayloadAction<IStarship[]>) => {
      return {
        ...state,
        starships: action.payload,
      };
    },
  },
});

export const {
  getPeople,
  getAllPeople,
  getFilm,
  getFilms,
  getSpecie,
  getSpecies,
  getStarship,
  getStarships,
} = userSlice.actions;

export default userSlice.reducer;
