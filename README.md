# STAR-WARS-APP

A star-wars website built with [Api](https://swapi.dev/documentation). The home page is a login page allows a user to sign-in, all categories are films, species, people, starship.
To login, email must be a valid email, password must be a combination of letter and number and it must be 6 characters long.

## Frameworks and Libraries

1. React
2. SCSS
3. TypeScript
4. Redux Toolkit
5. Bootstrap
6. Jest
7. React-test-renderer

## Getting Started

First, run the development server:

```bash
npm i

then

npm start
```

To run run tests:

```bash
npm run test
```

## API's

### Get all people

```javascript
const res = await axios.get('https://swapi.dev/api/people');

console.log(res.data);
```

### Get single people endpoint

```javascript
const res = await axios.get('https://swapi.dev/api/people/1/');

console.log(res.data);
```

### Get all film

```javascript
const res = await axios.get('https://swapi.dev/api/films');

console.log(res.data);
```

### Get single film endpoint

```javascript
const res = await axios.get('https://swapi.dev/api/films/1/');

console.log(res.data);
```

### Get starships

```javascript
const res = await axios.get('https://swapi.dev/api/starships');

console.log(res.data);
```

### Get single starships endpoint

```javascript
const res = await axios.get('https://swapi.dev/api/starships/9/
');

console.log(res.data);
```

### Get species

```javascript
const res = await axios.get('https://swapi.dev/api/species');

console.log(res.data);
```

### Get single species endpoint

```javascript
const res = await axios.get('https://swapi.dev/api/species/3/
');

console.log(res.data);
```

### Global State interface

```javascript
export type Store = {
  allPeople: Array<IPeople>,
  people: IPeople,
  films: IFilm[],
  film: IFilm,
  species: Array<ISpecies>,
  specie: ISpecies,
  planets: Array<IPlanet>,
  planet: IPlanet,
  starships: Array<IStarship>,
  starship:
    | IStarship
    | IStarship[]
    | IPlanet[]
    | ISpecies[]
    | IPeople[]
    | IFilm[]
    | any[],
};
```

### ICategory interface

```javascript
export interface ICategory {
  title: string;
  total: number;
  info: string;
  colorCode: string;
}
```

### IFilm interface

```javascript
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
```

### ISpecies interface

```javascript
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
```

### IStarship interface

```javascript
export interface IStarship {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: [];
  films: string[];
  created: string;
  edited: string;
  url: string;
}
```

### IPeople interface

```javascript
export interface IPeople {
  name: string;
  mass: string;
  skin_color: string;
  height: string;
  homeworld: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  hair_color: string;
  species: string[];
  starships: string[];
  vehicles: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}
```

## Public Pages

- [Login](https://star-wars-app-kohl.vercel.app/) (http://localhost:3000)

- [Dashboard](https://star-wars-app-kohl.vercel.app/dashboard) (http://localhost:3000/dashboard)

- [film](https://star-wars-app-kohl.vercel.app/film/1) (http://localhost:3000/film/1)

- [People](https://star-wars-app-kohl.vercel.app/people) (http://localhost:3000/people)

- [Person](https://star-wars-app-kohl.vercel.app/people/1) (http://localhost:3000/people/1)

- [Species](https://star-wars-app-kohl.vercel.app/species) (http://localhost:3000/species)

- [Specie](https://star-wars-app-kohl.vercel.app/species/3) (http://localhost:3000/species/3)

- [Starships](https://star-wars-app-kohl.vercel.app/starships) (http://localhost:3000/starships)

- [Starship](https://star-wars-app-kohl.vercel.app/starships/1) (http://localhost:3000/starships/1)

### Follow Gerald Olumide

- [LinkedIn](https://linkedin.com/in/geraldolumide)
- [Twitter](https://twitter.com/lucignation)
- [GitHub](https://github.com/lucignation)
- [Medium](https://medium.com/@lucignation)
- [Portfolio](https://gerald.vercel.app)
