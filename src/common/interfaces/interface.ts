import { IFilm } from './IFilm';
import { IPeople } from './IPeople';
import { IPlanet } from './IPlanet';
import { IStarship } from './IStarship';
import { ISpecies } from './ISpecies';

export type UserContextState = {
  user: {};
};

export type Store = {
  allPeople: Array<IPeople>;
  people: IPeople;
  films: IFilm[];
  film: IFilm;
  species: Array<ISpecies>;
  specie: ISpecies;
  planets: Array<IPlanet>;
  planet: IPlanet;
  starships: Array<IStarship>;
  starship:
    | IStarship
    | IStarship[]
    | IPlanet[]
    | ISpecies[]
    | IPeople[]
    | IFilm[]
    | any[];
};

export interface ISidebarItems {
  Starships: string;
  People: string;
  Species: string;
}

export interface ICategory {
  title: string;
  total: number;
  info: string;
  colorCode: string;
}
