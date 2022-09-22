import { IFilm } from './IFilm';
import { IPeople } from './IPeople';

export interface ISpecies {
  average_height: string;
  average_lifespan: string;
  classification: string;
  created: string;
  designation: string;
  edited: string;
  eye_colors: string;
  hair_colors: string;
  homeworld: string;
  language: string;
  name: string;
  people: Array<IPeople>;
  films: Array<IFilm>;
  skin_colors: string;
  url: string;
}
