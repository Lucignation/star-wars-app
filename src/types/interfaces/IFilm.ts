import { IPeople } from './IPeople';
import { IPlanet } from './IPlanet';
import { IStarship } from './IStarship';
import { ISpecies } from './ISpecies';

export interface IFilm {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: [];
  species: string[];
  created: string;
  edited: string;
  url: string;
}
